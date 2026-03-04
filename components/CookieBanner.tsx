'use client'

import React, { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
    // Aqui você poderia ativar scripts de analytics, etc.
  }

  const handleConfigure = () => {
    // Para simplificar, salvamos uma preferência mínima.
    // Em um cenário real, isso abriria um modal de preferências.
    localStorage.setItem('cookie-consent', 'configured-necessary')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white border-t-4 border-franciscan-green shadow-2xl transform transition-transform duration-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex-1 text-center sm:text-left">
          <p className="text-franciscan-gray text-sm md:text-base leading-relaxed">
            Utilizamos cookies para melhorar sua experiência em nosso site. Você pode aceitar todos os cookies ou configurar suas preferências.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={handleConfigure}
            className="px-6 py-2.5 text-sm font-bold text-franciscan-brown border border-franciscan-brown/20 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            ⚙ Configurar cookies
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 text-sm font-bold text-white bg-franciscan-green rounded-lg hover:bg-green-800 transition-colors shadow-md w-full sm:w-auto"
          >
            ✔ Aceitar todos
          </button>
        </div>

      </div>
    </div>
  )
}