'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Container from './Container'

/**
 * Cabeçalho principal do site
 * Navegação responsiva com menu mobile
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/unidades', label: 'Unidades' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <header className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Navegação principal">
          {/* Logo e nome */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.jpeg"
              alt="Logo Associação Franciscana"
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-franciscan-brown text-lg leading-tight">
                Associação Franciscana
              </p>
              <p className="text-xs text-franciscan-gray">
                Educação e Assistência Social
              </p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-franciscan-gray hover:text-franciscan-brown transition-colors font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden p-2 text-franciscan-gray hover:text-franciscan-brown"
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
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4" aria-label="Menu mobile">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-franciscan-gray hover:text-franciscan-brown transition-colors font-medium"
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