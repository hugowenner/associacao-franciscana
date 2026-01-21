import Link from 'next/link'
import Container from '@/components/Container'
import Section from '@/components/Section'

export default function HomePage() {
  return (
    <>
      {/* Hero Section - COM IMAGEM DE FUNDO */}
      <section
        className="relative w-full py-20 md:py-28 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fradeassis.png')" }}
      >
        {/* Camada escura para melhorar a leitura do texto */}
        <div className="absolute inset-0 bg-black/60"></div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Associação Franciscana de Educação e Assistência Social
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
              Educação e assistência social inspiradas nos valores de São Francisco de Assis
            </p>
            <p className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto">
              A Associação Franciscana de Educação e Assistência Social integra a tradição da Ordem dos Frades Menores (OFM), que atua no seguimento de Jesus Cristo, vivendo o Evangelho segundo a forma de vida proposta por São Francisco de Assis e seus primeiros companheiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quem-somos"
                className="inline-block bg-franciscan-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-franciscan-brown/90 transition-colors"
              >
                Conheça Nossa História
              </Link>
              <Link
                href="/unidades"
                className="inline-block bg-white text-franciscan-brown border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Nossas Unidades
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Missão - Nova Seção */}
      <Section background="beige">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-6">Nossa Missão</h2>
            <p className="text-lg text-franciscan-gray leading-relaxed mb-8">
              Nossa missão é promover a educação, o cuidado e a dignidade humana, guiados por valores como a fraternidade, a simplicidade e o serviço, colocando-nos a serviço da sociedade, especialmente dos mais necessitados.
            </p>
          </div>
        </Container>
      </Section>

      {/* Valores Franciscanos */}
      <Section background="white">
        <Container>
          <h2 className="text-center mb-12 text-franciscan-brown font-bold text-2xl">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-franciscan-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-franciscan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-franciscan-brown">Fraternidade</h3>
              <p className="text-franciscan-gray">
                Vivemos como irmãos e irmãs, cultivando relações baseadas no respeito, na comunhão e no amor fraterno.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-franciscan-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-franciscan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-franciscan-brown">Simplicidade</h3>
              <p className="text-franciscan-gray">
                Inspirados por São Francisco de Assis, buscamos uma vida simples, essencial e comprometida com o bem comum.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-franciscan-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-franciscan-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-franciscan-brown">Serviço</h3>
              <p className="text-franciscan-gray">
                Dedicamos nossa missão à educação e à assistência social, promovendo inclusão, justiça e cuidado com a vida.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Nossa Presença e Atuação */}
      <Section background="light">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-8">Nossa Presença e Atuação</h2>
            <div className="space-y-6 text-lg text-franciscan-gray">
              <p>
                A Ordem dos Frades Menores está presente em <strong>119 países</strong>, reunindo cerca de <strong>14.000 frades</strong>, organizados em Províncias e Custódias ao redor do mundo.
              </p>
              <p>
                No Brasil, a atuação franciscana se expressa, entre outras frentes, por meio da Província Santa Cruz, sediada em Belo Horizonte, que mantém uma forte presença evangelizadora e social em Minas Gerais e no sul da Bahia desde o ano de 1900.
              </p>
              <p className="text-base italic">
                Essa presença histórica é marcada pelo compromisso com a fé cristã, a promoção humana e os valores difundidos por São Francisco de Assis.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Identidade Franciscana - Nova Seção */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-6 text-center">Identidade Franciscana</h2>
            
            <p className="text-lg text-franciscan-gray mb-6 text-center">
              Em outras palavras, somos uma fraternidade consagrada que busca viver o Evangelho no seguimento de Jesus Cristo, segundo a forma de vida iniciada por Francisco de Assis. É assim que os Franciscanos — nome pelo qual os Frades Menores são conhecidos — reconhecem sua vocação e orientam sua missão no mundo.
            </p>

            <blockquote className="bg-franciscan-light border-l-4 border-franciscan-brown p-6 rounded-r-lg italic text-franciscan-gray text-sm md:text-base">
              "A Ordem dos Frades Menores, fundada por São Francisco de Assis, é uma fraternidade na qual os irmãos, seguindo a Jesus Cristo mais de perto e sob a ação do Espírito Santo, consagram-se totalmente a Deus, vivendo o Evangelho na Igreja, segundo a forma observada e proposta por São Francisco."
              <br /><br />
              <cite className="not-italic text-xs text-franciscan-gray/80 uppercase">
                (Constituições Gerais da Ordem dos Frades Menores, Art. 1,1)
              </cite>
            </blockquote>
          </div>
        </Container>
      </Section>

      {/* Organização e Governo - Nova Seção */}
      <Section background="beige">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-6">Organização e Governo</h2>
            <p className="text-lg text-franciscan-gray leading-relaxed mb-4">
              A Província Santa Cruz é animada por um Governo Provincial, formado por frades eleitos periodicamente, responsável por conduzir a vida fraterna, pastoral, administrativa e institucional da Província.
            </p>
            <p className="text-lg text-franciscan-gray leading-relaxed">
              Esse governo atua em comunhão com os demais frades, seguindo as diretrizes estabelecidas nos Capítulos Provinciais, assembleias periódicas que orientam a missão e o serviço franciscano.
            </p>
          </div>
        </Container>
      </Section>

      {/* Conheça Mais - CTA Atualizado */}
      <Section background="white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-franciscan-brown mb-6">Conheça Mais</h2>
            <p className="text-lg text-franciscan-gray mb-10">
              Convidamos você a conhecer mais sobre nossa história, nossas unidades e nossa missão, e a caminhar conosco na promoção da educação e da assistência social inspiradas pelo carisma franciscano.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/quem-somos"
                className="inline-flex items-center text-center w-full md:w-auto bg-franciscan-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-franciscan-brown/90 transition-colors"
              >
                👉 Saiba mais sobre nossa história
              </Link>
              <Link
                href="/unidades"
                className="inline-flex items-center text-center w-full md:w-auto bg-franciscan-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-franciscan-green/90 transition-colors"
              >
                👉 Conheça nossas unidades
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center text-center w-full md:w-auto bg-white text-franciscan-brown border border-franciscan-brown px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                👉 Entre em contato conosco
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}