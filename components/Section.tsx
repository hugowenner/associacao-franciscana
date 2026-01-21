import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'light' | 'beige' | 'white'
}

/**
 * Seção com espaçamento vertical consistente
 * Permite variação de cor de fundo
 * 
 * ATUALIZAÇÃO: Transparência /90 adicionada para mostrar o background da imagem
 */
export default function Section({ 
  children, 
  className = '',
  background = 'white' 
}: SectionProps) {
  const bgColors = {
    light: 'bg-franciscan-light/90',
    beige: 'bg-franciscan-beige/90',
    white: 'bg-white/90',
  }

  return (
    <section className={`py-12 md:py-16 lg:py-20 ${bgColors[background]} ${className}`}>
      {children}
    </section>
  )
}