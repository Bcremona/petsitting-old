import React from 'react';
import './servicios.css';
import { Link } from 'react-router-dom';
import userImage from '../../assets/images/fotoperro11.jpg';

const ServicioCard = ({id, rol, nombre, duracion, costo, frecuencia, calificacion, idPrestador}) => {
    return (
        <div className="service-card">
            <div className="service-details">
                <h3 className="service-title">{nombre}</h3>
                <div className='img-container'> 
                    <img src={userImage} alt="Laura Rodriguez" className="service-image" />
                </div>
                <div className="service-info">
                    <p className="service-description">¡Hola! Soy Laura y tengo una pasión especial por los gatos. Conmigo, tus gatos recibirán cuatro horas de atención amorosa y compañía en la comodidad de su hogar. ¡Confía en mí para brindarles el mejor cuidado!</p>
                    <div className="service-meta-container">
                        <p className="service-meta"><strong>Costo de servicio:</strong>  ${costo} </p>
                        <p className="service-meta"><strong>Duración:</strong> {duracion}</p>
                        <p className="service-meta"><strong>Frecuencia:</strong> {frecuencia}</p>
                        <div className="service-classification">
                            <p><strong>Opiniones:</strong> {calificacion ? `${calificacion} estrellas` : 'Sin calificación'}</p>
                            <div className='small-button-container'>
                                <button className="small-button">
                                <Link 
                                    to="/calificar" 
                                    state={{ 
                                        idServicio: id,
                                        userRole: rol
                                    }} 
                                >
                                    Calificar
                                </Link>
                                </button>
                                <button className="small-button">
                                <Link 
                                    to="/comentarios" 
                                    state={{ idServicio: id}} 
                                >
                                    Ver comentarios
                                </Link>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <p className="service-name">Laura Rodriguez - 1156758765</p>
                <div className="card-buttons">
                    <Link 
                        to="/contratacion" 
                        state={{ idServicio: id, idPrestador: idPrestador}} 
                        className="edit-button"
                    >
                        Contratar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServicioCard;