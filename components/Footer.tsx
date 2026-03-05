import React from 'react'
import Link from 'next/link'
import Container from './Container'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-franciscan-brown text-white py-6 border-t-4 border-franciscan-green relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-1 bg-franciscan-green rounded" />
              <h3 className="font-semibold text-xl tracking-wide text-white">
                Associação Franciscana
              </h3>
            </div>

            <p className="text-white text-base leading-relaxed font-medium">
              Educação e Assistência Social inspiradas nos valores franciscanos
              de simplicidade, fraternidade e serviço ao próximo.
            </p>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-1 bg-franciscan-green rounded" />
              <h3 className="font-semibold text-xl tracking-wide text-white">
                Links Rápidos
              </h3>
            </div>

            <ul className="space-y-2 text-base font-medium">
              {[
                { href: '/quem-somos', label: 'Quem Somos' },
                { href: '/unidades', label: 'Unidades' },
                { href: '/noticias', label: 'Notícias' },
                { href: '/dre', label: 'Demonstrações financeiras' },
                { href: '/lgpd', label: 'LGPD' },
                { href: '/contato', label: 'Contato' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-franciscan-green hover:pl-1 transition-all duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-1 bg-franciscan-green rounded" />
              <h3 className="font-semibold text-xl tracking-wide text-white">
                Contato
              </h3>
            </div>

            <address className="text-white text-base not-italic space-y-3 font-medium">
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-franciscan-green mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>

                <p>
                  Rua Sabinópolis, 50A<br />
                  Carlos Prates, Belo Horizonte - MG<br />
                  CEP: 30710-340
                </p>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-franciscan-green flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <a
                  href="mailto:contato@associacaofranciscana.org.br"
                  className="text-white hover:text-franciscan-green transition-colors"
                >
                  contato@associacaofranciscana.org.br
                </a>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-franciscan-green flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>

                <a
                  href="tel:+553134695545"
                  className="text-white hover:text-franciscan-green transition-colors"
                >
                  (31) 3469-5545
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 flex items-center justify-center gap-4">
          <p className="text-sm text-white/90 font-medium text-center">
            © {CURRENT_YEAR} Associação Franciscana de Educação e Assistência Social
          </p>
        </div>
      </Container>
    </footer>
  )
}