import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { getAllNoticias } from '@/lib/noticias'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Acompanhe as últimas notícias e comunicados da Associação Franciscana.',
}

export default function NoticiasPage() {
  const noticias = getAllNoticias()

  return (
    <>
      <Hero
        title="Notícias & Comunicados"
        subtitle="Acompanhe as últimas novidades e atualizações da Associação Franciscana."
        backgroundImage="/images/noticias.png"
      />

      <Section background="light">
        <Container>
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {noticias.map((noticia) => (
                <Card
                  key={noticia.slug}
                  title={noticia.title}
                  description={noticia.resumo}
                  link={`/noticias/${noticia.slug}`}
                  date={noticia.date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-white/60 backdrop-blur-sm rounded-3xl max-w-2xl mx-auto border border-gray-100">
              <div className="text-7xl mb-6 grayscale opacity-50">📰</div>
              <p className="text-franciscan-gray text-lg font-medium">
                Nenhuma notícia disponível no momento.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}