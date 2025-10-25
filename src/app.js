// src/app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./database/connection');

// ====== MODELOS ======
const Product = require('./models/Product');
const User = require('./models/User');
const Class = require('./models/Class');
const Agenda = require('./models/Agenda');
const Billing = require('./models/Billing');

// ====== RUTAS ======
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const classRoutes = require('./routes/classRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const billingRoutes = require('./routes/billingRoutes');

// ====== CONFIGURACIÓN DE EXPRESS ======
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ====== ENDPOINT PRINCIPAL ======
app.get('/', (req, res) => {
  res.send('✅ API funcionando correctamente con las 5 entidades');
});

// ====== RUTAS DE LA API ======
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/agendas', agendaRoutes);
app.use('/api/billings', billingRoutes);

// ====== INICIO DEL SERVIDOR ======
async function startServer() {
  try {
    // Sincroniza la base de datos (crea las tablas si no existen)
    await sequelize.sync({ force: false });
    console.log('💾 Base de datos sincronizada correctamente.');

    // Inicia el servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
}

startServer();
