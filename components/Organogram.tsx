'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface UnidadeData {
  nome: string
  sigla: string
  descricao: string
  endereco: string
  site?: string | null
}

interface OrganogramProps {
  unidades: UnidadeData[]
}

type PathNode = { index: number; x: number; yTop: number }

export default function Organogram({ unidades }: OrganogramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const [hubPoint, setHubPoint] = useState<{ x: number; y: number } | null>(null)
  const [nodes, setNodes] = useState<PathNode[]>([])
  const [trunk, setTrunk] = useState<{ y: number; xMin: number; xMax: number } | null>(null)

  const safeUnidades = useMemo(() => unidades ?? [], [unidades])

  // Calcula pontos (desktop) com base no layout real
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const compute = () => {
      if (!root || !hubRef.current) return

      const rootRect = root.getBoundingClientRect()
      const hubRect = hubRef.current.getBoundingClientRect()

      // ponto de origem: centro abaixo do card principal
      const xHub = hubRect.left + hubRect.width / 2 - rootRect.left
      const yHub = hubRect.bottom - rootRect.top + 8

      const nextNodes: PathNode[] = []

      cardRefs.current.forEach((el, index) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const x = r.left + r.width / 2 - rootRect.left
        const yTop = r.top - rootRect.top - 12 // acima do card
        nextNodes.push({ index, x, yTop })
      })

      // ordena para pegar limites do tronco horizontal
      nextNodes.sort((a, b) => a.x - b.x)

      if (nextNodes.length > 0) {
        const xMin = nextNodes[0].x
        const xMax = nextNodes[nextNodes.length - 1].x

        // altura da linha horizontal principal (um pouco abaixo do hub)
        // ajuste esse número pra ficar idêntico ao seu print
        const trunkY = yHub + 50

        setTrunk({ y: trunkY, xMin, xMax })
      } else {
        setTrunk(null)
      }

      setHubPoint({ x: xHub, y: yHub })
      setNodes(nextNodes)
    }

    compute()
    const ro = new ResizeObserver(() => compute())
    ro.observe(root)

    window.addEventListener('resize', compute)
    window.addEventListener('scroll', compute, { passive: true })

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', compute)
      window.removeEventListener('scroll', compute)
    }
  }, [safeUnidades.length])

  return (
    <div ref={containerRef} className="w-full py-12 relative">
      {/* ===== SVG CONNECTORS (DESKTOP) - LINHA HORIZONTAL + QUEDAS RETAS ===== */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" aria-hidden="true">
        {hubPoint && trunk && (
          <g>
            {/* tronco vertical (do hub até a linha horizontal) */}
            <path
              d={`M ${hubPoint.x} ${hubPoint.y} L ${hubPoint.x} ${trunk.y}`}
              stroke="rgba(107,142,35,0.28)"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              className="transition-all duration-300"
            />

            {/* linha horizontal principal */}
            <path
              d={`M ${trunk.xMin} ${trunk.y} L ${trunk.xMax} ${trunk.y}`}
              stroke="rgba(107,142,35,0.28)"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </g>
        )}

        {/* quedas verticais + nós */}
        {hubPoint &&
          trunk &&
          nodes.map(({ index, x, yTop }) => {
            const active = hoveredIndex === index

            return (
              <g key={index}>
                {/* queda vertical */}
                <path
                  d={`M ${x} ${trunk.y} L ${x} ${yTop}`}
                  stroke={active ? 'rgba(107,142,35,0.70)' : 'rgba(107,142,35,0.28)'}
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* nó em cima (na linha horizontal), como no print */}
                <circle
                  cx={x}
                  cy={trunk.y}
                  r={4}
                  fill={active ? '#E7C873' : '#ffffff'}
                  stroke={active ? 'rgba(107,142,35,0.85)' : 'rgba(107,142,35,0.30)'}
                  strokeWidth={2}
                  className="transition-all duration-300"
                />

                {/* (Opcional) nó embaixo — no seu print não parece ter, então deixei OFF */}
                {/* 
                <circle
                  cx={x}
                  cy={yTop}
                  r={3}
                  fill="#ffffff"
                  stroke="rgba(107,142,35,0.25)"
                  strokeWidth={2}
                />
                */}
              </g>
            )
          })}
      </svg>

      <div className="flex flex-col items-center relative z-10">
        {/* --- NÍVEL PRINCIPAL (SEDE) --- */}
        <div className="relative z-20 w-full max-w-3xl px-4 flex flex-col items-center">
          {/* LOGO FORA DO CARD */}
          <div className="mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
              <Image
                src="/images/logo.png"
                alt="Logo da Associação Franciscana"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* CARD MARROM */}
          <article
            className="
              relative
              bg-franciscan-brown text-white rounded-2xl p-8 shadow-2xl text-center
              transform transition hover:scale-[1.01] duration-300
              border-b-4 border-franciscan-green ring-4 ring-franciscan-green/10
            "
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Associação Franciscana de Educação e Assistência Social
            </h2>

            <p className="text-franciscan-beige/80 text-sm font-medium uppercase tracking-widest">
              Centro Administrativo
            </p>

            {/* âncora do SVG */}
            <div ref={hubRef} className="absolute left-1/2 -bottom-1 h-1 w-1 -translate-x-1/2" />
          </article>
        </div>

        {/* Espaçador para não colar os cards */}
        <div className="h-24 md:h-32" />

        {/* --- NÍVEL DAS UNIDADES --- */}
        <div className="w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
            {safeUnidades.map((unit, index) => (
              <div
                key={unit.sigla}
                className="relative group flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Linha Conectora Mobile */}
                <div className="md:hidden absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-franciscan-green/20" />

                {/* Card */}
                <div
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className="relative z-20 w-full bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full"
                >
                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-franciscan-light text-franciscan-green text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md mb-3 border border-franciscan-green/10">
                      {unit.sigla}
                    </span>

                    <h3 className="text-lg font-bold text-franciscan-brown leading-tight min-h-[3.5rem] flex items-center justify-center">
                      {unit.nome}
                    </h3>

                    {/* underline minimalista */}
                    <div className="mx-auto mt-3 h-[2px] w-10 bg-franciscan-green/20 group-hover:w-16 group-hover:bg-franciscan-green/50 transition-all duration-300 rounded-full" />
                  </div>

                  <div className="text-center flex-grow">
                    <p className="text-franciscan-gray text-xs leading-relaxed mb-4 line-clamp-3">
                      {unit.descricao}
                    </p>

                    <div className="flex items-center justify-center text-[10px] text-gray-400 mb-4 bg-gray-50 py-2 rounded-lg">
                      <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {unit.endereco}
                    </div>
                  </div>

                  <div className="mt-auto">
                    {unit.site && unit.site !== '' ? (
                      <Link
                        href={unit.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 text-xs font-bold text-white bg-franciscan-green hover:bg-franciscan-brown rounded-lg transition-colors duration-200 text-center"
                      >
                        Acessar Site
                      </Link>
                    ) : (
                      <div className="block w-full py-2 text-xs font-medium text-gray-400 bg-gray-100 rounded-lg text-center cursor-default">
                        Unidade Interna
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}