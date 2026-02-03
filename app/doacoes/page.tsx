import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Doações - Associação Franciscana',
  description: 'Apoie nossa missão de fé, educação e cuidado com o próximo através da Associação Franciscana.',
}

export default function DoacoesPage() {
  return (
    <>
      {/* Hero Section */}
      {/* Nota: Recomenda-se usar uma imagem suave para o background, ex: '/images/doacoes-bg.jpg' */}
      <Hero
        title="Doe com Amor e Solidariedade"
        subtitle="Seu gesto fortalece nossa missão de fé, educação e cuidado com o próximo"
        imageSrc="/images/doacoes-bg.jpg" // Verifique se a imagem existe ou utilize uma genérica
        overlayOpacity="bg-gradient-to-b from-black/70 via-franciscan-brown/60 to-franciscan-brown/80"
      />

      {/* Seção: Por que Doar */}
      <Section background="light">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-franciscan-green font-bold tracking-widest uppercase text-sm">Nossa Missão</span>
            <h2 className="text-3xl md:text-4xl font-bold text-franciscan-brown mt-2 mb-6">
              Por que doar?
            </h2>
            <p className="text-lg text-franciscan-gray leading-relaxed font-light">
              Sua contribuição vai além de um recurso financeiro. Ela é semente de fraternidade que permite continuarmos nossa obra de caridade e evangelização, levando dignidade a quem mais precisa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Missão Franciscana */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-franciscan-light text-franciscan-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-franciscan-brown mb-3">Viver o Evangelho</h3>
              <p className="text-franciscan-gray text-sm leading-relaxed">
                Seguindo o exemplo de São Francisco, colocamos a caridade em ação, acolhendo a todos com respeito e amor.
              </p>
            </div>

            {/* Card 2: Educação e Ação Social */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-franciscan-light text-franciscan-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-franciscan-brown mb-3">Educação Transformadora</h3>
              <p className="text-franciscan-gray text-sm leading-relaxed">
                Mantemos escolas e centros sociais que formam cidadãos conscientes e oferecem oportunidades de futuro.
              </p>
            </div>

            {/* Card 3: Província Santa Cruz */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-franciscan-light text-franciscan-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-franciscan-brown mb-3">Atuação Ampla</h3>
              <p className="text-franciscan-gray text-sm leading-relaxed">
                Através da Província Santa Cruz, alcançamos diversas comunidades, levando assistência e espiritualidade.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Citação em Destaque */}
      <Section background="beige">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative">
              <svg className="absolute -top-6 -left-6 text-franciscan-brown/20 w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
              </svg>
              <blockquote className="text-2xl md:text-3xl font-medium text-franciscan-brown italic leading-relaxed">
                “A Ordem dos Frades Menores, fundada por São Francisco de Assis, é uma fraternidade na qual os irmãos […] vivem o Evangelho segundo a forma proposta por São Francisco.”
              </blockquote>
              <footer className="mt-6 text-franciscan-green font-bold uppercase tracking-widest text-sm">
                Espírito Franciscano
              </footer>
            </div>
          </div>
        </Container>
      </Section>

      {/* Seção: Como Ajudar (CTA) */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-franciscan-light/30 rounded-3xl p-8 md:p-12 text-center border border-franciscan-light/50">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-4">
              Como ajudar?
            </h2>
            <p className="text-lg text-franciscan-gray mb-8 max-w-2xl mx-auto">
              Para garantir segurança e transparência, utilizamos a plataforma oficial <strong className="text-franciscan-brown">Paz e Bem Solidário</strong> para gerenciar suas doações de forma simples e segura.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="http://pazebemsolidario.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-franciscan-green hover:bg-green-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
              >
                Quero Ajudar
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-xs text-franciscan-gray/70">
              Você será redirecionado para nosso ambiente seguro de doações.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}