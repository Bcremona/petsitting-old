import React, { useState, useEffect } from 'react';//Listo
import { obtenerServicioPorId } from '../../api/obtenerServicioPorId';
import { obtenerComentariosPorServicio } from '../../api/obtenerComentarios';
import { calificarServicio } from '../../api/calificarServicio';

const ServicioDetalle = ({ idServicio }) => {
  const [servicio, setServicio] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [calificacion, setCalificacion] = useState(0);

  const fetchServicio = async () => {
    try {
      const data = await obtenerServicioPorId(idServicio);
      setServicio(data);
    } catch (error) {
      console.error('Error al obtener el servicio:', error);
    }
  };

  const fetchComentarios = async () => {
    try {
      const data = await obtenerComentariosPorServicio(idServicio);
      setComentarios(data);
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  };

  const handleCalificar = async () => {
    try {
      await calificarServicio(idServicio, calificacion);
      fetchServicio(); // Actualiza la calificación del servicio después de calificar
    } catch (error) {
      console.error('Error al calificar el servicio:', error);
    }
  };

  useEffect(() => {
    fetchServicio();
    fetchComentarios();
  }, [idServicio]);

  if (!servicio) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalle del Servicio</h2>
      <p><strong>Nombre:</strong> {servicio.nombre}</p>
      <p><strong>Categoría:</strong> {servicio.categoria}</p>
      <p><strong>Frecuencia:</strong> {servicio.frecuencia}</p>
      <p><strong>Duración:</strong> {servicio.duracion}</p>
      <p><strong>Costo:</strong> {servicio.costo}</p>
      <p><strong>Calificación:</strong> {servicio.calificacion ? `${servicio.calificacion} estrellas` : 'Sin calificación'}</p>
      
      <div>
        <h3>Calificar este Servicio</h3>
        <input 
          type="number" 
          value={calificacion} 
          onChange={(e) => setCalificacion(parseInt(e.target.value))} 
          min="1" 
          max="5"
        />
        <button onClick={handleCalificar}>Enviar Calificación</button>
      </div>

      <h3>Comentarios</h3>
      <ul>
        {comentarios.map(comentario => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServicioDetalle;
