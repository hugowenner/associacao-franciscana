import React from 'react'
import Container from './Container'
import type { HeroProps } from '@/types'
// REMOVI: import getBaseWebpackConfig from 'next/dist/build/webpack-config' (Essa linha não é necessária)

export default function Hero({
  title,
  subtitle,
  backgroundImage: imageSrc, // Você renomeou a prop para 'imageSrc' aqui dentro
  overlayOpacity = 'bg-gradient-to-r from-black/80 via-black/50 to-black/30', 
  height = 'lg'
}: HeroProps) {
  const heights = {
    sm: 'py-20 md:py-28',
    md: 'py-24 md:py-32',
    lg: 'py-28 md:py-40'
  }

  return (
    <section
      className={`relative w-full ${heights[height]} bg-cover bg-center bg-no-repeat overflow-hidden group`}
      // CORREÇÃO AQUI: Inseri a variável ${imageSrc} dentro da url
      style={{ backgroundImage: `url('${imageSrc}')` }} 
    >
      <div className={`absolute inset-0 ${overlayOpacity} transition-all duration-700`}></div>
      
      {/* Efeito de textura sutil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl animate-fade-in-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg border-l-4 border-franciscan-green/50 pl-6 md:pl-0 md:border-l-0">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}