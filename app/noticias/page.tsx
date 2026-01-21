import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { getAllNoticias } from '@/lib/noticias'

export const metadata: Metadata = {
  title: 'Notícias',
  description: 'Acompanhe as últimas notícias e comunicados da Associação Franciscana.',
}

export default function NoticiasPage() {
  const noticias = getAllNoticias()

  return (
    <>
      {/* --- TOPO COM IMAGEM DE FUNDO --- */}
      <section
        className="relative w-full py-16 md:py-24 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/noticias.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Container>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notícias
            </h1>
            <p className="text-lg text-gray-100 leading-relaxed">
              Acompanhe as últimas novidades e comunicados da Associação Franciscana.
            </p>
          </div>
        </Container>
      </section>
      {/* --------------------------------- */}

      {/* --- LISTA DE NOTÍCIAS --- */}
      <Section background="white">
        <Container>
          {noticias.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="text-center py-12">
              <p className="text-franciscan-gray">
                Nenhuma notícia disponível no momento.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}