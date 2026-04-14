import Link from 'next/link'
import { Car, Home, ArrowRight } from 'lucide-react'

export default function ServiciosPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Nuestros Servicios</h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales para que tu viaje sea perfecto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Servicio 1: Renta de Vehículos */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col">
          <div className="h-48 bg-black flex items-center justify-center">
            <Car className="h-24 w-24 text-[#FFD700]" />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Renta de Vehículos</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed flex-grow">
              Nuestra flota de alquiler cuenta con opciones para todos los terrenos y necesidades. Desde autos compactos para moverte por la ciudad hasta SUVs espaciosas para realizar viajes familiares en ruta con seguridad y confort garantizado.
            </p>
            <Link href="/autos" className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-lg font-bold rounded-md text-black bg-[#FFD700] hover:bg-[#E5C100] transition-colors w-full shadow-sm hover:shadow">
              Ver Catálogo de Autos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Servicio 2: Hospedaje (Airbnb) */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col">
          <div className="h-48 bg-black flex items-center justify-center">
            <Home className="h-24 w-24 text-[#FFD700]" />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hospedaje Exclusivo</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed flex-grow">
              Si visitas Ciudad del Este, te ofrecemos un alojamiento destacado para vivir una estadía cómoda, moderna y segura. Totalmente equipado, con excelente ubicación cerca de las principales atracciones y valorado por nuestros huéspedes.
            </p>
            <a href="https://www.airbnb.com.ar/rooms/1058157139868686770" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-4 border border-black text-lg font-bold rounded-md text-white bg-black hover:bg-gray-800 transition-colors w-full shadow-sm hover:shadow">
              Ver Alojamiento en Airbnb <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
