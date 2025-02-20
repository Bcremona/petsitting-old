import React, { useState } from 'react';
import { registrarUsuario } from '../../api/registro'; //-----> aca importamos lo que permite llamar a la API
import './crearCuenta.css';
import { Link } from 'react-router-dom';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import imagenInformacionImportante from '../../assets/images/fotoperro11.jpg';

const Registro = () => {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    dni: '',
    telefono: '',
    domicilio: '',
    contraseña: '',
    confirmarContraseña: '',
    rol: 'usuario', // Cambié 'consumidor' por 'usuario' para que coincida con las opciones del select
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.contraseña !== form.confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      const usuario = { //-----> La estructura del Json que pasa 
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        dni: form.dni,
        telefono: form.telefono,
        domicilio: form.domicilio,
        contraseña: form.contraseña,
        rol: form.rol, // Añadimos el rol al objeto usuario
      };
      const data = await registrarUsuario(usuario); //----> aca llama al JS registro de la API a la funcion registrarUsuario 
      alert('Usuario registrado:', data);

    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (//------> el form de donde pesca y arma el JSON 
    <div className="crear-cuenta">
      <h1>¿Listo para empezar?</h1>
      <p>Rellena este formulario para completar tu registro y acceder a todos nuestros servicios. ¡Estamos emocionados de tenerte con nosotros!</p>
      <div className="form-container">
        <h2>Crea tu cuenta gratuita</h2>
        <form onSubmit={handleSubmit}>
          <select name="rol" value={form.rol} onChange={handleChange}>
            <option value="" disabled>Rol - (Proveedor o Usuario)</option>
            <option value="prestador">Proveedor</option>
            <option value="consumidor">Usuario</option>
          </select>
          <div className="name-container">
            <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
            <input type="text" name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="dni" placeholder="DNI" value={form.dni} onChange={handleChange} required />
          <input type="text" name="telefono" placeholder="Número Telefónico" value={form.telefono} onChange={handleChange} required />
          <input type="text" name="domicilio" placeholder="Domicilio" value={form.domicilio} onChange={handleChange} required />
          <input type="password" name="contraseña" placeholder="Contraseña" value={form.contraseña} onChange={handleChange} required />
          <input type="password" name="confirmarContraseña" placeholder="Confirmar Contraseña" value={form.confirmarContraseña} onChange={handleChange} required />
          <div className="footer-text">
            <span>¿Ya tenes cuenta? </span>
            <Link to="/login" className="link-button">Iniciar Sesión</Link>
          </div>
          <button type="submit" className="submit-button">Registrarme</button>
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
          <button type="button">Ver Más</button>
        </div>
      </div>

      <div className="cta-section">
        <p>¿Ya tenes una cuenta? Inicia sesion aqui para acceder a tu perfil.</p>
        <Link to="/login" className="resbutton">Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default Registro;
