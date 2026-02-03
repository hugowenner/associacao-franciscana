import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Container from '@/components/Container'
import Section from '@/components/Section'
import type { Unidade } from '@/types'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Nossas Unidades',
  description: 'Conheça as unidades da Associação Franciscana: CSA, Cesclar, Cesfran e Cefae.',
}

async function getUnidades(): Promise<Unidade[]> {
  const filePath = path.join(process.cwd(), 'content', 'unidades.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  return data.unidades
}

export default async function UnidadesPage() {
  const unidades = await getUnidades()

  return (
    <>
      <Hero
        title="Nossas Unidades"
        subtitle="A Associação Franciscana atua através de diversas unidades dedicadas à educação e assistência social em Minas Gerais."
        imageSrc="/images/unidades.png"
      />

      <Section background="light">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {unidades.map((unidade) => (
                <div 
                  key={unidade.sigla}
                  className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden"
                >
                  {/* Efeito decorativo */}
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-franciscan-green/5 rounded-full blur-3xl group-hover:bg-franciscan-green/10 transition-all duration-500"></div>

                  <div className="relative z-10 flex-grow">
                    <div className="mb-8">
                      <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-franciscan-green to-green-700 text-white text-xs font-bold tracking-widest uppercase rounded-lg mb-5 shadow-md">
                        {unidade.sigla}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-franciscan-brown mb-5 leading-tight">
                        {unidade.nome}
                      </h3>
                      <p className="text-franciscan-gray leading-relaxed text-lg font-light">
                        {unidade.descricao}
                      </p>
                    </div>

                    <div className="border-t border-gray-100 my-8"></div>

                    <div className="space-y-5">
                      {unidade.endereco && (
                        <div className="flex items-start text-gray-600 bg-gray-50 p-4 rounded-xl">
                          <svg className="w-5 h-5 mr-4 text-franciscan-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm leading-relaxed">{unidade.endereco}</span>
                        </div>
                      )}
                      
                      {unidade.site && (
                        <a 
                          href={unidade.site} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-franciscan-brown/5 text-franciscan-brown border border-franciscan-brown/10 hover:bg-franciscan-green hover:text-white hover:border-franciscan-green rounded-xl font-bold text-sm transition-all duration-300 group/btn"
                        >
                          Acessar site oficial 
                          <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}