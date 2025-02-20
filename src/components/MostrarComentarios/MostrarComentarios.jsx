import React, { useState, useEffect } from 'react';//Listo
import { useLocation } from 'react-router-dom';
import { obtenerComentariosPorServicio } from '../../api/obtenerComentarios';

const MostrarComentarios = ({ idServicio }) => {

  const location = useLocation(); // Get the location object
  const contratacionData = location.state; // Access the 'state' data

  const serviceId = contratacionData.idServicio;
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetchComentarios();
  }, []);

  const fetchComentarios = async () => {
    try {
      const data = await obtenerComentariosPorServicio(serviceId);
      setComentarios(data);
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  };

  return (
    <div>
      <ul>
        {comentarios.map(comentario => (
          <li key={comentario.id}>{comentario.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarComentarios;
