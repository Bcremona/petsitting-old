const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sql, poolPromise } = require('./config/db'); // Importa la configuración de la base de datos

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
const authRoutes = require('./routes/authRoutes');//
const comentariosRoutes = require('./routes/comentariosRoutes');
const contratacionesRoutes = require('./routes/contratacionesRoutes');//
const serviciosRoutes = require('./routes/serviciosRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api', authRoutes);
app.use('/api', comentariosRoutes);
app.use('/api', contratacionesRoutes); // Usa la nueva ruta
app.use('/api', serviciosRoutes);
app.use('/api', userRoutes);


// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
