//const sql = require('mssql');
const { config } = require('../config/db'); // Asegúrate de importar config correctamente
const { sql, poolPromise } = require('../config/db');

const crearContratacion = async (req, res) => {
  const { idServicio, idPrestador, telefono, email, horario, mensaje, metodoPago } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('idServicio', sql.Int, idServicio)
      .input('idPrestador', sql.Int, idPrestador)
      .input('telefono', sql.VarChar, telefono)
      .input('email', sql.VarChar, email)
      .input('horario', sql.VarChar, horario)
      .input('mensaje', sql.Text, mensaje)
      .input('metodoPago', sql.VarChar, metodoPago)
      .query(`
        INSERT INTO contrataciones (idServicio, idPrestador, telefono, email, horario, mensaje, metodoPago)
        VALUES (@idServicio, @idPrestador, @telefono, @email, @horario, @mensaje, @metodoPago);
        SELECT SCOPE_IDENTITY() AS id;
      `);

    const contratacionId = result.recordset[0].id;

    res.status(201).json({ id: contratacionId, message: 'Contratación creada con éxito' });
  } catch (error) {
    console.error('Error al crear la contratación:', error.message);
    res.status(500).json({ error: 'Error al crear la contratación' });
  }
};
const obtenerContratacionesPorPrestador = async (req, res) => {
  const { prestadorId } = req.query;

  try {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('prestadorId', sql.Int, prestadorId)
      .query('SELECT * FROM contrataciones WHERE idPrestador = @prestadorId');

    res.status(200).json(result.recordset);
  } catch (error) {
    console.error('Error al obtener contrataciones por prestador:', error.message);
    res.status(500).json({ error: 'Error al obtener contrataciones por prestador' });
  }
};

const actualizarEstadoContratacion = async (req, res) => {
  const { contratacionId } = req.params;
  const { nuevoEstado } = req.body;

  try {
    const pool = await sql.connect(config);
    await pool.request()
      .input('contratacionId', sql.Int, contratacionId)
      .input('nuevoEstado', sql.VarChar, nuevoEstado)
      .query('UPDATE contrataciones SET estado = @nuevoEstado WHERE id = @contratacionId');

    res.status(200).json({ message: 'Estado de la contratación actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado de la contratación:', error.message);
    res.status(500).json({ error: 'Error al actualizar el estado de la contratación' });
  }
};

module.exports = {
  obtenerContratacionesPorPrestador,
  actualizarEstadoContratacion,
  crearContratacion
};