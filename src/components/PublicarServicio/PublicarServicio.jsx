import React, { useState } from 'react';//listo
import { publicarServicio } from '../../api/publicarServicio';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';
import './publicarServicio.css';

const PublicarServicio = ({ userId, userRole }) => {
  const [form, setForm] = useState({
    nombre: '',
    categoria: '',
    frecuencia: '',
    duracion: '',
    costo: '',
  });

  console.log(userId);
  console.log(userRole);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const servicio = {
        nombre: form.nombre,
        categoria: form.categoria,
        frecuencia: form.frecuencia,
        duracion: form.duracion,
        costo: form.costo,
      };

      console.log(servicio);

      const data = await publicarServicio(servicio, userId);
      console.log('Servicio publicado:', data);
    } catch (error) {
      console.error('Error al publicar el servicio:', error);
    }
  };


  return (
    <div className="publicar-servicio-container">
      <h1>Publicar Servicios</h1>
      <p>Rellena este formulario para que aparezca en la lista de servicios</p>
      <div className="form-container">
        <h2>Publicar Servicios</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
          <select name="categoria" value={form.categoria} onChange={handleChange} required >
            <option value="" disabled selected>Categorias</option>
            <option value="adiestramiento">Adiestramiento</option>
            <option value="cuidado-domestico">Cuidado Domestico</option>
            <option value="paseos">Paseos</option>
          </select>
          <select name="frecuencia" value={form.frecuencia} onChange={handleChange} required>
            <option value="" disabled selected>Frecuencia</option>
            <option value="unica">Unica</option>
            <option value="diaria">Diaria</option>
            <option value="semanal">Semanal</option>
            <option value="mensual">Mensual</option>
          </select>
          <select name="duracion" value={form.duracion} onChange={handleChange} required>
            <option value="" disabled selected>Duracion</option>
            <option value="menos-una-hora">Menos de una hora</option>
            <option value="una-hora">Una hora</option>
            <option value="mas-una-hora">Mas de una hora</option>
            <option value="mas-dos-horas">Mas de dos horas</option>
            <option value="mas-tres-horas">Mas de tres horas</option>
            <option value="mas-cuatro-horas">Mas de cuatro horas</option>
            <option value="mas-cinco-horas">Mas de cinco horas</option>
            <option value="mas-seis-horas">Mas de seis horas</option>
            <option value="mas-siete-horas">Mas de siete horas</option>
            <option value="mas-ocho-horas">Mas de ocho horas</option>
          </select>
          <input type="text" name="costo" placeholder="Costo" value={form.costo} onChange={handleChange} required />
          <button type="submit">Publicar</button>
        </form>
      </div>
      <div className="info-section">
        <div className="info-item">
          <img src={imagenTerminosCondiciones} alt="Términos y Condiciones" />
          <h3>Términos y Condiciones</h3>
          <p>¡Recuerda leer los términos y condiciones aquí! Es importante que estés al tanto de nuestras políticas para garantizar una experiencia segura y satisfactoria en nuestra plataforma.</p>
          <button type="button">Ver Más</button>
        </div>
        <div className="info-item">
          <img src={imagenInformacionImportante} alt="Información Importante" />
          <h3>Información Importante</h3>
          <p>¡No olvides que puedes modificar tus publicaciones y servicios en cualquier momento! Mantén tu perfil actualizado y adaptado a tus necesidades y disponibilidad.</p>
          <button type="button">Ver Más</button>
        </div>
      </div>
      <div className="cta-section">
        <p>¿No te decidiste? Mira todos los servicios acá.</p>
        <button type="button">Ver Servicios</button>
      </div>
    </div>
  );
};

export default PublicarServicio;
