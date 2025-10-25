# Api-rest-actividad-IV# 📚 API REST Actividad IV - Documentación Técnica

## 🚀 Descripción General
API REST moderna desarrollada en **Node.js** con **Express** que proporciona un sistema completo de autenticación y gestión de recursos, una validación robusta y arquitectura escalable.

## 🏗️ Arquitectura del Proyecto
api-rest-actividad-iv/ 

├── 📁 src/ 


│   ├── 📁 controllers/     # Lógica de negocio 


│   ├── 📁 middleware/      # Interceptores de requests 


│   ├── 📁 models/          # Modelos de datos 


│   ├── 📁 routes/          # Definición de endpoints 


│   ├── 📁 config/          # Configuraciones 


│   └── app.js             # Punto de entrada


├── 📁 tests/              # Suite de pruebas 


├── 📄 .env               # Variables de entorno


└── 📄 package.json       # Dependencias y scripts

## ⚙️ Configuración Rápida

### 1. Instalación de Dependencias
```bash```
npm install

## 2. Configuración de Variables de Entorno
Crear archivo .env:

PORT=3000
NODE_ENV=development
JWT_SECRET=mi_clave_secreta_super_segura
JWT_EXPIRES_IN=24h
DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=api_database

# Desarrollo
npm run dev

# Producción
npm start

# Tests
npm test

🔐 Sistema de Autenticación
1. Registro de Usuario
http
POST /api/auth/register
Content-Type: application/json

{
  "username": "nuevo_usuario",
  "email": "usuario@correo.com", 
  "password": "contraseñaSegura123"
}
Respuesta Exitosa:

json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "data": {
    "id": 1,
    "username": "nuevo_usuario",
    "email": "usuario@correo.com"
  }
}
2. Inicio de Sesión
http
POST /api/auth/login
Content-Type: application/json

{
  "email": "usuario@correo.com",
  "password": "contraseñaSegura123"
}
Respuesta Exitosa:

json
{
  "success": true,
  "message": "Login exitoso",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "nuevo_usuario",
      "email": "usuario@correo.com"
    }
  }
}
📡 Endpoints de Recursos
1. Obtener Todos los Recursos
http
GET /api/resources
Authorization: Bearer <jwt_token>
2. Crear Nuevo Recurso
http
POST /api/resources
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Mi Recurso",
  "description": "Descripción del recurso"
}
3. Actualizar Recurso
http
PUT /api/resources/123
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Recurso Actualizado",
  "description": "Nueva descripción"
}
4. Eliminar Recurso
http
DELETE /api/resources/123
Authorization: Bearer <jwt_token>
🧪 Testing
bash
# Ejecutar tests
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo desarrollo
npm run test:watch
📊 Monitorización
Health Check Endpoint
http
GET /api/health
Respuesta:

json
{
  "status": "OK",
  "timestamp": "2023-10-01T12:00:00.000Z",
  "uptime": "2 hours",
  "memoryUsage": "45.2 MB"
}
🚀 Despliegue en Producción
Configuración Optimizada
env
NODE_ENV=production
PORT=8080
JWT_SECRET=clave_super_secreta_produccion
ALLOWED_ORIGINS=https://tudominio.com
Comandos de Producción
bash
# Iniciar en producción
npm start
