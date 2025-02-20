import React, { useState, useEffect } from 'react';//listo
import { obtenerTodosLosServicios } from '../../api/obtenerTodosLosServicios';
import './ServicioLista.css'
import ServicioCard from '../ServicioCard/ServicioCard';

const ServicioLista = ({ rol }) => {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServicios();
  }, []);

  const fetchServicios = async () => {
    try {
      const data = await obtenerTodosLosServicios();
      setServicios(data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener los servicios:', error);
    }
  };

  if (loading) {
    return <div>Cargando servicios...</div>;
  }

  return (
    <div className="servicios-section">
      <h1>Servicios Publicados</h1>
      <h2>Aquí podrás ver y gestionar tus servicios</h2>
      <ul>
        {servicios.map(servicio => {
          return(
            <li key={servicio.id}>
              <ServicioCard 
              id={servicio.id}
              rol={rol}
              nombre={servicio.nombre}
              duracion={servicio.duracion}
              costo={servicio.costo}
              frecuencia={servicio.frecuencia}
              calificacion={servicio.calificacion}
              idPrestador={servicio.prestadorId}
              />
            </li> 
          );
        })}
      </ul>
    </div>
  );
};

export default ServicioLista;
