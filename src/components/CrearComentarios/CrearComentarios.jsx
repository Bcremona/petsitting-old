import React, { useState, useEffect } from 'react';//listo
import { crearComentario } from '../../api/crearComentario';

const CrearComentario = ({ idServicio, rolUsuario }) => {
  const [comentario, setComentario] = useState('');

  const handleChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoComentario = {
        texto: comentario,
        // Puedes agregar otros campos si es necesario, como el ID del usuario, etc.
      };
      const data = await crearComentario(idServicio, nuevoComentario);
      console.log('Comentario creado:', data);
      setComentario('');

    } catch (error) {
      console.error('Error al crear el comentario:', error);
    }
  };

  useEffect(() => {
    // Aquí podrías realizar alguna lógica para redirigir o mostrar un mensaje si el usuario no tiene el rol adecuado
    if (rolUsuario && rolUsuario !== 'consumidor') {
      // Por ejemplo, podrías redirigir a otra página o mostrar un mensaje de acceso denegado
      console.log('Acceso denegado: No tienes el rol de consumidor');
    }
  }, []);

  if (!rolUsuario || rolUsuario !== 'consumidor') {
    // Si no se cumple la condición de tener el rol de consumidor, no mostramos el formulario
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Comentario:</label>
        <textarea name="comentario" value={comentario} onChange={handleChange} required />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CrearComentario;
