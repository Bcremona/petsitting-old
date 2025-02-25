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
          <input type="text" name="mail" placeholder="Mail" onChange={handleChange}  />
          <input type="text" name="horarios" placeholder="Horarios" onChange={handleChange}  />
          <input type="text" name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required />
          <select type="" name="metodosDePago" placeholder="Metodo de Pago" onChange={handleChange} >
            <option value="tarjeta"> Tarjeta </option>
            <option value="transferencia"> Transferencia </option>
            <option value="efectivo"> Efectivo </option>
          </select>
          <button type="submit">Contratar</button>
        </form>
      </div>
      <div className="cta-section">
        <p>¿No te decidiste? Mira todos los servicios acá.</p>
        <button type="button" className='resbutton'><Link to="/servicios" className='resbutton-link'> Ver Servicios </Link></button>
      </div>
    </div>
  );
};

export default Contratacion;
