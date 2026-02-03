import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Hero from '@/components/Hero'
import Organogram from '@/components/Organogram' // Importa o componente de hierarquia

export const metadata: Metadata = {
  title: 'Nossas Unidades',
  description: 'Conheça a estrutura da Associação Franciscana: Sede Administrativa e unidades de educação e assistência social.',
}

async function getUnidades() {
  const filePath = path.join(process.cwd(), 'content', 'unidades.json')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  return data.unidades
}

export default async function UnidadesPage() {
  const unidades = await getUnidades()

  return (
    <>
      <Hero
        title="Nossas Unidades"
        subtitle="Conheça nossa estrutura organizacional, da Sede Administrativa às unidades de atuação."
        imageSrc="/images/unidades.png"
      />

      {/* Utilizamos o mesmo layout de seção, mas injetamos o Organogram */}
      <Section background="light">
        <Container>
          <div className="w-full">
            {/* O componente Organogram já contém toda a lógica de Sede + Unidades + Linhas */}
            <Organogram unidades={unidades} />
          </div>
        </Container>
      </Section>
    </>
  )
}