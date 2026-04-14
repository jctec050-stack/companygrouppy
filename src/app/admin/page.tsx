import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Panel de Administración</h1>
      <div className="bg-white rounded-lg shadow p-6 border border-gray-100">
        <p className="text-gray-600 mb-6">Área restringida para administradores. Aquí podrás gestionar la flota de vehículos y las reservas.</p>
        <div className="flex space-x-4">
            <Button className="bg-black hover:bg-gray-800 text-[#FFD700]">Gestionar Flota</Button>
            <Button variant="outline">Ver Reservas</Button>
        </div>
      </div>
    </div>
  )
}
