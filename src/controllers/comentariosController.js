const { sql, poolPromise } = require('../config/db'); // Asegúrate de importar correctamente

const crearComentario = async (req, res) => {
  const { idServicio } = req.params;
  const { texto, userId } = req.body; // Asumimos que se envía el ID del usuario en el cuerpo de la solicitud

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .input('texto', sql.VarChar, texto)
      .input('userId', sql.Int, userId) // Asegúrate de que userId esté incluido en el cuerpo de la solicitud
      .query(`INSERT INTO comentarios (idServicio, texto, userId)
              VALUES (@idServicio, @texto, @userId);
              SELECT SCOPE_IDENTITY() AS id;`);

    const newComentarioId = result.recordset[0].id;

    res.status(201).json({ id: newComentarioId, message: 'Comentario creado con éxito' });
  } catch (error) {
    console.error('Error al crear el comentario:', error.message);
    res.status(500).json({ error: 'Error al crear el comentario' });
  }
};
// Obtener comentarios por servicio
const obtenerComentariosPorServicio = async (req, res) => {
  const { idServicio } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('SELECT * FROM comentarios WHERE idServicio = @idServicio');

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al obtener comentarios por servicio:', error.message);
    res.status(500).json({ error: 'Error al obtener comentarios por servicio' });
  }
};


module.exports = {
  crearComentario,
  obtenerComentariosPorServicio
};
