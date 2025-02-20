import React from 'react';
import './restablecerContraseña.css';
import { Link } from 'react-router-dom';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';

const RestablecerContraseña = () => {
  return (
    <div className="restablecer-contraseña">
      <h1>Restablecer tu contraseña</h1>
      <p>Introduce tu direccion de correo electronico y te enviaremos un enlace para que restablezcas la contraseña.</p>
      <div className="form-container">
        <h2>Restablecer tu contraseña</h2>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <div className="footer-text">
            <span>¿No tenes cuenta? </span>
            <Link to="/crear-cuenta" className="link-button">Registrarme</Link>
          </div>
          <button type="button" className="submit-button">Enviar</button>
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
        <p>¿No tenes cuenta? Registrate aca para acceder a todos los servicios.</p>
        <Link to="/crear-cuenta" className="resbutton">Registrarme</Link>
      </div>
    </div>
  );
};

export default RestablecerContraseña;