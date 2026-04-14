import { Button } from '@/components/ui/button'

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Mi Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 bg-white rounded-lg shadow p-6 border border-gray-100">
           <div className="flex items-center space-x-4 mb-6">
             <div className="h-16 w-16 bg-[#FFD700] rounded-full flex items-center justify-center text-black font-bold text-2xl">
               JP
             </div>
             <div>
               <h2 className="font-bold text-lg">Juan Pérez</h2>
               <p className="text-gray-500 text-sm">juan@ejemplo.com</p>
             </div>
           </div>
           <nav className="space-y-2">
             <Button variant="ghost" className="w-full justify-start text-black bg-[#FFD700]/20 font-medium">Mis Reservas</Button>
             <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-black">Datos Personales</Button>
             <Button variant="ghost" className="w-full justify-start text-gray-600 hover:text-black">Seguridad</Button>
             <div className="pt-4 mt-4 border-t">
               <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">Cerrar Sesión</Button>
             </div>
           </nav>
        </div>
        
        <div className="col-span-1 md:col-span-2 bg-white rounded-lg shadow p-6 border border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Mis Reservas Recientes</h2>
          <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">No tienes reservas activas en este momento.</p>
            <Button className="bg-black hover:bg-gray-800 text-[#FFD700]">Buscar un Auto</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
