-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    rol VARCHAR(20) DEFAULT 'user' CHECK (rol IN ('user', 'admin')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_rol ON users(rol);

-- Autos Table
CREATE TABLE autos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    anio INTEGER NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    precio_dia DECIMAL(10,2) NOT NULL,
    disponible BOOLEAN DEFAULT true,
    ubicacion VARCHAR(100) NOT NULL,
    especificaciones JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for autos
CREATE INDEX idx_autos_categoria ON autos(categoria);
CREATE INDEX idx_autos_disponible ON autos(disponible);
CREATE INDEX idx_autos_ubicacion ON autos(ubicacion);

-- Reservas Table
CREATE TABLE reservas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    usuario_id UUID REFERENCES users(id),
    auto_id UUID REFERENCES autos(id),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    precio_total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(20) DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'confirmada', 'cancelada', 'completada')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for reservas
CREATE INDEX idx_reservas_usuario ON reservas(usuario_id);
CREATE INDEX idx_reservas_auto ON reservas(auto_id);
CREATE INDEX idx_reservas_estado ON reservas(estado);
CREATE INDEX idx_reservas_fechas ON reservas(fecha_inicio, fecha_fin);

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE autos ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservas ENABLE ROW LEVEL SECURITY;

-- Basic policies
-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);

-- Everyone can view available cars
CREATE POLICY "Anyone can view available cars" ON autos FOR SELECT USING (disponible = true);

-- Users can manage their own reservations
CREATE POLICY "Users can manage own reservations" ON reservas FOR ALL USING (auth.uid() = usuario_id);

-- Permissions for anonymous and authenticated users
GRANT SELECT ON autos TO anon, authenticated;
GRANT ALL PRIVILEGES ON reservas TO authenticated;
GRANT SELECT ON users TO authenticated;
