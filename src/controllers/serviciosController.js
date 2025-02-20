const sql = require('mssql');
const { config, poolPromise } = require('../config/db');

// Publicar servicio
const publicarServicio = async (req, res) => {
  const { nombre, categoria, frecuencia, duracion, costo, userId } = req.body;

  try {
    const pool = await poolPromise;
    console.log('Conectado a la base de datos MSSQL');

    const result = await pool.request()
      .input('nombre', sql.VarChar, nombre)
      .input('categoria', sql.VarChar, categoria)
      .input('frecuencia', sql.VarChar, frecuencia)
      .input('duracion', sql.VarChar, duracion)
      .input('costo', sql.Float, costo)
      .input('userId', sql.Int, userId)
      .query(`
        INSERT INTO servicios (nombre, categoria, frecuencia, duracion, costo, prestadorId)
        VALUES (@nombre, @categoria, @frecuencia, @duracion, @costo, @userId)
      `);

    console.log('Consulta SQL ejecutada correctamente:', result);
    res.status(201).json({ message: 'Servicio publicado con éxito' });
  } catch (error) {
    console.error('Error al publicar el servicio:', error);
    res.status(500).json({ message: 'Error al publicar el servicio' });
  }
};

// Obtener servicio por ID
const obtenerServicioPorId = async (req, res) => {
  const { idServicio } = req.params;

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('SELECT * FROM servicios WHERE id = @idServicio');

    if (result.recordset.length === 0) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error('Error al obtener el servicio:', error.message);
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
};

// Obtener comentarios por servicio
const obtenerComentariosPorServicio = async (req, res) => {
  const { idServicio } = req.params;

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('SELECT * FROM comentarios WHERE idServicio = @idServicio');

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al obtener comentarios por servicio:', error.message);
    res.status(500).json({ error: 'Error al obtener comentarios por servicio' });
  }
};

// Calificar servicio
const calificarServicio = async (req, res) => {
  const { idServicio } = req.params;
  const { calificacion } = req.body;

  try {
    const pool = await poolPromise;
    await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .input('calificacion', sql.Float, calificacion)
      .query('UPDATE servicios SET calificacion = @calificacion WHERE id = @idServicio');

    res.status(200).json({ message: 'Calificación del servicio actualizada correctamente' });
  } catch (error) {
    console.error('Error al calificar el servicio:', error.message);
    res.status(500).json({ error: 'Error al calificar el servicio' });
  }
};
// Función para buscar servicios por categoría o nombre
const buscarServicios = async (req, res) => {
  const { query } = req.query;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('query', sql.VarChar, `%${query}%`)
      .query(`
        SELECT * FROM servicios 
        WHERE categoria LIKE @query 
        OR nombre LIKE @query
      `);

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al buscar servicios:', error.message);
    res.status(500).json({ error: 'Error al buscar servicios' });
  }
};
// Función para editar un servicio
const editarServicio = async (req, res) => {
  const { idServicio } = req.params;
  const { nombre, categoria, frecuencia, duracion, costo, calificacion } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .input('nombre', sql.VarChar, nombre)
      .input('categoria', sql.VarChar, categoria)
      .input('frecuencia', sql.VarChar, frecuencia)
      .input('duracion', sql.VarChar, duracion)
      .input('costo', sql.Float, costo)
      .input('calificacion', sql.Int, calificacion)
      .query(`
        UPDATE servicios
        SET nombre = @nombre,
            categoria = @categoria,
            frecuencia = @frecuencia,
            duracion = @duracion,
            costo = @costo,
            calificacion = @calificacion
        WHERE id = @idServicio
      `);

    res.status(200).json({ message: 'Servicio actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el servicio:', error);
    res.status(500).json({ message: 'Error al actualizar el servicio' });
  }
};//
// Función para despublicar un servicio
const despublicarServicio = async (req, res) => {
  const { idServicio } = req.params;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('UPDATE servicios SET estado = \'despublicado\' WHERE id = @idServicio');

    res.status(200).json({ message: 'Servicio despublicado correctamente' });
  } catch (error) {
    console.error('Error al despublicar el servicio:', error);
    res.status(500).json({ message: 'Error al despublicar el servicio' });
  }
};

const eliminarServicio = async (req, res) => {
  const { idServicio } = req.params;

  try {
    const pool = await poolPromise;

    // Eliminar comentarios relacionados primero
    await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('DELETE FROM comentarios WHERE idServicio = @idServicio');

    // Luego eliminar el servicio
    await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .query('DELETE FROM servicios WHERE id = @idServicio');

    res.status(200).json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    res.status(500).json({ message: 'Error al eliminar el servicio' });
  }
};
const obtenerTodosLosServicios = async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM servicios');
    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al obtener los servicios:', error.message);
    res.status(500).json({ error: 'Error al obtener los servicios' });
  }
};

module.exports = {
  publicarServicio,
  obtenerServicioPorId,
  obtenerComentariosPorServicio,
  calificarServicio,
  buscarServicios,
  editarServicio,
  despublicarServicio,
  eliminarServicio,
  obtenerTodosLosServicios
};
