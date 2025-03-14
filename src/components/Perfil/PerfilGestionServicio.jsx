import React from 'react';
import './perfilGestionServicios.css';
import { Link, useLocation } from 'react-router-dom';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import userImage from '../../assets/images/fotoperro11.jpg';
import ListaContratacionesPrestador from '../ListaContratacionesPrestador/ListaContratacionesPrestador';


const PerfilGestionServicio = ({ prestadorId }) => {

  const location = useLocation(); // Get the location object
  const contratacionData = location.state; // Access the 'state' data

  const idPrestador = contratacionData.prestadorId;
  console.log(idPrestador)

    return (
    <div className="perfil">
      <div className="left-section">
        <div className="user-info">
          <img src={userImage} alt="Laura Rodriguez" className="user-image" />
          <h2>Laura Rodriguez</h2>
          <p>¡Hola! Soy Laura y tengo una pasión especial por los gatos. Conmigo, tus gatos recibirán cuatro horas de atención amorosa y compañía en la comodidad de su hogar. ¡Confía en mí para brindarles el mejor cuidado!</p>
        </div>
        <div className="user-data">
          <h3>Datos</h3>
          <form>
            <input type="text" name="nombre" placeholder="Nombre" />
            <input type="text" name="apellido" placeholder="Apellido" />
            <input type="text" name="numero-telefonico" placeholder="Número Telefónico" />
            <input type="text" name="dni" placeholder="DNI" />
            <input type="email" name="email" placeholder="Email" />
            <select name="zona" defaultValue="" className="placeholder-dark">
              <option value="" disabled hidden>Zona</option>
              <option value="recoleta">Recoleta</option>
              <option value="san-telmo">San Telmo</option>
              <option value="belgrano">Belgrano</option>
              <option value="la-boca">La Boca</option>
              <option value="palermo">Palermo</option>
            </select>
            <input type="text" name="domicilio" placeholder="Domicilio" />
            <input type="password" name="contraseña" placeholder="Contraseña" />
            <input type="password" name="cambiar-contraseña" placeholder="Cambiar Contraseña" />
            <input type="text" name="mascotas" placeholder="Mascotas" />
            <button type="button">Guardar Cambios</button>
          </form>
        </div>
        <div className="info-section">
          <div className="info-item">
            <img src={imagenTerminosCondiciones} alt="Términos y Condiciones" />
            <h3>Términos y Condiciones</h3>
            <p>¡Recuerda leer los términos y condiciones aquí! Es importante que estés al tanto de nuestras políticas para garantizar una experiencia segura y satisfactoria en nuestra plataforma.</p>
            <button type="button">Ver Más</button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h1>Servicios Publicados</h1>
        <h2>Aquí podrás ver y gestionar tus servicios</h2>
          <ListaContratacionesPrestador idPrestador={idPrestador} />
        </div>

        <div className="cta-buttons">
          <Link to="/perfil-opiniones" className="cta-button">Ver Opiniones</Link>
          <Link to="/perfil" className="cta-button">Ver Servicios Publicados</Link>
        </div>
      </div>
  );
};

export default PerfilGestionServicio;