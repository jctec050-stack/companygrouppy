import { CarCard } from '@/components/ui/car-card'
import { mockCars } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Filter } from 'lucide-react'

export default function Catalog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Nuestra Flota</h1>
          <p className="mt-2 text-gray-600">Encuentra el vehículo perfecto para tu necesidad.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center border-black text-black hover:bg-gray-50">
            <Filter className="mr-2 h-4 w-4" /> Filtros
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  )
}
