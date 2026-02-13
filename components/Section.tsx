import React from 'react'
import type { BackgroundVariant } from '@/types'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: BackgroundVariant
  id?: string
}

/**
 * Seção com espaçamento vertical consistente e variantes de cor
 * Adiciona suporte a IDs para navegação
 */
export default function Section({ 
  children, 
  className = '',
  background = 'white',
  id
}: SectionProps) {

  const bgStyles: Record<string, string> = {
    light: 'bg-franciscan-light/80 backdrop-blur-md',
    beige: 'bg-franciscan-beige/80 backdrop-blur-md',
    white: 'bg-white/80 backdrop-blur-md',
    primary: 'bg-franciscan-brown text-white shadow-inner',
    transparent: 'bg-transparent'
  }

  return (
    <section id={id} className={`py-20 md:py-28 lg:py-32 relative ${bgStyles[background as string]} ${className} transition-colors duration-500`}>
      {children}
    </section>
  )
}