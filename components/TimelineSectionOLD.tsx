'use client'

import React, { useRef, useEffect, useState } from 'react'

// --- DADOS DA LINHA DO TEMPO ---
const timelineData = [
  { year: '1899', title: 'Chegada a Manaus', desc: 'Chegada dos frades holandeses a Manaus.', type: 'history', icon: 'ship' },
  { value: 'Fraternidade', type: 'value', icon: 'hands' },
  { year: '1900', title: 'Niterói', desc: 'Instalação da primeira residência em Niterói.', type: 'history', icon: 'house' },
  { value: 'Simplicidade', type: 'value', icon: 'feather' },
  { year: '1903', title: 'Minas Gerais', desc: 'Primeira residência em Ouro Preto.', type: 'history', icon: 'church' },
  { value: 'Serviço', type: 'value', icon: 'heart' },
  { year: '1912', title: 'São João del-Rei', desc: 'Transferência da sede para São João del-Rei.', type: 'history', icon: 'city' },
  { value: 'Educação', type: 'value', icon: 'book' },
  { year: '1925', title: 'Divinópolis', desc: 'Transferência para Divinópolis.', type: 'history', icon: 'tree' },
  { value: 'Assistência Social', type: 'value', icon: 'handshake' },
  { year: '1931', title: 'Teologia', desc: 'Início do Curso de Teologia.', type: 'history', icon: 'scroll' },
  { value: 'Missão', type: 'value', icon: 'compass' },
  { year: '1941', title: 'Comissariado', desc: 'Mudança do nome para Comissariado Santa Cruz.', type: 'history', icon: 'badge' },
  { value: 'Formação', type: 'value', icon: 'lamp' },
  { year: '1949', title: 'Província Autônoma', desc: 'Elevação à Província autônoma.', type: 'history', icon: 'flag' },
  { value: 'Evangelização', type: 'value', icon: 'cross' },
  { year: '1950', title: 'Província Santa Cruz', desc: 'Criação oficial da Província Santa Cruz.', type: 'history', icon: 'crown' },
  { value: 'Dignidade Humana', type: 'value', icon: 'person' },
  { year: '1959', title: 'Belo Horizonte', desc: 'Sede transferida para Belo Horizonte.', type: 'history', icon: 'building' },
  { year: 'Presente', title: 'Expansão Missionária', desc: 'Minas Gerais, RS, Bahia e Missões Internacionais.', type: 'history', icon: 'globe' },
]

// --- ÍCONES SVG SIMPLISTAS (Estilo Editorial) ---
const Icons = {
  ship: <path d="M12 21l-4-4h8l-4 4zm-6-6h12l1-4H5l1 4zm2-5h8l-1-3H9l-1 3z" />,
  house: <path d="M3 12l9-9 9 9m-2 0v8a1 1 0 01-1 1h-4v-6h-4v6H6a1 1 0 01-1-1v-8" />,
  church: <path d="M12 2L8 6v2l4-3 4 3V6l-4-4zm-2 8v10h4V10h-4zm-4 4v6h2v-6H6zm12 0v6h2v-6h-2z" />,
  city: <path d="M4 21V8l4-4v4h4V4l4 4v13M4 13h12m-8 8v-4h4v4" />,
  tree: <path d="M12 22V12m-4 0l4-6 4 6H8zm-2 4h8" />,
  scroll: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  badge: <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />,
  compass: <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm2-10l-4 2-2 4 4-2 2-4z" />,
  flag: <path d="M4 21V4h14l-2 4 2 4H6v9" />,
  crown: <path d="M2 17l2-8 4 4 4-8 4 8 4-4 2 8H2z" />,
  building: <path d="M6 21V3h12v18M6 8h12M6 13h12M6 18h4m4 0h4" />,
  globe: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />,
  hands: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
  feather: <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z M16 8L2 22 M17.5 15H9" />,
  heart: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
  book: <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H6.5A2.5 2.5 0 014 19.5z" />,
  handshake: <path d="M11 4L6 8l-3 6 4 4 6-2 4-2M18 8l-5-4-2 2m5 2l3 6-2 2m-9-2l-2 4m10-6l-6 2" />,
  lamp: <path d="M9 21h6m-6 0v-2a3 3 0 013-3h0a3 3 0 013 3v2m-3-18a7 7 0 00-4 12.7V17h8v-1.3A7 7 0 0012 3z" />,
  cross: <path d="M12 2v20M5 12h14" strokeWidth="2.5" />,
  person: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
}

