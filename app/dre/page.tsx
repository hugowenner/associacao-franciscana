import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'DRE - Demonstrações Financeiras',
  description: 'Transparência financeira da Associação Franciscana - DRE e documentos contábeis.',
}

export default async function DREPage() {
  const { contentHtml } = await getMarkdownContent('dre.md')

  return (
    <Section background="white">
      <Container>
        <article className="max-w-4xl mx-auto">
          <h1>DRE - Transparência Financeira</h1>
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </Container>
    </Section>
  )
}
