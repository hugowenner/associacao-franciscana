import React from 'react'
import Link from 'next/link'
import type { CardProps } from '@/types'

/**
 * Card reutilizável visualmente aprimorado
 * Suporta elevação (hover) e transições suaves
 */
export default function Card({ title, description, link, date, children }: CardProps) {
  const cardContent = (
    <article className="group h-full flex flex-col bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
      
      {/* Barra lateral animada */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-franciscan-green to-franciscan-brown transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
      
      {/* Fundo decorativo sutil no hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-franciscan-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {date && (
          <time className="text-xs font-bold text-franciscan-green bg-franciscan-green/10 px-3 py-1 rounded-full w-fit mb-4 border border-franciscan-green/10" dateTime={date}>
            {new Date(date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
          </time>
        )}
        
        <h3 className="text-xl font-bold text-franciscan-brown mb-3 group-hover:text-franciscan-green transition-colors duration-300">
          {title}
        </h3>
        
        {description && (
          <p className="text-franciscan-gray text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>
        )}
        
        {children}
        
        {link && (
          <div className="mt-auto pt-4 border-t border-gray-100">
            <span className="inline-flex items-center text-franciscan-brown font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
              Ler mais
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        )}
      </div>
    </article>
  )

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}