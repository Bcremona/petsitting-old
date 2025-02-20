// routes/contratacionesRoutes.js
const express = require('express');
const router = express.Router();
const { obtenerContratacionesPorPrestador, actualizarEstadoContratacion,crearContratacion } = require('../controllers/contratacionesController');

// Ruta para obtener contrataciones por id de prestador
router.get('/contrataciones', obtenerContratacionesPorPrestador);

// Ruta para actualizar estado de contratación
router.put('/contrataciones/:contratacionId', actualizarEstadoContratacion);
// Ruta para crear una contratación
router.post('/crearContratacion', crearContratacion);






module.exports = router;
