// /routes/comentariosRoutes.js
const express = require('express');
const router = express.Router();
const { crearComentario,obtenerComentariosPorServicio } = require('../controllers/comentariosController');

// Ruta para crear un comentario
router.post('/servicios/:idServicio/comentarios', crearComentario);
router.get('/comentarios/servicio/:idServicio', obtenerComentariosPorServicio);

module.exports = router;