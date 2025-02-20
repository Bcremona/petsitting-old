import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { crearContratacion } from '../../api/crearContratacion';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import whatsapp from '../../assets/images/wsplogo.png';
import './contratacion.css'

const Contratacion = ({ idServicio, userId, userRole, idPrestador }) => { // Agregamos idPrestador como una prop
 
  const location = useLocation(); // Get the location object
  const contratacionData = location.state; // Access the 'state' data

  const serviceId = contratacionData.idServicio;
  const prestadorId = contratacionData.idPrestador;

  const [form, setForm] = useState({
    telefono: '',
    email: '',
    horario: '',
    mensaje: '',
    metodoPago: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contratacion = {
        serviceId,
        prestadorId, // Incluimos el id del prestador en la contratación
        telefono: form.telefono,
        email: form.email,
        horario: form.horario,
        mensaje: form.mensaje,
        metodoPago: form.metodoPago,
      };
      const data = await crearContratacion(contratacion);
      console.log('Contratación creada:', data);
    } catch (error) {
      console.error('Error al crear la contratación:', error);
    }
  };

  /*
  // Validación de rol: Solo los consumidores pueden ver y utilizar este formulario
  if (!userId || userRole !== 'consumidor') {
    return (
      <p>No tienes permisos para realizar esta acción.</p>
    );
  }
  */


  return (
      <div className="contratacion-servicio-container">
      <h1>Contratacion</h1>
      <p>Rellena este formulario para confirmar la solicitud</p>
      <div className="form-container">
        <h2>Contratacion</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="telefono" placeholder="Telefono" value={form.telefono} onChange={handleChange} required />
          <input type="text" name="mail" placeholder="Mail" value={"bautistacremona@gmail.com"} onChange={handleChange}  />
          <input type="text" name="horarios" placeholder="Horarios" value={"12:30"} onChange={handleChange}  />
          <input type="text" name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required />
          <input type="text" name="metodosDePago" placeholder="Metodo de Pago" value={"tarjeta"} onChange={handleChange}  />
          <button type="submit">Contratar</button>
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
          <img src={whatsapp} alt="Contactate con tu proovedor!" />
          <h3>Contactate con tu proovedor!</h3>
          <p>Podes contactarte con tu proovedor por Whatsapp!</p>
          <button type="button">Ir a Whastapp</button>
        </div>
      </div>
      <div className="cta-section">
        <p>¿No te decidiste? Mira todos los servicios acá.</p>
        <button type="button">Ver Servicios</button>
      </div>
    </div>
  );
};

export default Contratacion;
