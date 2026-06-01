export type CarCategory = 'Sedan' | 'SUV' | 'Compacto' | 'Camioneta' | 'Lujo';

export interface Car {
  id: string;
  marca: string;
  modelo: string;
  anio: number;
  categoria: CarCategory;
  precio_dia: number;
  disponible: boolean;
  ubicacion: string;
  imagen_principal: string;
  especificaciones: {
    motor: string;
    transmision: 'Automática' | 'Manual';
    combustible: 'Nafta' | 'Diesel' | 'Híbrido' | 'Eléctrico' | 'Nafta/Flex';
    asientos: number;
    maletero: string; // e.g. "2 Maletas"
    consumo?: string;
  };
  imagenes?: string[];
  equipamiento?: string[];
}

export interface User {
  id: string;
  email: string;
  nombre: string;
  telefono?: string;
  rol: 'user' | 'admin';
}

export interface Reservation {
  id: string;
  usuario_id: string;
  auto_id: string;
  fecha_inicio: string; // ISO Date
  fecha_fin: string; // ISO Date
  precio_total: number;
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'completada';
  created_at: string;
}
