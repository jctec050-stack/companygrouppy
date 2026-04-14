'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl font-bold text-black">Company Group Paraguay</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/autos" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Catálogo
            </Link>
            <Link href="/servicios" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Servicios
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contacto
            </Link>
            <Button variant="default" className="bg-black hover:bg-gray-800 text-[#FFD700]">
              Iniciar Sesión
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/autos"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-black hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/servicios"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-black hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-black hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <div className="px-4 py-3">
                 <Button className="w-full bg-black hover:bg-gray-800 text-[#FFD700]">Iniciar Sesión</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
