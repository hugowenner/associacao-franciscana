import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'LGPD - Política de Privacidade',
  description: 'Política de Privacidade e Proteção de Dados da Associação Franciscana.',
}

export default async function LGPDPage() {
  const { contentHtml } = await getMarkdownContent('lgpd.md')

  return (
    <>
      <Hero
        title="Política de Privacidade"
        subtitle="Proteção de Dados Pessoais em conformidade com a LGPD."
        backgroundImage="/images/lgpd.png"
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
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