'use client'

/**
 * Componente de Formulário de Contato (Client Component)
 * Gerencia o estado local e a interatividade do formulário
 */

import React, { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Aqui você integraria com sua API real de envio de email
    console.log('Dados do formulário:', formData)
    
    setStatus('success')
    setIsSubmitting(false)
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' })
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <div className="bg-white/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-franciscan-green/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      <h2 className="text-2xl md:text-3xl mb-8 text-franciscan-brown font-bold flex items-center gap-3">
        <span className="w-1.5 h-8 bg-gradient-to-b from-franciscan-green to-franciscan-brown rounded-full"></span>
        Envie uma mensagem
      </h2>
      
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center animate-fade-in">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
             <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
          </div>
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="nome" className="block text-sm font-bold text-franciscan-brown mb-2 ml-1">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-franciscan-green/50 focus:border-franciscan-green transition-all outline-none shadow-sm"
                placeholder="Seu nome"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-bold text-franciscan-brown mb-2 ml-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-franciscan-green/50 focus:border-franciscan-green transition-all outline-none shadow-sm"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="telefone" className="block text-sm font-bold text-franciscan-brown mb-2 ml-1">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-franciscan-green/50 focus:border-franciscan-green transition-all outline-none shadow-sm"
                placeholder="(31) 99999-9999"
              />
            </div>
            <div className="group">
              <label htmlFor="assunto" className="block text-sm font-bold text-franciscan-brown mb-2 ml-1">
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                name="assunto"
                required
                value={formData.assunto}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-franciscan-green/50 focus:border-franciscan-green transition-all outline-none shadow-sm"
                placeholder="Motivo do contato"
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="mensagem" className="block text-sm font-bold text-franciscan-brown mb-2 ml-1">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              required
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-franciscan-green/50 focus:border-franciscan-green transition-all outline-none resize-none shadow-sm"
              placeholder="Como podemos ajudar?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-franciscan-brown to-amber-900 hover:from-franciscan-brown/90 hover:to-amber-900/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : 'Enviar Mensagem'}
          </button>

          <p className="text-xs text-franciscan-gray text-center mt-4">
            Ao enviar este formulário, você concorda com nossa{' '}
            <a href="/lgpd" className="text-franciscan-green hover:underline font-bold">Política de Privacidade</a>.
          </p>
        </form>
      )}
    </div>
  )
}