import Link from 'next/link'
import { Car, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-[#FFD700]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center">
              <Car className="h-8 w-8 text-[#FFD700]" />
              <span className="ml-2 text-xl font-bold">Company Group Paraguay</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              La mejor opción para recorrer Paraguay con libertad y seguridad.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FFD700]">Empresa</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/nosotros" className="text-gray-400 hover:text-[#FFD700] transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/autos" className="text-gray-400 hover:text-[#FFD700] transition-colors">Nuestra Flota</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FFD700]">Soporte</h3>
            <ul className="mt-4 space-y-4">
              <li><Link href="/ayuda" className="text-gray-400 hover:text-[#FFD700] transition-colors">Centro de Ayuda</Link></li>
              <li><Link href="/terminos" className="text-gray-400 hover:text-[#FFD700] transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/privacidad" className="text-gray-400 hover:text-[#FFD700] transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#FFD700]">Contacto</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-gray-400">Ciudad del Este, Paraguay</li>
              <li className="text-gray-400">+595 983 904904</li>
              <li className="text-gray-400">info@companygroupparaguay.com</li>
            </ul>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="https://www.instagram.com/companygroup_py/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Company Group Paraguay. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
