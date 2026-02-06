'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Interface baseada no JSON atualizado
interface UnidadeData {
  nome: string
  sigla: string
  descricao: string
  endereco: string
  site?: string | null  // 👈 Aceita string, undefined OU null
}

interface OrganogramProps {
  unidades: UnidadeData[]
}

// Ícone genérico para as unidades (mantido)
const UnitIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
)

export default function Organogram({ unidades }: OrganogramProps) {
  return (
    <div className="w-full py-12">
      <div className="flex flex-col items-center">

        {/* --- NÍVEL PRINCIPAL (SEDE) --- */}
        <div className="relative z-20 w-full max-w-3xl px-4">
          <article className="bg-franciscan-brown text-white rounded-2xl p-8 shadow-2xl text-center transform transition hover:scale-[1.01] duration-300 border-b-4 border-franciscan-green ring-4 ring-franciscan-green/10">

            {/* LOGO DA SEDE */}
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/10">
              <Image
                src="/images/logo.jpeg"
                alt="Logo da Associação Franciscana de Educação e Assistência Social"
                width={56}
                height={56}
                className="object-contain rounded-full bg-white p-1"
                priority
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
              Associação Franciscana de Educação e Assistência Social
            </h2>

            <p className="text-franciscan-beige/80 text-sm font-medium uppercase tracking-widest">
              Centro Administrativo
            </p>
          </article>
        </div>

        {/* Linha Vertical */}
        <div className="hidden md:block w-0.5 h-12 bg-franciscan-green/40"></div>

        {/* Linha Horizontal */}
        <div className="hidden md:block relative w-full max-w-7xl">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-franciscan-green/40"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-0.5 h-12 bg-franciscan-green/40"></div>
        </div>

        {/* --- NÍVEL DAS UNIDADES --- */}
        <div className="w-full mt-8 md:mt-4 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">

            {unidades.map((unit) => (
              <div
                key={unit.sigla}
                className="relative group pt-0 md:pt-12 flex flex-col items-center"
              >
                {/* Linha Conectora */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 w-0.5 h-12 bg-franciscan-green/30 group-hover:bg-franciscan-green transition-colors duration-300"></div>

                {/* Nó */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-white border-2 border-franciscan-green rounded-full z-10 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>

                {/* Card */}
                <div className="relative z-20 w-full bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col h-full">

                  <div className="mb-4 text-center">
                    <span className="inline-block px-3 py-1 bg-franciscan-light text-franciscan-green text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md mb-3 border border-franciscan-green/10">
                      {unit.sigla}
                    </span>

                    <h3 className="text-lg font-bold text-franciscan-brown leading-tight min-h-[3.5rem] flex items-center justify-center">
                      {unit.nome}
                    </h3>
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
                    {unit.site && unit.site !== '' ? (  // 👈 Verifica se existe e não é string vazia
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