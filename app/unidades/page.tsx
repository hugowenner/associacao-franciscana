import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Container from '@/components/Container'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Nossas Unidades',
  description: 'Conheça as unidades da Associação Franciscana: CSA, Cesclar, Cesfran e Cefae.',
}

interface Unidade {
  nome: string
  sigla: string
  descricao: string
  endereco?: string
  site?: string
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
      {/* --- TOPO COM IMAGEM DE FUNDO --- */}
      <section
        className="relative w-full py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/unidades.png')" }}
      >
        {/* Máscara escura para o texto aparecer */}
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Mudei a cor do texto para branco (text-white) para contraste */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossas Unidades
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              A Associação Franciscana atua através de diversas unidades dedicadas 
              à educação e assistência social em Minas Gerais.
            </p>
          </div>
        </Container>
      </section>
      {/* --------------------------------- */}

      {/* --- LISTA DE UNIDADES (CÓDIGO MANTIDO IGUAL) --- */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {unidades.map((unidade) => (
              <div 
                key={unidade.sigla}
                className="bg-white border border-gray-200 rounded-lg p-6 h-full hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-franciscan-brown mb-2">
                    {unidade.nome} <span className="text-sm font-normal text-franciscan-gray">({unidade.sigla})</span>
                  </h3>
                  <p className="text-franciscan-gray leading-relaxed">
                    {unidade.descricao}
                  </p>
                </div>

                <div className="border-t border-gray-100 my-4"></div>

                <div className="mt-auto space-y-3">
                  {unidade.endereco && (
                    <div className="flex items-start text-sm text-gray-600">
                      <span className="mr-2 mt-0.5">📍</span>
                      <span>{unidade.endereco}</span>
                    </div>
                  )}
                  
                  {unidade.site && (
                    <a 
                      href={unidade.site} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-franciscan-green hover:text-franciscan-brown transition-colors"
                    >
                      Acessar site oficial 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}