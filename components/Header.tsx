'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from './Container'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Início' },
    { href: '/quem-somos', label: 'Quem Somos' },
    { href: '/unidades', label: 'Unidades' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/doacoes', label: 'Doações' },
    { href: '/contato', label: 'Contato' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 transition-all duration-300 shadow-[0_4px_15px_rgba(80,50,30,0.25)]">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Navegação principal">
          {/* Logo e nome */}
          <Link href="/" className="flex items-center space-x-3 group">
                    <Image
                      src="/images/logo.png"
                      alt="Logo Associação Franciscana de Educação e Assistência Social"
                      width={160}
                      height={80}
                      priority
                      sizes="(max-width: 768px) 160px, 160px"
                      className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
                    />

                    <div className="hidden sm:block">
                      <p className="font-bold text-franciscan-brown text-lg md:text-xl leading-tight tracking-wider group-hover:text-franciscan-green transition-colors">
                          Associação Franciscana
                        </p>

                      <p className="text-[11px] md:text-[12px] text-franciscan-gray font-semibold tracking-widest uppercase mt--2">
                        de Educação e Assistência Social
                      </p>
                    </div>
                  </Link>
          {/* Navegação Desktop */}
          <ul className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-gray-100 bg-white/70 backdrop-blur shadow-sm">
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      'relative block px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300',
                      'focus:outline-none focus-visible:ring-2 focus-visible:ring-franciscan-green/40',
                      active
                        ? 'text-franciscan-brown bg-franciscan-light/60'
                        : 'text-franciscan-gray hover:text-franciscan-brown hover:bg-franciscan-light/40',
                    ].join(' ')}
                  >
                    {item.label}

                    {/* underline animado */}
                    <span
                      className={[
                        'absolute left-1/2 -bottom-0.5 h-[2px] w-0 -translate-x-1/2 rounded-full transition-all duration-300',
                        active ? 'w-8 bg-franciscan-green' : 'group-hover:w-8 bg-franciscan-green/70',
                      ].join(' ')}
                    />
                  </Link>
                </li>
              )
            })}
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
              {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-4 animate-fade-in" aria-label="Menu mobile">
            <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-100 shadow-lg p-2">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          'flex items-center justify-between py-3 px-4 rounded-xl font-semibold transition-colors',
                          active
                            ? 'bg-franciscan-light/60 text-franciscan-brown'
                            : 'text-franciscan-gray hover:text-franciscan-brown hover:bg-franciscan-light/40',
                        ].join(' ')}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        )}
      </Container>
    </header>
  )
}