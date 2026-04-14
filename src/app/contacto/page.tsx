"use client"
import { FormEvent } from 'react'
import { MapPin, Phone, Mail, Instagram, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactoPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get('nombre') as string
    const motivo = formData.get('motivo') as string
    const mensaje = formData.get('mensaje') as string

    const text = `Hola Company Group Paraguay, mi nombre es ${nombre}.\n\nLes escribo por la siguiente consulta (${motivo}):\n${mensaje}`
    const waLink = `https://wa.me/595983904904?text=${encodeURIComponent(text)}`
    window.open(waLink, '_blank')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Comunícate con Nosotros</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          ¿Tienes alguna duda o solicitud especial? Escríbenos y nuestro equipo te responderá a la brevedad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Información de contacto */}
        <div className="bg-black p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-[#FFD700] mb-8">Información de Contacto</h2>
            
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="text-lg font-medium">Ciudad del Este, Paraguay</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp / Llamadas</p>
                  <p className="text-lg font-medium">+595 983 904904</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#FFD700]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Correo Electrónico</p>
                  <p className="text-lg font-medium">info@companygroupparaguay.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-400 mb-4">Síguenos en nuestras redes</p>
            <a href="https://www.instagram.com/companygroup_py/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white hover:text-[#FFD700] transition-colors">
               <Instagram className="h-8 w-8 mr-2" />
               <span className="font-medium text-lg">@companygroup_py</span>
            </a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="p-10 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input name="nombre" required type="text" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border transition-colors bg-gray-50 hover:bg-white" placeholder="Ej. Juan Pérez" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Motivo de contacto</label>
              <select name="motivo" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border transition-colors bg-gray-50">
                <option>Consulta de alquiler de autos</option>
                <option>Consulta sobre alojamiento (Airbnb)</option>
                <option>Presupuesto corporativo</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea name="mensaje" required rows={5} className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3 border transition-colors bg-gray-50 hover:bg-white resize-none" placeholder="Escribe tu consulta aquí..."></textarea>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-[#FFD700] text-lg py-6 shadow-md hover:shadow-lg transition-all font-bold flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" /> Iniciar Chat de WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
