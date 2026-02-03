'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container'

/**
 * Cabeçalho principal do site
 * Navegação responsiva com menu mobile
 * Sombra marrom mais intensa para garantir a visibilidade do tom terroso
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/unidades', label: 'Unidades' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/doacoes', label: 'Doações' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header 
      className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 shadow-[0_4px_15px_rgba(80,50,30,0.25)]"
      // AUMENTEI A OPACIDADE de 0.08 para 0.25 E ESCURECI O MARROM (RGB 80,50,30)
      // Isso garante que a sombra seja claramente visível e marrom
    >
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Navegação principal">
          {/* Logo e nome */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img
              src="/images/logo.jpeg"
              alt="Logo Associação Franciscana"
              className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-90"
            />

            <div className="hidden sm:block">
              <p className="font-bold text-franciscan-brown text-lg leading-tight group-hover:text-franciscan-green transition-colors">
                Associação Franciscana
              </p>
              <p className="text-xs text-franciscan-gray font-medium tracking-wide uppercase">
                Educação e Assistência Social
              </p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <ul className="hidden md:flex space-x-1 bg-gray-50/50 p-1 rounded-full border border-gray-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-2 rounded-full text-sm font-medium text-franciscan-gray hover:text-franciscan-brown hover:bg-white hover:shadow-sm transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 text-franciscan-brown hover:bg-franciscan-light rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 animate-fade-in" aria-label="Menu mobile">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-franciscan-gray hover:text-franciscan-brown hover:bg-franciscan-light/50 rounded-lg font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  )
}