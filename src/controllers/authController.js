const { sql, poolPromise } = require('../config/db');
const bcrypt = require('bcryptjs');

const iniciarSesion = async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const pool = await poolPromise;
    const result = await pool.request()
      .input('email', sql.VarChar, email)
      .query('SELECT * FROM users WHERE email = @email');

    if (result.recordset.length === 0) {
      throw new Error('Credenciales incorrectas');
    }

    const user = result.recordset[0];
    const contraseñaValida = await bcrypt.compare(contraseña, user.contraseña);

    if (!contraseñaValida) {
      throw new Error('Credenciales incorrectas');
    }

    // Devuelve el rol y el ID del usuario
    res.status(200).json({ id: user.id, rol: user.rol });

  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
};

module.exports = {
  iniciarSesion
};
