import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'LGPD - Política de Privacidade',
  description: 'Política de Privacidade e Proteção de Dados da Associação Franciscana.',
}

export default async function LGPDPage() {
  const { contentHtml } = await getMarkdownContent('lgpd.md')

  return (
    <Section background="white">
      <Container>
        <article className="max-w-4xl mx-auto">
          <h1>LGPD - Política de Privacidade</h1>
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </Container>
    </Section>
  )
}
