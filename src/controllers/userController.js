// /controllers/userController.js
const bcrypt = require('bcryptjs');
const { sql, poolPromise } = require('../config/db');

exports.registrarUsuario = async (req, res) => {
  const { nombre, apellido, email, dni, telefono, domicilio, contraseña, rol } = req.body;

  try {
    const pool = await poolPromise;

    // Verificar si el usuario ya existe
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM users WHERE email = @email');

    if (result.recordset.length > 0) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear el nuevo usuario
    await pool.request()
      .input('nombre', sql.VarChar, nombre)
      .input('apellido', sql.VarChar, apellido)
      .input('email', sql.VarChar, email)
      .input('dni', sql.VarChar, dni)
      .input('telefono', sql.VarChar, telefono)
      .input('domicilio', sql.VarChar, domicilio)
      .input('contraseña', sql.VarChar, hashedPassword)
      .input('rol', sql.VarChar, rol)
      .query(`
        INSERT INTO users (nombre, apellido, email, dni, telefono, domicilio, contraseña, rol)
        VALUES (@nombre, @apellido, @email, @dni, @telefono, @domicilio, @contraseña, @rol)
      `);

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};
