// components/EditarServicioForm.js
//modifica, elimina y despublica el servicio
import React, { useState, useEffect } from 'react';
import { obtenerServicioPorId } from '../../api/obtenerServicioPorId';
import { editarServicio } from '../../api/editarServicio';
import { despublicarServicio } from '../../api/despublicarServicio';
import { eliminarServicio } from '../../api/eliminarServicio';

const EditarServicioForm = ({ idServicio }) => {
  const [servicio, setServicio] = useState({
    nombre: '',
    categoria: '',
    frecuencia: '',
    duracion: '',
    costo: '',
    calificacion: ''
  });

  useEffect(() => {
    const fetchServicio = async () => {
      try {
        const data = await obtenerServicioPorId(idServicio);
        setServicio(data);
      } catch (error) {
        console.error('Error al obtener el servicio:', error);
      }
    };

    fetchServicio();
  }, [idServicio]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServicio({ ...servicio, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarServicio(idServicio, servicio);
      alert('Servicio actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el servicio:', error);
      alert('Error al actualizar el servicio');
    }
  };

  const handleDespublicar = async () => {
    try {
      await despublicarServicio(idServicio);
      alert('Servicio despublicado correctamente');
    } catch (error) {
      console.error('Error al despublicar el servicio:', error);
      alert('Error al despublicar el servicio');
    }
  };

  const handleEliminar = async () => {
    try {
      await eliminarServicio(idServicio);
      alert('Servicio eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
      alert('Error al eliminar el servicio');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Servicio</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={servicio.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Categoría:
        <input
          type="text"
          name="categoria"
          value={servicio.categoria}
          onChange={handleChange}
        />
      </label>
      <label>
        Frecuencia:
        <input
          type="text"
          name="frecuencia"
          value={servicio.frecuencia}
          onChange={handleChange}
        />
      </label>
      <label>
        Duración:
        <input
          type="text"
          name="duracion"
          value={servicio.duracion}
          onChange={handleChange}
        />
      </label>
      <label>
        Costo:
        <input
          type="number"
          name="costo"
          value={servicio.costo}
          onChange={handleChange}
        />
      </label>
      <label>
        Calificación:
        <input
          type="number"
          name="calificacion"
          value={servicio.calificacion}
          onChange={handleChange}
          min="1"
          max="5"
        />
      </label>
      <button type="submit">Actualizar Servicio</button>
      <button type="button" onClick={handleDespublicar}>Despublicar Servicio</button>
      <button type="button" onClick={handleEliminar}>Eliminar Servicio</button>
    </form>
  );
};

export default EditarServicioForm;
