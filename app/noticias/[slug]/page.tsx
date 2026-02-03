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
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-franciscan-gray">
              <li>
                <Link href="/" className="hover:text-franciscan-green transition-colors">
                  Início
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <Link href="/noticias" className="hover:text-franciscan-green transition-colors">
                  Notícias
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-franciscan-brown font-bold truncate max-w-[150px] md:max-w-xs">{noticia.title}</li>
            </ol>
          </nav>

          {/* Data de publicação */}
          <div className="mb-6 flex items-center gap-2">
            <div className="h-px bg-gray-200 flex-1"></div>
            <time 
              className="text-sm font-bold text-franciscan-green bg-franciscan-green/10 px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap" 
              dateTime={noticia.date}
            >
              {new Date(noticia.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })}
            </time>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Título */}
          <h1 className="mb-8 text-3xl md:text-5xl font-bold text-franciscan-brown leading-tight">{noticia.title}</h1>

          {/* Resumo */}
          {noticia.resumo && (
            <p className="text-xl md:text-2xl text-franciscan-gray mb-10 font-light leading-relaxed border-l-4 border-franciscan-green pl-6 bg-gray-50 py-6 rounded-r-xl">
              {noticia.resumo}
            </p>
          )}

          {/* Conteúdo */}
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: noticia.contentHtml || '' }}
          />

          {/* Botão voltar */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/noticias"
              className="inline-flex items-center text-franciscan-brown font-bold hover:text-franciscan-green transition-colors group text-lg"
            >
              <svg className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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