import { mockCars } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowLeft } from 'lucide-react'

export default async function CarDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const car = mockCars.find(c => c.id === id)

  if (!car) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/autos" className="inline-flex items-center text-black hover:text-gray-700 mb-6 font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al catálogo
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image 
              src={car.imagen_principal} 
              alt={`${car.marca} ${car.modelo}`} 
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority 
            />
          </div>
          {/* Gallery placeholder */}
          <div className="grid grid-cols-4 gap-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="relative h-24 w-full rounded-lg overflow-hidden bg-gray-200 cursor-pointer hover:opacity-80 border-2 border-transparent hover:border-[#FFD700] transition-all">
                  {/* Thumbnails would go here */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Foto {i}
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{car.marca} {car.modelo}</h1>
          <p className="text-xl text-gray-500 mt-2 font-medium">{car.categoria}</p>
          
          <div className="mt-6 flex items-baseline p-4 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-4xl font-bold text-black">Gs. {car.precio_dia.toLocaleString('es-PY')}</span>
            <span className="ml-2 text-gray-600 font-medium">/ día</span>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Especificaciones</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              <div className="bg-gray-50 p-3 rounded-md">
                <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Motor</dt>
                <dd className="mt-1 text-base font-medium text-gray-900">{car.especificaciones.motor}</dd>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Transmisión</dt>
                <dd className="mt-1 text-base font-medium text-gray-900">{car.especificaciones.transmision}</dd>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Combustible</dt>
                <dd className="mt-1 text-base font-medium text-gray-900">{car.especificaciones.combustible}</dd>
              </div>
              <div className="bg-gray-50 p-3 rounded-md">
                <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Pasajeros</dt>
                <dd className="mt-1 text-base font-medium text-gray-900">{car.especificaciones.asientos}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Equipamiento</h3>
            <ul className="grid grid-cols-2 gap-3">
              {car.equipamiento?.map((item) => (
                <li key={item} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-[#FFD700] mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link href={`/reservar/${car.id}`} className="block">
              <Button size="lg" className="w-full text-lg py-6 bg-black hover:bg-gray-800 text-[#FFD700] shadow-lg hover:shadow-xl transition-all">
                Reservar Ahora
              </Button>
            </Link>
            <p className="mt-4 text-center text-sm text-gray-500">
              Sin cargos ocultos. Cancelación gratuita hasta 24hs antes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
