import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginForm from './components/IniciarSesion/IniciarSesion';
import Registro from './components/Registro/Registro';
import BusquedaServicios from './components/BusquedaServicio/BusquedaServicio';
import ServicioLista from './components/ServicioLista/ServicioLista';
import ServicioDetalle from './components/ServicioDetalle/ServicioDetalle';
import PublicarServicio from './components/PublicarServicio/PublicarServicio';
import ListaContratacionesPrestador from './components/ListaContratacionesPrestador/ListaContratacionesPrestador';
import Contratacion from './components/Contratacion/Contratacion';
import Perfil from './components/Perfil/Perfil';
import PerfilGestionServicio from './components/Perfil/PerfilGestionServicio';
import PerfilOpiniones from './components/Perfil/PerfilOpiniones'
import PaginaInicio from './components/PaginaInicio/PaginaInicio'
import RestablecerContraseña from './components/RestablecerContraseña/RestablecerContraseña';
import TerminosYServicios from './components/TerminosYServicios/terminosYServicios';
import imagenInformacionImportante from "./assets/images/fotoperro11.jpg";
import logo from "./assets/images/Logo.png"
import "./App.css"
import MostrarComentarios from './components/MostrarComentarios/MostrarComentarios';
import CrearComentario from './components/CrearComentarios/CrearComentarios';

const App = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (userInfo, role) => {
    setUser(userInfo);
    setUserRole(role);
    console.log('user ' + userInfo + ' - rol ' + role);
  };

  
  const handleLogout = () => {
    setUser(null);
    setUserRole(null);
  };

  return (

      <Router>
          <header className="App-header">
          <Link to="/inicio">
            <img src={logo} alt="Logo" className="App-logo" />
          </Link>
          <nav className="App-nav">
            <Link to="/perfil">Perfil</Link>
            <Link to="/publicar">Ofrecer Servicios</Link>
            <Link to="/busqueda">Búsqueda Servicios</Link>
            <Link to="/servicios">Ver Servicios</Link>
          </nav>
          <div className="App-auth-buttons">
          {user ? (
          <>
            <Link to="/login" className="login-button" onClick={handleLogout} >Salir</Link>
            <Link to="/perfil" className="signup-button">Perfil</Link>
            <img src={imagenInformacionImportante} alt="Información importante" className="circle-image" />
          </>
        ) : (
          <>

          </>
        )}
          </div>
          </header>
        <Routes>
          <Route path="/" element={<Navigate to={!user ? "/login" : "/servicios"} />} />
          <Route path="/login" element={ <LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={ <Registro />} />
          <Route path="/publicar" element={<PublicarServicio userId={user} userRole={userRole} />} />
          <Route path="/contrataciones" element={<ListaContratacionesPrestador idPrestador={user} />} />
          <Route path="/busqueda" element={<BusquedaServicios />} />
          <Route path="/servicios" element={<ServicioLista rol={userRole} />} />
          <Route path="/comentarios" element={<MostrarComentarios />} />
          <Route path="/calificar" element={<CrearComentario />} />
          <Route path="/contratacion" element={<Contratacion userId={user} userRole={userRole}/>}/>
          <Route path="/servicio/:id" element={<ServicioDetalle />} />
          <Route path="/restablecer-contra" element={<RestablecerContraseña />} />
          <Route path="/perfil" element={<Perfil prestadorId={user} />} />
          <Route path="/perfil-opiniones" element={<PerfilOpiniones />} />
          <Route path="/inicio" element={<PaginaInicio userId={user}/>} />
          <Route path="/terminosyservicios" element={<TerminosYServicios />} />
          <Route path="/perfil-gestionar-servicio" element={<PerfilGestionServicio />} />
        </Routes>
      </Router>


  );
};


export default App;