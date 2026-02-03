import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Associação Franciscana - Educação e Assistência Social',
    template: '%s | Associação Franciscana',
  },
  description: 'Associação Franciscana de Educação e Assistência Social - Ordem dos Frades Menores (OFM). Atuação inspirada nos valores de São Francisco de Assis.',
  keywords: ['franciscanos', 'educação', 'assistência social', 'OFM', 'São Francisco de Assis'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* REMOVIDO bg-white DAQUI PARA DEIXAR O FUNDO GLOBAL VISÍVEL */}
      <body className="text-franciscan-gray antialiased selection:bg-franciscan-green/20 selection:text-franciscan-brown">
        <Header />
        <main className="min-h-screen flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}