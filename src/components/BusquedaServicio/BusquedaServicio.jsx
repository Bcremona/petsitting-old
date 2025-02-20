import React, { useState } from 'react';
import ServicioCard from '../ServicioCard/ServicioCard';
import { Link } from 'react-router-dom';
import { buscarServicios } from '../../api/buscarServicios';
import './buscarServicio.css';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';


const BusquedaServicios = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await buscarServicios(query);
      setResultados(data);
    } catch (error) {
      console.error('Error al buscar servicios:', error);
    }
  };

  return (    
    <div className="buscar-servicio-container">
    <h1>Busqueda de Servicios</h1>
    <p>Rellena este formulario y busca el servicio que necesites.</p>
    <div className="form-container">
      <h2>Busqueda de Servicios</h2>
      <form onSubmit={handleSearch}>
        <select name="categoria" value={query} onChange={(e) => setQuery(e.target.value)} >
          <option value="" disabled selected>Categoria</option>
          <option value="adiestramiento">Adiestramiento</option>
          <option value="cuidado-domestico">Cuidado Domestico</option>
          <option value="paseos">Paseos</option>
          <option value="Categoria de limpieza">limpieza</option>
          
        </select>
        <select name="tipo-mascota" >
          <option value="" disabled selected>Tipo de Mascota</option>
          <option value="perros">Perros</option>
          <option value="gatos">Gatos</option>
          <option value="peces">Peces</option>
          <option value="tortugas">Tortugas</option>
          <option value="otros">Otros</option>
        </select>
        <select name="frecuencia">
          <option value="" disabled selected>Frecuencia</option>
          <option value="unica">Unica</option>
          <option value="diaria">Diaria</option>
          <option value="semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </select>
        <select name="duracion">
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
        <select name="zona">
          <option value="" disabled selected>Zona</option>
          <option value="recoleta">Recoleta</option>
          <option value="san-telmo">San Telmo</option>
          <option value="belgrano">Belgrano</option>
          <option value="la-boca">La Boca</option>
          <option value="palermo">Palermo</option>
        </select>
        <button type="submit">Buscar</button>
      </form>
    </div>
    <div className="info-section">
      <div className="info-item">
        <img src={imagenTerminosCondiciones} alt="Términos y Condiciones" />
        <h3>Términos y Condiciones</h3>
        <p>¡Recuerda leer los términos y condiciones aquí! Es importante que estés al tanto de nuestras políticas para garantizar una experiencia segura y satisfactoria en nuestra plataforma.</p>
        <Link to="/terminosyservicios" className="signup-button">Ver Más</Link>
      </div>
      <div className="info-item">
        <img src={imagenInformacionImportante} alt="Información Importante" />
        <h3>Información Importante</h3>
        <p>¡No olvides que puedes modificar tus publicaciones y servicios en cualquier momento! Mantén tu perfil actualizado y adaptado a tus necesidades y disponibilidad.</p>
        <Link to="/terminosyservicios" className="signup-button">Ver Más</Link>
      </div>
    </div>
    <div className="cta-section">
      <p>¿No te decidiste? Mira todos los servicios acá.</p>
      <button type="button">Ver Servicios</button>
    </div>
      <ul>
        {resultados.map(servicio => {
          return(
            <li key={servicio.id}>
              <ServicioCard 
              id={servicio.id}
              nombre={servicio.nombre}
              duracion={servicio.duracion}
              costo={servicio.costo}
              frecuencia={servicio.frecuencia}
              calificacion={servicio.calificacion}
              />
            </li> 
          );
        })}
      </ul>
    </div>
  );
};

export default BusquedaServicios;
