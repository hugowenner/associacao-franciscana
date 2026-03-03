import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Demonstrações Financeiras',
  description: 'Transparência financeira da Associação Franciscana - Documentos contábeis e relatórios.',
}

export default async function DREPage() {
  const { contentHtml } = await getMarkdownContent('dre.md')

  return (
    <Section background="light">
      <Container>
        <article className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-white/50">
          <div className="mb-8 pb-6 border-b border-gray-100">
            {/* Título Alterado */}
            <h1 className="text-3xl md:text-4xl font-bold text-franciscan-brown">Demonstrações Financeiras</h1>
          </div>
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </Container>
    </Section>
  )
}