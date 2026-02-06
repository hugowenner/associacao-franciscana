import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import InfoCard from '@/components/InfoCard'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Associação Franciscana de Educação e Assistência Social.',
}

export default function ContatoPage() {
  return (
    <>
      <Hero
        title="Fale Conosco"
        subtitle="Estamos à disposição para atendê-lo. Entre em contato conosco."
        backgroundImage="/images/contato.png"
      />

      <Section background="white">
        <Container>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Coluna Esquerda: Informações */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-franciscan-brown mb-4 flex items-center gap-2">
                  <span className="w-8 h-1 bg-franciscan-green rounded"></span>
                  Canais de Atendimento
                </h2>
                <p className="text-franciscan-gray text-base leading-relaxed">
                  Utilize um dos canais abaixo para entrar em contato com nossa administração central.
                </p>
              </div>
              
              <div className="space-y-4">
                <InfoCard
                  label="Endereço"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                >
                  <address className="not-italic">
                    Rua Sabinópolis, 50A<br />
                    Carlos Prates, Belo Horizonte - MG<br />
                    CEP: 30710-340
                  </address>
                </InfoCard>

                <InfoCard
                  label="E-mail"
                  href="mailto:contato@associacaofranciscana.org.br"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  contato@associacaofranciscana.org.br
                </InfoCard>

                <InfoCard
                  label="Telefone"
                  href="tel:+553134695545"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                >
                  (31) 3469-5545
                </InfoCard>

                <div className="bg-white p-6 rounded-2xl border border-franciscan-green/20 shadow-sm mt-6">
                  <h3 className="font-bold text-franciscan-brown mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <svg className="w-5 h-5 text-franciscan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Horário de Atendimento
                  </h3>
                  <p className="text-franciscan-gray text-sm font-medium">
                    Segunda a Sexta-feira<br />
                    8h às 17h
                  </p>
                </div>
              </div>

              {/* Mapa Integrado */}
              <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border-4 border-white h-72 w-full relative group">
                <div className="absolute inset-0 z-10 pointer-events-none border border-gray-200 rounded-3xl"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.79174390435!2d-43.963134724014964!3d-19.911487737733765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6974859c67b39%3A0x236711d2c814f9a3!2sR.%20Sabin%C3%B3polis%2C%2050A%20-%20Carlos%20Prates%2C%20Belo%20Horizonte%20-%20MG%2C%2030710-340!5e1!3m2!1spt-BR!2sbr!4v1769003535293!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}