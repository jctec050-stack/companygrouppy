"use client"
import { FormEvent, useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Car } from '@/types'
import Image from 'next/image'
import { CreditCard } from 'lucide-react'

export function BookingForm({ car }: { car: Car }) {
  const [retiro, setRetiro] = useState('')
  const [devolucion, setDevolucion] = useState('')

  const estimatedDays = useMemo(() => {
    if (!retiro || !devolucion) return 1 // Predeterminado a 1 día
    const start = new Date(retiro)
    const end = new Date(devolucion)
    const timeDiff = end.getTime() - start.getTime()
    if (timeDiff <= 0) return 1
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return days > 0 ? days : 1
  }, [retiro, devolucion])

  const total = car.precio_dia * estimatedDays

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nombre = formData.get('nombre') as string
    const email = formData.get('email') as string
    const telefono = formData.get('telefono') as string
    const ci = formData.get('ci') as string

    const text = `Hola, me gustaría confirmar la reserva del vehículo:\n- Vehículo: ${car.marca} ${car.modelo}\n- Transmisión: ${car.especificaciones.transmision}\n- Nombre: ${nombre}\n- Documento (CI): ${ci}\n- Email: ${email}\n- Teléfono: ${telefono}\n- Fecha de retiro: ${retiro.replace('T', ' ')}\n- Fecha de devolución: ${devolucion.replace('T', ' ')}\n- Días calculados: ${estimatedDays} días\n- Total Estimado: Gs. ${total.toLocaleString('es-PY')}`

    const waLink = `https://wa.me/595983904904?text=${encodeURIComponent(text)}`
    window.open(waLink, '_blank')
  }

  return (
    <>
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Finalizar Reserva</h1>
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 text-black border-b pb-2">Datos del Conductor</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input name="nombre" required type="text" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" placeholder="Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" required type="email" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" placeholder="juan@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input name="telefono" required type="tel" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" placeholder="+595 9..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Documento de Identidad (CI)</label>
                <input name="ci" required type="text" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" placeholder="1.234.567" />
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-6 mt-8 text-black border-b pb-2">Detalles del Alquiler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Retiro</label>
                <input name="retiro" value={retiro} onChange={e => setRetiro(e.target.value)} required type="datetime-local" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Devolución</label>
                <input name="devolucion" value={devolucion} onChange={e => setDevolucion(e.target.value)} required type="datetime-local" className="block w-full border-gray-300 text-black rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2.5 border transition-colors" />
              </div>
            </div>

            <div className="mt-8 pt-4">
              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-[#FFD700] text-lg py-6 shadow-md hover:shadow-lg transition-all font-bold">
                Confirmar por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24 border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Resumen</h2>
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
            <div className="relative h-20 w-28 rounded-md overflow-hidden bg-gray-100">
              <Image src={car.imagen_principal} alt={car.modelo} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{car.marca} {car.modelo}</h3>
              <p className="text-sm text-gray-500">{car.categoria}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Precio por día</span>
              <span className="font-medium text-gray-900">Gs. {car.precio_dia.toLocaleString('es-PY')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Días estimados</span>
              <span className="font-medium text-gray-900">{estimatedDays} días</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Seguro Básico</span>
              <span className="font-medium text-black">Gratis</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Total Estimado</span>
              <span className="text-xl font-bold text-black">Gs. {total.toLocaleString('es-PY')}</span>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg flex items-start border border-gray-200">
            <CreditCard className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-800 leading-relaxed">
              No se realizará ningún cargo ahora. El pago se realiza al retirar el vehículo en nuestra sucursal.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
