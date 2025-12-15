import { useState } from 'react'

const QR_CODE_IMAGE = '/qrcode.webp'
const PIX_KEY = '00020126360014BR.GOV.BCB.PIX0114+55719912896155204000053039865802BR5923Matheus Junqueira Ramos6009SAO PAULO62140510Vm2yksmXPH6304B633'

function App() {
  const [copied, setCopied] = useState(false)

  const handleCopyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-6 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              🌿 Ajude os Ribeirinhos do Amazonas
            </h1>
            <p className="text-green-100 text-sm md:text-base">
              Campanha de arrecadação de cestas básicas
            </p>
          </div>

          <div className="p-6 space-y-6">
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed">
                Famílias ribeirinhas do Amazonas precisam da sua ajuda! 
                Sua doação será convertida em cestas básicas para quem mais precisa.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <img 
                  src={QR_CODE_IMAGE} 
                  alt="QR Code PIX" 
                  className="w-64 h-64 object-contain border-4 border-green-500 rounded-2xl shadow-lg"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Chave PIX
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={PIX_KEY}
                    readOnly
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-800 text-xs"
                  />
                  <button
                    onClick={handleCopyPix}
                    className="px-4 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copiado!
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-bold text-amber-800 mb-1">
                    Prestação de Contas
                  </h3>
                  <p className="text-amber-700 text-sm">
                    Todas as doações e compras de cestas básicas estão sendo documentadas e divulgadas no Instagram{' '}
                    <a 
                      href="https://www.instagram.com/matheus_ramosj/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold text-amber-900 hover:underline"
                    >
                      @matheus_ramosj
                    </a>
                    {' '}no destaque <span className="font-bold">"AMAZONAS"</span>.
                  </p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.instagram.com/stories/highlights/18110889091543203/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white text-center py-4 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Acompanhe no Instagram
              </span>
            </a>
          </div>

          <div className="bg-gray-100 p-4 text-center">
            <p className="text-gray-600 text-sm">
              💚 Cada doação faz a diferença! Obrigado por ajudar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