// --- COMPONENTE PRINCIPAL ---
export default function TimelineSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (scrollRef.current) observer.observe(scrollRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 overflow-hidden bg-[#F2E8DC] border-t-4 border-b-4 border-[#5C3A21]/20">
      {/* (seu background continua aqui igual, pode manter o que você já tinha) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#5C3A21] tracking-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Uma Jornada de Fé e Serviço
        </h2>
        <p className="text-lg text-[#8A5A3C] max-w-2xl mx-auto">A trajetória da Província Santa Cruz através dos tempos.</p>
      </div>

      {/* --- CONTAINER SCROLL HORIZONTAL --- */}
      <div ref={scrollRef} className="relative w-full overflow-x-auto pb-10 scrollbar-thin scrollbar-thumb-[#8A5A3C] scrollbar-track-transparent">
        <div className="relative flex items-center h-auto min-w-max px-12 md:px-24 py-12">
          {/* --- TRILHA ORGÂNICA (LINHA) --- */}
          <svg className="absolute top-1/2 left-0 w-full h-48 -translate-y-1/2 pointer-events-none z-0" preserveAspectRatio="none">
            <path
              d="M0,50 Q100,25 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50 T1600,50 T1800,50 T2000,50 T2200,50 T2400,50 T2600,50 T2800,50 T3000,50 T3200,50 T3400,50 T3600,50 T3800,50 T4000,50 T4200,50 T4400,50 T4600,50 T4800,50 T5000,50"
              fill="none"
              stroke="#8A5A3C"
              strokeWidth="2"
              strokeDasharray="8 4"
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            />
          </svg>

          {/* --- PONTOS DA LINHA DO TEMPO --- */}
          <div className="flex items-center gap-12 md:gap-16 relative z-10">
            {timelineData.map((item, index) => {
              const isValue = item.type === 'value'

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Card Superior ou Inferior (Alternando) */}
                  <div className={`relative group w-48 ${index % 2 === 0 ? 'mb-8' : 'mt-8 order-3'}`}>
                    {/* GLOW DOURADO ATRÁS (só para cards de valor) */}
                    {isValue && (
                      <div
                        className="
                          absolute -inset-2 rounded-2xl
                          opacity-70 blur-xl
                          bg-gradient-to-r from-[#E7C873]/0 via-[#E7C873]/60 to-[#E7C873]/0
                          transition-all duration-300
                          group-hover:opacity-100 group-hover:blur-2xl
                        "
                      />
                    )}

                    {/* Borda dourada sutil atrás (reforça o brilho) */}
                    {isValue && (
                      <div
                        className="
                          absolute -inset-[3px] rounded-2xl
                          bg-gradient-to-br from-[#E7C873]/70 via-transparent to-[#E7C873]/40
                          opacity-40
                          transition-all duration-300
                          group-hover:opacity-70
                        "
                      />
                    )}

                    <div
                      className={`
                        relative p-4 rounded-xl border-2 shadow-[4px_4px_0px_0px_rgba(92,58,33,0.2)]
                        transition-all duration-300 group-hover:shadow-[6px_6px_0px_0px_rgba(92,58,33,0.4)] group-hover:-translate-y-1
                        ${isValue ? 'bg-[#FFF9E6] border-[#E7C873] border-dashed' : 'bg-white border-[#5C3A21]'}
                      `}
                    >
                      {item.type === 'history' ? (
                        <>
                          <span className="absolute -top-3 left-4 px-2 py-0.5 bg-[#5F8DA9] text-white text-xs font-bold rounded shadow-md">
                            {item.year}
                          </span>
                          <h3 className="text-[#5C3A21] font-bold mt-2 text-sm">{item.title}</h3>
                          <p className="text-[#8A5A3C] text-xs mt-1">{item.desc}</p>
                        </>
                      ) : (
                        // ✅ AQUI: sem "Valor", só o texto principal
                        <div className="text-center py-3">
                          <h3
                            className="
                              font-bold text-lg tracking-tight
                              text-[#5C3A21]
                              drop-shadow-[0_1px_0_rgba(231,200,115,0.55)]
                            "
                          >
                            {item.value}
                          </h3>

                          {/* Linha/ornamento sutil (opcional, ajuda a “cara” de cartão) */}
                          <div className="mt-2 mx-auto h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-[#E7C873]/70 to-transparent" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Ponto Central com Ícone */}
                  <div
                    className={`
                      relative z-20 flex items-center justify-center w-14 h-14 rounded-full 
                      border-2 bg-[#F2E8DC]
                      group hover:scale-110 transition-transform duration-300
                      ${item.type === 'history' ? 'border-[#5C3A21] shadow-[0_0_15px_rgba(231,200,115,0.3)]' : 'border-[#E7C873] bg-white shadow-[0_0_18px_rgba(231,200,115,0.35)]'}
                    `}
                  >
                    <div className="w-8 h-8 text-[#5C3A21]">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                        {Icons[item.icon as keyof typeof Icons]}
                      </svg>
                    </div>

                    {/* Glow no Hover */}
                    <div className="absolute inset-0 rounded-full bg-[#E7C873]/0 group-hover:bg-[#E7C873]/30 transition-all duration-300 blur-md" />
                  </div>

                  {/* Espaçador para layout alternado */}
                  <div className={`h-8 ${index % 2 === 0 ? 'order-3' : 'order-1'}`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Indicador de Scroll (Mobile) */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        <span className="text-xs text-[#8A5A3C]">Deslize para ver mais</span>
      </div>
    </section>
  )
}