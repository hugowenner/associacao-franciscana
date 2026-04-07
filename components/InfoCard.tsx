import React from 'react'

interface InfoCardProps {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
  href?: string
}

/**
 * Componente pequeno para exibir informações (Telefone, Email, Endereço)
 * Adiciona iconografia e layout consistente
 */
export default function InfoCard({ icon, label, children, href }: InfoCardProps) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-full bg-franciscan-light border border-franciscan-green/10 flex items-center justify-center text-franciscan-green shadow-sm group-hover:bg-franciscan-green group-hover:text-white group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>

      <div className="min-w-0">
        <h3 className="text-xs font-bold text-franciscan-gray uppercase tracking-wider mb-1">{label}</h3>
        <div className="text-franciscan-brown font-medium text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </>
  )

  const cardClassName =
    'group grid grid-cols-[40px_1fr] items-start gap-3 p-2 rounded-xl bg-white/50 transition-all duration-300'

  if (href) {
    return (
      <a href={href} className={`${cardClassName} hover:bg-white hover:shadow-sm`}>
        {content}
      </a>
    )
  }

  return <div className={cardClassName}>{content}</div>
}