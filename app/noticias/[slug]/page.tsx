import { Metadata } from 'next'
import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'
import { getNoticiaBySlug, getAllNoticiasSlugs } from '@/lib/noticias'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

// Gera metadados dinâmicos para cada notícia
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const noticia = await getNoticiaBySlug(params.slug)
  
  if (!noticia) {
    return {
      title: 'Notícia não encontrada',
    }
  }

  return {
    title: noticia.title,
    description: noticia.resumo,
  }
}

// Gera todas as rotas estáticas em tempo de build
export function generateStaticParams() {
  const slugs = getAllNoticiasSlugs()
  return slugs
}

export default async function NoticiaPage({ params }: Props) {
  const noticia = await getNoticiaBySlug(params.slug)

  if (!noticia) {
    notFound()
  }

  return (
    <Section background="white">
      <Container>
        <article className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-franciscan-gray">
              <li>
                <Link href="/" className="hover:text-franciscan-brown">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/noticias" className="hover:text-franciscan-brown">
                  Notícias
                </Link>
              </li>
              <li>/</li>
              <li className="text-franciscan-brown">{noticia.title}</li>
            </ol>
          </nav>

          {/* Data de publicação */}
          <time 
            className="text-sm text-franciscan-gray block mb-4" 
            dateTime={noticia.date}
          >
            {new Date(noticia.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>

          {/* Título */}
          <h1 className="mb-8">{noticia.title}</h1>

          {/* Resumo */}
          {noticia.resumo && (
            <p className="text-xl text-franciscan-gray mb-8 font-medium leading-relaxed">
              {noticia.resumo}
            </p>
          )}

          {/* Conteúdo */}
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: noticia.contentHtml || '' }}
          />

          {/* Botão voltar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/noticias"
              className="inline-flex items-center text-franciscan-green font-semibold hover:underline"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar para Notícias
            </Link>
          </div>
        </article>
      </Container>
    </Section>
  )
}
