import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Quem Somos',
  description: 'Conheça a história e missão da Associação Franciscana de Educação e Assistência Social.',
}

export default async function QuemSomosPage() {
  const { contentHtml } = await getMarkdownContent('quem-somos.md')

  return (
    <>
      <Hero
        title="Quem Somos"
        subtitle="Conheça a história e missão da Associação Franciscana de Educação e Assistência Social, inspirada nos valores de São Francisco de Assis."
        imageSrc="/images/quem-somos.png"
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white/50">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </Container>
      </Section>
    </>
  )
}