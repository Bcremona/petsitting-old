import React from 'react';
import { Link } from 'react-router-dom';
import './perfil.css';
import imagenTerminosCondiciones from '../../assets/images/fotoperro10.jpg';
import userImage from '../../assets/images/fotoperro11.jpg';

const PerfilOpiniones = () => {
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
            
          </div>
          <div className="right-section">
            <h1>Gestión de Servicios</h1>
            <h2>Aquí podrás gestionar tus solicitudes de servicios</h2>
    
            <div className="service-card">
              <div className="service-details">
                <img src={userImage} alt="Laura Rodriguez" className="service-image" />
                <div className="service-info">
                  <h3 className="service-title">Cuidado Doméstico</h3>
                  <p className="service-description"><strong>Mensaje:</strong> Muy buen servicio!</p>
                  <p className="service-description"><strong>Estrellas:</strong> ★★★★★</p>
                </div>
                <div className="button-container">
                  <button className="small-button">Eliminar</button>
                </div>
              </div>
    
              <div className="card-footer">
                <p className="service-name">
                    Laura Rodriguez - <span className="phone-number">1176567878</span>
                </p>
                <div className="card-buttons">
                </div>
            </div>
            </div>
    
            <div className="cta-buttons">
              <Link to="/perfil" className="cta-button">Ver Servicios Publicados</Link>
            </div>
          </div>
        </div>
      );
    };

export default PerfilOpiniones;