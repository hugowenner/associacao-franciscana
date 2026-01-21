import React from 'react'
import Link from 'next/link'
import Container from './Container'

/**
 * Rodapé institucional
 * Informações de contato e links importantes
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-franciscan-brown text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Associação Franciscana
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Educação e Assistência Social inspiradas nos valores franciscanos de simplicidade, 
              fraternidade e serviço.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/quem-somos" className="text-gray-300 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/unidades" className="text-gray-300 hover:text-white transition-colors">
                  Unidades
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="text-gray-300 hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/dre" className="text-gray-300 hover:text-white transition-colors">
                  DRE - Transparência
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="text-gray-300 hover:text-white transition-colors">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <address className="text-gray-300 text-sm not-italic space-y-2">
              <p>
                Rua Sabinópolis, 50A<br />
                Carlos Prates, Belo Horizonte - MG<br />
                CEP: 30710-340
              </p>
              <p>
                <a 
                  href="mailto:Edilson.sodre@csa.g12.br" 
                  className="hover:text-white transition-colors"
                >
                  Edilson.sodre@csa.g12.br
                </a>
              </p>
              <p>
                <a 
                  href="tel:+553134695545" 
                  className="hover:text-white transition-colors"
                >
                  (31) 3469-5545
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-franciscan-brown/30 py-6 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Associação Franciscana de Educação e Assistência Social - Ordem dos Frades Menores (OFM)
          </p>
        </div>
      </Container>
    </footer>
  )
}