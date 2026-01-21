import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  link?: string
  date?: string
}

/**
 * Card reutilizável para listagens
 * Usado em unidades, notícias, etc.
 */
export default function Card({ title, description, link, date }: CardProps) {
  const content = (
    <article className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-md transition-shadow duration-200">
      {date && (
        <time className="text-sm text-franciscan-gray mb-2 block" dateTime={date}>
          {new Date(date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </time>
      )}
      <h3 className="text-xl font-semibold text-franciscan-brown mb-3">
        {title}
      </h3>
      <p className="text-franciscan-gray leading-relaxed">
        {description}
      </p>
      {link && (
        <span className="inline-block mt-4 text-franciscan-green font-medium hover:underline">
          Leia mais →
        </span>
      )}
    </article>
  )

  if (link) {
    return (
      <Link href={link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
