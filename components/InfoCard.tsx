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
    <div className="flex items-start group p-2 rounded-xl transition-colors duration-300">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-franciscan-light border border-franciscan-green/10 flex items-center justify-center text-franciscan-green shadow-sm group-hover:bg-franciscan-green group-hover:text-white group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-xs font-bold text-franciscan-gray uppercase tracking-wider mb-1">{label}</h3>
        <div className="text-franciscan-brown font-medium text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:bg-white hover:shadow-sm rounded-xl -mx-2 transition-all duration-300">
        {content}
      </a>
    )
  }

  return <div className="bg-white/50 rounded-xl">{content}</div>
}