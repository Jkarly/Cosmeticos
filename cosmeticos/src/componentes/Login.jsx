
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import fondo from "../assets/fondo/flor.jpg"; 
import Encabezado from "./Encabezado";
import { useUsuarios } from "./UsuarioContext"; 

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");


  const { usuarios, iniciarSesion } = useUsuarios();
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const inciosess = iniciarSesion(usuario, password);

   
    if (inciosess) {
      alert("Inicio de sesión exitoso");
      navigate("/perfil"); 
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="absolute inset-0 w-full">
      <Encabezado />
      <div className="relative w-screen min-h-screen pb-4">
        <img
          src={fondo}
          alt="Imagen de fondo principal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-70 p-6 rounded shadow-md max-w-sm w-full">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Cosmeticos</h2>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  className="w-full p-3 pl-10 rounded border border-gray-300"
                  required
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 pl-10 rounded border border-gray-300"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded">
                Iniciar Sesión
              </button>
            </form>
            <div className="text-center mt-4">
              <NavLink to="/registrar" className="text-purple-500">
                ¿No tienes una cuenta? Regístrate
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
