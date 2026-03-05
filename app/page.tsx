import Link from 'next/link'
import dynamic from 'next/dynamic'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Hero from '@/components/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Associação Franciscana de Educação e Assistência Social - Ordem dos Frades Menores (OFM).',
}

// ✅ Reduz JS inicial (carrega depois)
const Organogram = dynamic(() => import('@/components/Organogram'), {
  ssr: true,
  loading: () => (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="h-6 w-48 bg-gray-200 rounded mb-4 animate-pulse" />
      <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
      <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
    </div>
  ),
})

const TimelineSection = dynamic(() => import('@/components/TimelineSection'), {
  ssr: true,
  loading: () => (
    <Section background="beige">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        </div>
      </Container>
    </Section>
  ),
})

export default function HomePage() {
  const unidadesAssociacao = [
    {
      nome: 'Colégio Santo Antônio',
      sigla: 'CSA',
      descricao:
        'Instituição de ensino que alia excelência acadêmica aos valores franciscanos, formando cidadãos conscientes e solidários.',
      endereco: 'Belo Horizonte, MG',
      site: 'https://www.colegiosantoantonio.org.br',
    },
    {
      nome: 'Centro de Educação Infantil São Francisco',
      sigla: 'CESFRAN',
      descricao:
        'Centro dedicado ao desenvolvimento infantil, promovendo o cuidado e a educação na primeira infância.',
      endereco: 'Belo Horizonte, MG',
      site: 'https://www.cesfran.org.br',
    },
    {
      nome: 'Centro de Educação Infantil Santa Clara',
      sigla: 'CESCLAR',
      descricao:
        'Promove o desenvolvimento integral da criança por meio de atividades lúdicas e pedagógicas.',
      endereco: 'Belo Horizonte, MG',
      site: 'https://www.cesclar.org.br',
    },
    {
      nome: 'Centro Franciscano de Apoio Escolar',
      sigla: 'CEFAE 1 e 2',
      descricao:
        'Oferece suporte pedagógico e atividades de reforço escolar para complementar a aprendizagem.',
      endereco: 'Belo Horizonte, MG',
      site: 'https://www.cefae.org.br',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Associação Franciscana de Educação e Assistência Social"
        subtitle="Educação e assistência social inspiradas nos valores de São Francisco de Assis"
        backgroundImage="/images/fradeassis01.png"
      />

      {/* ================= MISSÃO ================= */}
      <Section background="beige">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-franciscan-brown tracking-tight">
              Nossa Missão
            </h2>

            <div className="mx-auto mt-5 h-[2px] w-12 bg-franciscan-green/60 rounded-full" />

            <p className="mt-8 text-lg md:text-xl font-medium text-franciscan-brown leading-tight">
              Educar com excelência.<br />
              Cuidar com fraternidade.<br />
              Servir com simplicidade.
            </p>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-franciscan-gray max-w-3xl mx-auto">
              Nossa missão é promover a educação, o cuidado e a dignidade humana,
              guiados por valores como a fraternidade, a simplicidade e o serviço,
              colocando-nos a serviço da sociedade, especialmente dos mais necessitados.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left md:text-center">
              <div>
                <h3 className="text-lg font-semibold text-franciscan-brown">
                  Fraternidade
                </h3>
                <p className="mt-2 text-sm text-franciscan-gray leading-relaxed">
                  Relações baseadas no respeito, na comunhão e no amor fraterno.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-franciscan-brown">
                  Simplicidade
                </h3>
                <p className="mt-2 text-sm text-franciscan-gray leading-relaxed">
                  Vida essencial e comprometida com o bem comum, inspirada em São Francisco.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-franciscan-brown">
                  Serviço
                </h3>
                <p className="mt-2 text-sm text-franciscan-gray leading-relaxed">
                  Educação e assistência social com inclusão, justiça e cuidado com a vida.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ✅ Lazy (reduz bundle inicial) */}
      <TimelineSection />

      <Section background="light">
        <Container>
          <div className="text-center mb-16">
            <span className="text-franciscan-green font-bold tracking-widest uppercase text-sm">
              Estrutura Institucional
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-franciscan-brown mt-2 mb-4">
              Nossa Hierarquia
            </h2>
            <div className="w-24 h-1 bg-franciscan-green mx-auto rounded-full mb-6"></div>
            <p className="mt-4 text-franciscan-gray max-w-2xl mx-auto">
              Conheça a organização da Associação Franciscana,
              partindo da nossa Sede Administrativa até as unidades de atuação.
            </p>
          </div>

          {/* ✅ Lazy (reduz bundle inicial) */}
          <Organogram unidades={unidadesAssociacao} />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div
            className="
              text-center text-white max-w-5xl mx-auto relative overflow-hidden
              rounded-3xl p-10 md:p-16 shadow-2xl
              bg-franciscan-brown
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-franciscan-green/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-franciscan-green/70 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Conheça Mais
              </h2>

              <p className="text-base md:text-xl text-gray-100/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Convidamos você a conhecer mais sobre nossa história, nossas unidades e nossa missão.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/quem-somos"
                  className="
                    inline-flex items-center justify-center
                    bg-white text-franciscan-brown
                    px-8 py-4 rounded-xl font-bold
                    shadow-[0_10px_25px_rgba(0,0,0,0.18)]
                    hover:bg-gray-100 hover:-translate-y-0.5
                    transition-all duration-300
                    text-base md:text-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-franciscan-brown
                  "
                >
                  Nossa História
                </Link>

                <Link
                  href="/unidades"
                  className="
                    inline-flex items-center justify-center
                    bg-white/5 text-white
                    border border-white/25
                    px-8 py-4 rounded-xl font-bold
                    hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5
                    transition-all duration-300
                    text-base md:text-lg
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-franciscan-brown
                  "
                >
                  Nossas Unidades
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}