import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

export const metadata: Metadata = {
  title: {
    default: 'Associação Franciscana - Educação e Assistência Social',
    template: '%s | Associação Franciscana',
  },
  description:
    'Associação Franciscana de Educação e Assistência Social - Ordem dos Frades Menores (OFM). Atuação inspirada nos valores de São Francisco de Assis.',
  keywords: [
    'franciscanos',
    'educação',
    'assistência social',
    'OFM',
    'São Francisco de Assis',
  ],
  other: {
    'adopt-website-id': 'd150a255-8cbb-44eb-a5b7-02bcd4127715',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="text-franciscan-gray antialiased">
        <Header />
        <main className="min-h-screen flex flex-col justify-center">
          {children}
        </main>
        <Footer />
        <CookieBanner />

        <Script
          id="adopt-injector"
          src="//tag.goadopt.io/injector.js?website_code=d150a255-8cbb-44eb-a5b7-02bcd4127715"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}