import { mockCars } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, CreditCard } from 'lucide-react'
import Link from 'next/link'
import { BookingForm } from './booking-form'

export default async function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const car = mockCars.find(c => c.id === id)

  if (!car) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <Link href={`/autos/${id}`} className="inline-flex items-center text-black hover:text-gray-700 mb-6 font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" /> Volver al detalle
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <BookingForm car={car} />
      </div>
    </div>
  )
}
