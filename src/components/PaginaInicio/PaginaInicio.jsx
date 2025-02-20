import React from 'react';
import imagenPrincipal from '../../assets/images/fotoperro7.jpg';
import imagenCuidador from '../../assets/images/fotoperro4.jpg';
import imagenCuidadorNoche from '../../assets/images/fotoperro9.jpg';
import { Link } from 'react-router-dom';

const PaginaInicio = () => {
  return (
    <div>
      <section className="welcome-section">
        <img src={imagenPrincipal} alt="Principal" className="welcome-image" />
        <h1>Descubre cuidadores profesionales y amantes de mascotas listos para mimar a tu peludo amigo.</h1>
        <Link to="/register" className="signup-button">Crear Cuenta</Link>
      </section>

      <section className="benefits-section">
        <h2 style={{ fontSize: '2.5rem' }}>Cuidado, Comodidad y Confianza</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Beneficios mutuos para todos</h3>
            <p>La plataforma ofrece beneficios tanto para los dueños de mascotas como para los cuidadores, creando una comunidad basada en la confianza y el cuidado mutuo.</p>
          </div>
          <div className="benefit">
            <h3>Oportunidades únicas para los cuidadores</h3>
            <p>Los cuidadores tienen la oportunidad de intercambiar su experiencia por estancias gratificantes en hogares donde sus habilidades son apreciadas y valoradas.</p>
          </div>
          <div className="benefit">
            <h3>Confianza para los dueños de mascotas</h3>
            <p>Los amantes de las mascotas pueden descansar sabiendo que sus queridos compañeros reciben atención de calidad mientras están fuera.</p>
          </div>
          <div className="benefit">
            <h3>Comodidad para las mascotas</h3>
            <p>Las mascotas disfrutarán de la comodidad de estar en casa con un cuidador dedicado que les brindará amor y compañía.</p>
          </div>
        </div>

        <div className="benefit-detail">
          <img src={imagenCuidador} alt="Detalle" className="benefit-detail-image" />
          <div className="text text-right">
            <h3>Conecta con los mejores cuidadores domésticos</h3>
            <p>Encuentra un cuidador verificado y revisado que mantendrá compañía a tus mascotas y les brindará todo el tiempo, cuidado y atención del mundo.</p>
            <Link to="/servicios" className="signup-button">Visitar Servicios</Link>
          </div>
        </div>

        <div className="benefit-detail">
          <div className="text text-left">
            <h3>Expertos en paseo y adiestramiento a tu alcance</h3>
            <p>Confía en nuestros expertos para cuidar y entrenar a tu mascota, garantizando su felicidad y bienestar. Con su experiencia y pasión, aseguramos que tu mascota esté en las mejores manos.</p>
            <Link to="/servicios" className="signup-button">Visitar Servicios</Link>
          </div>
          <img src={imagenCuidadorNoche} alt="Detalle" className="benefit-detail-image" />
        </div>
      </section>

      <section className="about-section">
        <h2>Sobre Nosotros</h2>
        <p>¡Estás en buenas manos! Nos dedicamos a cuidar de tus mascotas con amor y profesionalismo. Nuestro compromiso es brindarles un entorno seguro y feliz mientras estás fuera. Gracias por confiar en nosotros para el cuidado de tus compañeros peludos.</p>
        <div className="about-buttons">
        <Link to="/register" className="signup-button">Crear Cuenta</Link>
          <button>Contacto</button>
        </div>
      </section>
    </div>
  );
};

export default PaginaInicio;