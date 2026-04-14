import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Button } from '@/components/ui/button'
import { mockCars } from '@/lib/mock-data'
import { ShieldCheck, Clock, MapPin, Search } from 'lucide-react'

export default function Home() {
  const featuredCars = mockCars.slice(0, 3)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
             {/* Background image could go here */}
             <Image 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80"
                alt="Company Group Paraguay Hero"
                fill
                className="object-cover"
                priority
             />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Recorre <span className="text-[#FFD700]">Paraguay</span> a tu manera
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Alquila el auto perfecto para tu viaje. Sin complicaciones, precios transparentes y soporte local 24/7.
          </p>

          {/* Search Box */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8 text-gray-900">
             <form className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-4 items-end">
               <div className="md:col-span-2">
                 <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Ubicación de Retiro</label>
                 <div className="relative rounded-md shadow-sm">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <MapPin className="h-5 w-5 text-gray-400" />
                   </div>
                   <input type="text" defaultValue="Ciudad del Este" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border" placeholder="Ciudad del Este" />
                 </div>
               </div>
               
               <div className="md:col-span-1">
                 <label className="block text-sm font-medium text-gray-700 mb-1 text-left">Desde</label>
                 <input type="date" className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 border px-2" />
               </div>
               
               <div className="md:col-span-1">
                 <Button className="w-full h-10 bg-[#FFD700] hover:bg-[#E5C100] text-black font-bold">
                   <Search className="mr-2 h-4 w-4" /> Buscar
                 </Button>
               </div>
             </form>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Autos Destacados
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Las mejores opciones elegidas por nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 w-full">
                  <Image 
                    src={car.imagen_principal} 
                    alt={`${car.marca} ${car.modelo}`} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-black shadow-sm">
                    {car.categoria}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{car.marca} {car.modelo}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-black">Gs. {car.precio_dia.toLocaleString('es-PY')}</p>
                      <p className="text-xs text-gray-400">por día</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6 pt-4 border-t border-gray-100">
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
                  
                  <Link href={`/autos/${car.id}`} className="block">
                    <Button className="w-full bg-black hover:bg-gray-800 text-[#FFD700]">Ver Detalles</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/autos">
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-50">
                Ver Todos los Autos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Airbnb Promotional Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              ¿Viajas a Ciudad del Este?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Alojamiento disponible para que disfrutes tu estadía al máximo.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div className="airbnb-embed-frame" data-id="1058157139868686770" data-view="home" data-hide-price="true" style={{ width: '450px', height: '300px', margin: 'auto' }}>
              <a href="https://www.airbnb.com.ar/rooms/1058157139868686770?check_in=2026-04-25&check_out=2026-04-26&guests=1&adults=1&s=66&source=embed_widget">Mostrar en Airbnb</a>
              <a href="https://www.airbnb.com.ar/rooms/1058157139868686770?check_in=2026-04-25&check_out=2026-04-26&guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">Alojamiento · Ciudad del Este · ★4,98 · 2 dormitorios · 4 camas · 2 baños</a>
            </div>
            <Script src="https://www.airbnb.com.py/embeddable/airbnb_jssdk" strategy="lazyOnload" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#FFD700]/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Seguridad Garantizada</h3>
              <p className="text-gray-600">Todos nuestros vehículos cuentan con seguro completo y mantenimiento al día.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#FFD700]/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte 24/7</h3>
              <p className="text-gray-600">Estamos disponibles en todo momento para asistirte durante tu viaje.</p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#FFD700]/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cobertura Nacional</h3>
              <p className="text-gray-600">Retira y devuelve tu auto en las principales ciudades de Paraguay.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
