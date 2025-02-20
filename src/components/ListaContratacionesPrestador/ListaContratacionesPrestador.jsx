import React, { useState, useEffect } from 'react';//listo
import { obtenerContratacionesPorPrestador } from '../../api/obtenerContratacionesPorPrestador';
import { actualizarEstadoContratacion } from '../../api/actualizarEstadoContratacion';
// este es la lista que puede cambiar el estado del serv contratado
const ListaContratacionesPrestador = ({ idPrestador }) => {
  const [contrataciones, setContrataciones] = useState([]);

  useEffect(() => {

    console.log(idPrestador)
    const fetchContrataciones = async () => {
      try {
        const data = await obtenerContratacionesPorPrestador(idPrestador);
        setContrataciones(data);
      } catch (error) {
        console.error('Error al obtener las contrataciones del prestador:', error);
      }
    };

    fetchContrataciones();
  }, [idPrestador]);

  const handleChangeEstado = async (contratacionId, nuevoEstado) => {
    try {
      const data = await actualizarEstadoContratacion(contratacionId, nuevoEstado);
      console.log('Estado actualizado:', data);

      // Actualizar localmente la lista de contrataciones con el nuevo estado
      const updatedContrataciones = contrataciones.map((contratacion) => {
        if (contratacion.id === contratacionId) {
          return { ...contratacion, estado: nuevoEstado };
        }
        return contratacion;
      });
      setContrataciones(updatedContrataciones);
    } catch (error) {
      console.error('Error al actualizar el estado de la contratación:', error);
    }
  };

  if (contrataciones.length === 0) {
    return <p>No hay contrataciones realizadas a este prestador.</p>;
  }

  return (

    <div>
      <h2>Contrataciones Realizadas</h2>
      <ul>
        {contrataciones.map((contratacion) => (
          <li key={contratacion.id}>
            <div className="service-card">
              <div className="service-details">
              <div className="service-info">
                  <p className="service-description">Servicio ID: {contratacion.idServicio}</p>
                  <div className="service-meta-container">
                  <p className="service-meta"><strong>Teléfono:</strong> {contratacion.telefono}</p>
                  <p className="service-meta"><strong>Email:</strong> {contratacion.email}</p>
                  <p className="service-meta"><strong>Horario:</strong> {contratacion.horario}</p>
                  <p className="service-meta"><strong>Mensaje:</strong> {contratacion.mensaje}</p>
                  <p className="service-meta"><strong>Mensaje:</strong> {contratacion.metodoPago}</p>
                  <p className="service-meta"><strong>Estado:</strong> {contratacion.estado || 'Pendiente'}</p>
                  </div>
              </div>
              </div>
                <div className="card-footer">
                  <div className='card-buttons'>
                        <button onClick={() => handleChangeEstado(contratacion.id, 'aceptado')}>Aceptar</button>
                        <button onClick={() => handleChangeEstado(contratacion.id, 'cancelado')}>Cancelar</button>
                        <button onClick={() => handleChangeEstado(contratacion.id, 'finalizado')}>Finalizar</button>
                  </div>
                </div>
              </div>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default ListaContratacionesPrestador;
