import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça a história e missão da Associação Franciscana de Educação e Assistência Social, inspirada nos valores de São Francisco de Assis.',
}

export default async function QuemSomosPage() {
  const { contentHtml } = await getMarkdownContent('quem-somos.md')

  return (
    <>
      {/* --- TOPO COM IMAGEM DE FUNDO --- */}
      <section
        className="relative w-full py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/quem-somos.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quem Somos
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Conheça a história e missão da Associação Franciscana de Educação e Assistência Social, inspirada nos valores de São Francisco de Assis.
            </p>
          </div>
        </Container>
      </section>
      {/* --------------------------------- */}

      {/* --- CONTEÚDO --- */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div 
              className="markdown-content text-franciscan-gray"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </Container>
      </Section>
    </>
  )
}