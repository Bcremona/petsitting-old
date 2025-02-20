/*
import React, { useState } from 'react';
import { iniciarSesion } from '../../api/iniciarSesion';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './iniciarSesion.css';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';


const LoginForm = ({ onLogin }) => {
  const [credenciales, setCredenciales] = useState({
    email: '',
    contraseña: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [rol, setRol] = useState('');
  //const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //console.log(credenciales);
      const response = await iniciarSesion(credenciales);
      console.log(response); // Verificar la respuesta del servidor en la consola
      navigate('/servicios')


      // Verificación de rol e ID
      if (response && response.id && response.rol) {
        // Llamar a la función onLogin con el rol y ID del usuario
        onLogin(response.rol, response.id);
        alert('Inicio de sesión exitoso');
        //dispatch(loguearse(response.id, response.rol));

        // Limpiar el formulario o redirigir a otra página
      } else {
        throw new Error('Respuesta del servidor incompleta');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="iniciar-sesion">
      <h1>¡Bienvenido de vuelta!</h1>
      <p>Rellena este formulario para acceder a todos nuestros servicios. ¡Estamos emocionados de tenerte con nosotros!</p>
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email"  value={credenciales.email} onChange={handleChange} required />
          <input type="password" name="contraseña" value={credenciales.contraseña} onChange={handleChange} placeholder="Contraseña" required />
          <div className="footer-text">
            <span>¿No tienes cuenta? </span>
            <Link to="/register" className="link-button">Registrarme</Link>
            <Link to= "/restablecer-contra" className="link-button">Olvidé la contraseña</Link>
          </div>
          <button type="submit" className="submit-button">Acceder</button>
        </form>
        {error && <p>{error}</p>}
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
        <Link to="/register" className="resbutton">Registrarme</Link>
      </div>
    </div>
  );
};

export default LoginForm;
*/

import React, { useState } from 'react';
import { iniciarSesion } from '../../api/iniciarSesion';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './iniciarSesion.css';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';

const LoginForm = ({ onLogin }) => {
  const [credenciales, setCredenciales] = useState({
    email: '',
    contraseña: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await iniciarSesion(credenciales);
      console.log(response); // Verificar la respuesta del servidor en la consola

      // Verificación de rol e ID
      if (response && response.id && response.rol) {
        // Llamar a la función onLogin con el rol y ID del usuario
        onLogin(response.id, response.rol);
        alert('Inicio de sesión exitoso');
        // Limpiar el formulario o redirigir a otra página
        navigate('/servicios');
      } else {
        throw new Error('Respuesta del servidor incompleta');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="iniciar-sesion">
      <h1>¡Bienvenido de vuelta!</h1>
      <p>Rellena este formulario para acceder a todos nuestros servicios. ¡Estamos emocionados de tenerte con nosotros!</p>
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email"  
            value={credenciales.email} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="contraseña" 
            value={credenciales.contraseña} 
            onChange={handleChange} 
            placeholder="Contraseña" 
            required 
          />          
          <div className="footer-text-contrasena">
            <Link to="/restablecer-contra" className="link-button olvidaste-contrasena">Olvidé la contraseña</Link>
          </div>

          <button type="submit" className="submit-button">Acceder</button>

          <div className="footer-text">
            <span>¿No tienes cuenta? </span>
            <Link to="/register" className="link-button">Registrarme</Link>
          </div>

        </form>
        {error && <p>{error}</p>}
      </div>

      <div className="info-section">
        <div className="info-item">
          <img src={imagenTerminosCondiciones} alt="Términos y Condiciones" />
          <h3>Términos y Condiciones</h3>
          <p>¡Recuerda leer los términos y condiciones aquí! Es importante que estés al tanto de nuestras políticas para garantizar una experiencia segura y satisfactoria en nuestra plataforma.</p>
          <button type="button-ver">Ver Más</button>
        </div>
        <div className="info-item">
          <img src={imagenInformacionImportante} alt="Información Importante" />
          <h3>Información Importante</h3>
          <p>¡No olvides que puedes modificar tus publicaciones y servicios en cualquier momento! Mantén tu perfil actualizado y adaptado a tus necesidades y disponibilidad.</p>
          <button type="button-ver">Ver Más</button>
        </div>
      </div>

      <div className="cta-section">
        <p>¿No tienes cuenta? Regístrate acá para acceder a todos los servicios.</p>
        <Link to="/register" className="resbutton">Registrarme</Link>
      </div>
    </div>
  );
};

export default LoginForm;