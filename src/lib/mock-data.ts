import { Car } from '@/types';

export const mockCars: Car[] = [
  {
    id: '1',
    marca: 'Kia',
    modelo: 'Sportage',
    anio: 2020,
    categoria: 'SUV',
    precio_dia: 550000,
    disponible: true,
    ubicacion: 'Ciudad del Este',
    imagen_principal: '/sportage.jpg',
    especificaciones: {
      motor: '2.0L',
      transmision: 'Automática',
      combustible: 'Nafta/Flex',
      asientos: 5,
      maletero: '3 Maletas Grandes',
      consumo: '9.5L/100km'
    },
    equipamiento: ['Aire Acondicionado', 'Bluetooth', 'Cámara de retroceso', 'Airbags', 'Pantalla Touch']
  },
  {
    id: '2',
    marca: 'Kia',
    modelo: 'Rio',
    anio: 2020,
    categoria: 'Sedan',
    precio_dia: 440000,
    disponible: true,
    ubicacion: 'Ciudad del Este',
    imagen_principal: '/rio.jpg',
    especificaciones: {
      motor: '1.4L',
      transmision: 'Automática',
      combustible: 'Nafta/Flex',
      asientos: 5,
      maletero: '2 Maletas Medianas',
      consumo: '7.5L/100km'
    },
    equipamiento: ['Aire Acondicionado', 'Bluetooth', 'USB', 'Airbags', 'Mandos al volante']
  },
  {
    id: '3',
    marca: 'Kia',
    modelo: 'Picanto',
    anio: 2020,
    categoria: 'Compacto',
    precio_dia: 300000,
    disponible: true,
    ubicacion: 'Ciudad del Este',
    imagen_principal: '/picanto.jpg',
    especificaciones: {
      motor: '1.0L',
      transmision: 'Automática',
      combustible: 'Nafta/Flex',
      asientos: 4,
      maletero: '1 Maleta Pequeña',
      consumo: '6.0L/100km'
    },
    equipamiento: ['Aire Acondicionado', 'Bluetooth', 'Airbags', 'Pantalla Multimedia']
  }
];
