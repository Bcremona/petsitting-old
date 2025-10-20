const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { sql, poolPromise } = require('./config/db'); // Importa la configuración de la base de datos

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas de API
const authRoutes = require('./routes/authRoutes');
const comentariosRoutes = require('./routes/comentariosRoutes');
const contratacionesRoutes = require('./routes/contratacionesRoutes');
const serviciosRoutes = require('./routes/serviciosRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api', authRoutes);
app.use('/api', comentariosRoutes);
app.use('/api', contratacionesRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', userRoutes);

// Servir archivos estáticos del build de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  
  // Todas las rutas que NO sean /api/* devuelven el index.html de React
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});