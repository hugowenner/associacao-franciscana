import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Associação Franciscana de Educação e Assistência Social.',
}

export default function ContatoPage() {
  return (
    <>
      {/* --- TOPO COM IMAGEM DE FUNDO --- */}
      <section
        className="relative w-full py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contato.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contato
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Entre em contato conosco. Estamos à disposição para atendê-lo.
            </p>
          </div>
        </Container>
      </section>
      {/* --------------------------------- */}

      {/* --- FORMULÁRIO E INFORMAÇÕES --- */}
      <Section background="white">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl mb-6 text-franciscan-brown font-bold">Envie uma mensagem</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-franciscan-gray mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franciscan-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-franciscan-gray mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franciscan-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-franciscan-gray mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franciscan-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-franciscan-gray mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    name="assunto"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franciscan-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-franciscan-gray mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-franciscan-green focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-franciscan-brown text-white px-6 py-3 rounded-lg font-semibold hover:bg-franciscan-brown/90 transition-colors"
                >
                  Enviar Mensagem
                </button>

                <p className="text-sm text-franciscan-gray">
                  Ao enviar este formulário, você concorda com nossa <a href="/lgpd" className="text-franciscan-green hover:underline">Política de Privacidade</a>.
                </p>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl mb-6 text-franciscan-brown font-bold">Informações</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-franciscan-brown mb-2">Endereço</h3>
                  <address className="not-italic text-franciscan-gray">
                    Rua Sabinópolis, 50A<br />
                    Carlos Prates, Belo Horizonte - MG<br />
                    CEP: 30710-340
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-franciscan-brown mb-2">E-mail</h3>
                  <a 
                    href="mailto:Edilson.sodre@csa.g12.br" 
                    className="text-franciscan-green hover:underline"
                  >
                    Edilson.sodre@csa.g12.br
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-franciscan-brown mb-2">Telefone</h3>
                  <a 
                    href="tel:+553134695545" 
                    className="text-franciscan-green hover:underline"
                  >
                    (31) 3469-5545
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-franciscan-brown mb-2">Horário de Atendimento</h3>
                  <p className="text-franciscan-gray">
                    Segunda a Sexta-feira<br />
                    8h às 17h
                  </p>
                </div>
              </div>

              {/* Mapa Google Integrado */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-sm h-64 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.79174390435!2d-43.963134724014964!3d-19.911487737733765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6974859c67b39%3A0x236711d2c814f9a3!2sR.%20Sabin%C3%B3polis%2C%2050A%20-%20Carlos%20Prates%2C%20Belo%20Horizonte%20-%20MG%2C%2030710-340!5e1!3m2!1spt-BR!2sbr!4v1769003535293!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}