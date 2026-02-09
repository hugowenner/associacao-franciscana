import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Hero from '@/components/Hero'
import Organogram from '@/components/Organogram' 
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Início',
  description: 'Associação Franciscana de Educação e Assistência Social - Ordem dos Frades Menores (OFM).',
}

export default function HomePage() {
  // ✅ DADOS ATUALIZADOS: Reflete a hierarquia obrigatória (4 Unidades)
  // Dica de arquitetura: Idealmente, isso viria de um import: import { unidades } from '@/data/unidades.json'
  const unidadesAssociacao = [
    {
      "nome": "Colégio Santo Antônio",
      "sigla": "CSA",
      "descricao": "Instituição de ensino que alia excelência acadêmica aos valores franciscanos, formando cidadãos conscientes e solidários.",
      "endereco": "Belo Horizonte, MG",
      "site": "https://www.csa.g12.br"
    },
    {
      "nome": "Centro de Educação Infantil São Francisco",
      "sigla": "CESFRAN",
      "descricao": "Centro dedicado ao desenvolvimento infantil, promovendo o cuidado e a educação na primeira infância.",
      "endereco": "Belo Horizonte, MG",
      "site": null
    },
    {
      "nome": "Centro de Educação Infantil Santa Clara",
      "sigla": "CESCLAR",
      "descricao": "Promove o desenvolvimento integral da criança por meio de atividades lúdicas e pedagógicas.",
      "endereco": "Belo Horizonte, MG",
      "site": null
    },
    {
      "nome": "Centro Franciscano de Apoio Escolar",
      "sigla": "CEFAE 1 e 2",
      "descricao": "Oferece suporte pedagógico e atividades de reforço escolar para complementar a aprendizagem.",
      "endereco": "Belo Horizonte, MG",
      "site": null
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Associação Franciscana de Educação e Assistência Social"
        subtitle="Educação e assistência social inspiradas nos valores de São Francisco de Assis"
        backgroundImage="/images/fradeassis01.png"
      />

      {/* Missão */}
      <Section background="beige">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-franciscan-brown mb-8 relative inline-block">
              Nossa Missão
              <span className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-franciscan-green rounded-full shadow-lg"></span>
            </h2>
            <p className="text-lg text-franciscan-gray leading-relaxed max-w-3xl mx-auto font-light">
              Nossa missão é promover a educação, o cuidado e a dignidade humana, guiados por valores como a fraternidade, a simplicidade e o serviço, colocando-nos a serviço da sociedade, especialmente dos mais necessitados.
            </p>
          </div>
        </Container>
      </Section>

      {/* Valores - ÍCONES */}
      <Section background="white">
        <Container>
          <h2 className="text-center mb-16 text-franciscan-brown font-bold text-3xl md:text-4xl">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Valor 1 */}
            <div className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-franciscan-green to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-franciscan-brown">Fraternidade</h3>
              <p className="text-franciscan-gray text-base leading-relaxed font-light">
                Vivemos como irmãos e irmãs, cultivando relações baseadas no respeito, na comunhão e no amor fraterno.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-franciscan-green to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-franciscan-brown">Simplicidade</h3>
              <p className="text-franciscan-gray text-base leading-relaxed font-light">
                Inspirados por São Francisco de Assis, buscamos uma vida simples, essencial e comprometida com o bem comum.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="text-center group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-franciscan-green to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-franciscan-brown">Serviço</h3>
              <p className="text-franciscan-gray text-base leading-relaxed font-light">
                Dedicamos nossa missão à educação e à assistência social, promovendo inclusão, justiça e cuidado com a vida.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Identidade e Presença */}
      <Section background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-franciscan-brown">Identidade Franciscana</h2>
              <p className="text-lg text-franciscan-gray leading-relaxed font-light">
                Somos uma fraternidade consagrada que busca viver o Evangelho no seguimento de Jesus Cristo, segundo a forma de vida iniciada por Francisco de Assis. É assim que os Franciscanos reconhecem sua vocação e orientam sua missão no mundo.
              </p>
              <blockquote className="border-l-4 border-franciscan-brown pl-8 py-6 bg-white/80 my-8 rounded-r-2xl italic text-franciscan-gray/90 shadow-sm relative">
                <svg className="absolute top-4 left-2 text-franciscan-brown/20 w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                "A Ordem dos Frades Menores, fundada por São Francisco de Assis, é uma fraternidade na qual os irmãos, seguindo a Jesus Cristo mais de perto e sob a ação do Espírito Santo, consagram-se totalmente a Deus..."
                <footer className="mt-4 text-xs uppercase font-bold text-franciscan-brown tracking-widest">Constituições Gerais da OFM</footer>
              </blockquote>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-franciscan-green/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold text-franciscan-brown mb-6 text-center">Organização e Governo</h3>
              <p className="text-franciscan-gray mb-10 text-center text-lg">
                A Província Santa Cruz é animada por um Governo Provincial, formado por frades eleitos periodicamente, responsável por conduzir a vida fraterna, pastoral, administrativa e institucional.
              </p>
              <div className="flex justify-center bg-franciscan-light/50 rounded-2xl p-8">
                 <div className="text-center">
                   <strong className="block text-5xl font-extrabold text-franciscan-green mb-2 tracking-tight">119</strong>
                   <span className="text-sm text-franciscan-gray uppercase tracking-widest font-bold">Países de Atuação</span>
                 </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- SEÇÃO DE HIERARQUIA (ORGANOGRAMA) --- */}
      <Section background="light">
        <Container>
          <div className="text-center mb-16">
             <span className="text-franciscan-green font-bold tracking-widest uppercase text-sm">Estrutura Institucional</span>
             <h2 className="text-3xl md:text-4xl font-bold text-franciscan-brown mt-2 mb-4">Nossa Hierarquia</h2>
             <div className="w-24 h-1 bg-franciscan-green mx-auto rounded-full mb-6"></div>
             <p className="mt-4 text-franciscan-gray max-w-2xl mx-auto">
               Conheça a organização da Associação Franciscana, partindo da nossa Sede Administrativa até as unidades de atuação.
             </p>
          </div>
          
          {/* Componente Organogram recebe os dados atualizados */}
          <Organogram 
            unidades={unidadesAssociacao}
          />
        </Container>
      </Section>
      {/* --- FIM DA SEÇÃO DE HIERARQUIA --- */}

      {/* CTA */}
    {/* CTA */}
      <Section background="white">
        <Container>
          <div 
            className="text-center bg-franciscan-brown rounded-3xl p-10 md:p-16 shadow-2xl text-white max-w-5xl mx-auto relative overflow-hidden"
            // ALTERAÇÃO: Substituí 'bg-gradient-to-br...' por 'bg-franciscan-brown' (sólido)
          >
            {/* Decoração de fundo do CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Mais</h2>
              <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
                Convidamos você a conhecer mais sobre nossa história, nossas unidades e nossa missão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quem-somos"
                  className="inline-block bg-white text-franciscan-brown px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 text-base md:text-lg transform hover:-translate-y-1"
                >
                  Nossa História
                </Link>
                <Link
                  href="/unidades"
                  className="inline-block bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white transition-all duration-300 text-base md:text-lg transform hover:-translate-y-1"
                >
                  Nossas Unidades
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}