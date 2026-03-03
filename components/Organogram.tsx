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

export default function Organogram({ unidades }: OrganogramProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [paths, setPaths] = useState<
    Array<{ index: number; x1: number; y1: number; x2: number; y2: number }>
  >([])

  const safeUnidades = useMemo(() => unidades ?? [], [unidades])

  // Calcula caminhos (desktop) com base no layout real
  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const compute = () => {
      if (!root || !hubRef.current) return

      const rootRect = root.getBoundingClientRect()
      const hubRect = hubRef.current.getBoundingClientRect()

      // ponto de origem: centro abaixo do card principal
      const x1 = hubRect.left + hubRect.width / 2 - rootRect.left
      const y1 = hubRect.bottom - rootRect.top + 8

      const next: Array<{ index: number; x1: number; y1: number; x2: number; y2: number }> = []

      cardRefs.current.forEach((el, index) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const x2 = r.left + r.width / 2 - rootRect.left
        const y2 = r.top - rootRect.top - 12 // acima do card
        next.push({ index, x1, y1, x2, y2 })
      })

      setPaths(next)
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
    <div ref={containerRef} className="w-full py-12">
      <div className="flex flex-col items-center">
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

        {/* ===== SVG CONNECTORS (DESKTOP) ===== */}
        <div className="relative hidden md:block w-full max-w-7xl px-4 mt-2">
          {/* Área do SVG precisa cobrir até o topo dos cards */}
          <svg
            className="absolute left-0 top-0 w-full h-[220px] pointer-events-none"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {paths.map(({ index, x1, y1, x2, y2 }) => {
              // normaliza para viewBox
              const rootW = containerRef.current?.clientWidth || 1200
              const sx = (x1 / rootW) * 1200
              const ex = (x2 / rootW) * 1200

              // y é relativo ao container real; aqui “encaixamos” num espaço fixo (220px)
              // Se você quiser 100% preciso, dá pra mapear y pela altura real do trecho.
              // Na prática, esse mapeamento funciona bem porque a área é fixa.
              const clamp = (v: number) => Math.max(0, Math.min(220, v))
              const sy = clamp((y1 / 260) * 220)
              const ey = clamp((y2 / 260) * 220)

              const active = hoveredIndex === index

              // curva suave (organograma elegante)
              const midY = sy + (ey - sy) * 0.55
              const d = `M ${sx} ${sy} C ${sx} ${midY}, ${ex} ${midY}, ${ex} ${ey}`

              return (
                <g key={index}>
                  {/* trilha base */}
                  <path
                    d={d}
                    stroke={active ? 'rgba(107,142,35,0.70)' : 'rgba(107,142,35,0.28)'}
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  {/* fluxo discreto (dash animado) */}
                  <path
                    d={d}
                    stroke="rgba(107,142,35,0.30)"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    className={`flow-stroke transition-opacity duration-300 ${
                      active ? 'opacity-80' : 'opacity-40'
                    }`}
                  />
                  {/* nó */}
                  <circle
                    cx={ex}
                    cy={ey}
                    r={4}
                    fill={active ? '#E7C873' : '#ffffff'}
                    stroke={active ? 'rgba(107,142,35,0.85)' : 'rgba(107,142,35,0.25)'}
                    strokeWidth={2}
                    className="transition-all duration-300"
                  />
                </g>
              )
            })}
          </svg>

          {/* espaço “reservado” para o SVG não sobrepor */}
          <div className="h-[90px]" />
        </div>

        {/* --- NÍVEL DAS UNIDADES --- */}
        <div className="w-full mt-8 md:mt-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
            {safeUnidades.map((unit, index) => (
              <div
                key={unit.sigla}
                className="relative group pt-0 md:pt-12 flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Linha Conectora (mantida no mobile simples) */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-0.5 h-12 bg-franciscan-green/20 group-hover:bg-franciscan-green/60 transition-colors duration-300" />

                {/* Nó */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-white border-2 border-franciscan-green/30 rounded-full z-10 group-hover:scale-125 group-hover:border-franciscan-green transition-transform duration-300 shadow-sm" />

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

                {/* Conector Vertical Mobile entre cards */}
                {index < safeUnidades.length - 1 && (
                  <div className="md:hidden w-0.5 h-8 bg-franciscan-green/15 rounded-full my-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CSS do fluxo discreto ===== */}
      <style jsx global>{`
        .flow-stroke {
          stroke-dasharray: 7 14;
          animation: flowDash 12s linear infinite;
        }
        @keyframes flowDash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -220;
          }
        }
      `}</style>
    </div>
  )
}