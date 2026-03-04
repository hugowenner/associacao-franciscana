import { Metadata } from 'next'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de Privacidade e Proteção de Dados da Associação Franciscana em conformidade com a LGPD.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Hero
        title="Política de Privacidade"
        subtitle="Compromisso com a transparência e proteção dos seus dados"
        backgroundImage="/images/lgpd.png"
      />

      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            
            <div className="prose prose-lg max-w-none text-franciscan-gray">
              
              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4">1. Introdução</h2>
              <p>
                A Associação Franciscana de Educação e Assistência Social (“Associação Franciscana”), comprometida com a transparência e o respeito à privacidade, apresenta esta Política de Privacidade. O objetivo é esclarecer como coletamos, utilizamos, armazenamos e protegemos os dados pessoais dos usuários de nossos canais de atendimento e serviços, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
              </p>

              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4 mt-8">2. Coleta de Dados</h2>
              <p>
                Coletamos dados pessoais fornecidos voluntariamente pelos titulares, tais como: nome completo, endereço de e-mail, número de telefone, endereço residencial e informações necessárias para a prestação de serviços educacionais, assistenciais ou para resposta a contactos realizados através do site.
              </p>
              <p>
                Coletamos dados de navegação (cookies, endereço IP, tipo de navegador) para melhorar a experiência do usuário e segurança do site, sempre com seu consentimento.
              </p>

              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4 mt-8">3. Finalidade do Tratamento</h2>
              <p>
                Os dados pessoais coletados são tratados para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Responder a solicitações de contato e informações;</li>
                <li>Gerenciar matrículas e serviços educacionais;</li>
                <li>Enviar comunicados institucionais (com consentimento);</li>
                <li>Cumprir obrigações legais e regulatórias;</li>
                <li>Realizar campanhas de assistência social e doações.</li>
              </ul>

              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4 mt-8">4. Compartilhamento de Dados</h2>
              <p>
                A Associação Franciscana não comercializa dados pessoais. Os dados poderão ser compartilhados exclusivamente:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com órgãos públicos e reguladores, quando exigido por lei;</li>
                <li>Com parceiros estratégicos que auxiliem na execução de nossas finalidades (ex: processadoras de pagamento, serviços de nuvem), sempre mediante contratos de confidencialidade e proteção de dados.</li>
              </ul>

              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4 mt-8">5. Direitos do Titular</h2>
              <p>
                A LGPD garante ao titular de dados pessoais direitos que podem ser exercidos mediante requisição expressa ao Encarregado de Dados, tais como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos seus dados;</li>
                <li>Correção de dados incompletos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade dos dados;</li>
                <li>Revogação do consentimento.</li>
              </ul>

              <h2 className="text-2xl font-bold text-franciscan-brown border-b pb-2 mb-4 mt-8">6. Contato do Encarregado de Dados</h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
              </p>
              <div className="bg-franciscan-light/50 p-6 rounded-xl mt-4 border border-franciscan-green/20">
                <p className="font-bold text-franciscan-brown">Associação Franciscana - Setor de Privacidade</p>
                <p className="mt-2">E-mail: <a href="mailto:privacidade@associacaofranciscana.org.br" className="text-franciscan-green font-bold hover:underline">privacidade@associacaofranciscana.org.br</a></p>
                <p className="mt-1">Telefone: (31) 3469-5545</p>
              </div>

              <h3 className="text-xl font-bold text-franciscan-brown mt-8">Portal do Titular de Dados</h3>
              <p>
                Para mais informações sobre seus direitos na esfera nacional, acesse o Portal do Titular de Dados da Autoridade Nacional de Proteção de Dados (ANPD): 
                <a href="https://www.gov.br/anpd/pt-br/assuntos/noticias/anpd-disponibiliza-portal-do-titular-de-dados" target="_blank" rel="noopener noreferrer" className="text-franciscan-green font-bold hover:underline ml-1">
                  Gov.br/ANPD
                </a>.
              </p>
              
              <p className="text-sm text-gray-500 mt-8 italic">
                Esta política foi atualizada em conformidade com a legislação vigente. Última revisão: {new Date().getFullYear()}.
              </p>
            </div>

          </div>
        </Container>
      </Section>
    </>
  )
}