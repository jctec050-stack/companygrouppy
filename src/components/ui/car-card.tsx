import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Car } from '@/types'

interface CarCardProps {
  car: Car
}

export function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 w-full flex-shrink-0">
        <Image 
          src={car.imagen_principal} 
          alt={`${car.marca} ${car.modelo}`} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-black shadow-sm">
          {car.categoria}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{car.marca} {car.modelo}</h3>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-black">Gs. {car.precio_dia.toLocaleString('es-PY')}</p>
            <p className="text-xs text-gray-400">por día</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6 pt-4 border-t border-gray-100 mt-auto">
          <div className="flex items-center" title="Transmisión">
            <span className="font-medium">{car.especificaciones.transmision === 'Automática' ? 'Auto' : 'Manual'}</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center" title="Combustible">
            <span className="font-medium">{car.especificaciones.combustible}</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="flex items-center" title="Pasajeros">
            <span className="font-medium">{car.especificaciones.asientos} Pasajeros</span>
          </div>
        </div>
        
        <Link href={`/autos/${car.id}`} className="block mt-auto">
          <Button className="w-full bg-black hover:bg-gray-800 text-[#FFD700]">Ver Detalles</Button>
        </Link>
      </div>
    </div>
  )
}
