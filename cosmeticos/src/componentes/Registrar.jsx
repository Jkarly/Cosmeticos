import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faUnlock, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
import Encabezado from "./Encabezado";
import fondo from "../assets/fondo/flor.jpg"; 
import { useUsuarios } from "./UsuarioContext"; 

const Registrar = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "", 
    nombreusuario: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const { agregarUsuario } = useUsuarios(); 
  const navigate = useNavigate();
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.password !== usuario.confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    agregarUsuario({
      id: new Date().getTime(),
      nombreCompleto: usuario.nombreCompleto,
      nombreusuario: usuario.nombreusuario,
      email: usuario.email,
      password: usuario.password,
    });

    alert("Usuario registrado exitosamente");
    setUsuario({ 
      nombreCompleto: "", 
      nombreusuario: "", 
      email: "", 
      password: "", 
      confirmarPassword: "" 
    });
    setError("");
    navigate("/login");
  };

  return (
    <div className="absolute inset-0 w-full">
      <Encabezado />
      <div className="relative w-screen min-h-screen pb-4">
        <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 w-full flex justify-center items-center">
          <div className="bg-black bg-opacity-70 p-6 rounded shadow-md max-w-sm w-full">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Cosmeticos</h2>
            <form onSubmit={handleSubmit}>
             
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faIdCard} className="absolute top-3 left-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Nombre Completo" 
                  name="nombreCompleto" 
                  value={usuario.nombreCompleto} 
                  onChange={handleChange} 
                  className="w-full p-3 pl-10 rounded border border-gray-300" 
                  required 
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faUser} className="absolute top-3 left-3 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Nombre de usuario" 
                  name="nombreusuario" 
                  value={usuario.nombreusuario} 
                  onChange={handleChange} 
                  className="w-full p-3 pl-10 rounded border border-gray-300" 
                  required 
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="absolute top-3 left-3 text-gray-400" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={usuario.email} 
                  onChange={handleChange} 
                  className="w-full p-3 pl-10 rounded border border-gray-300" 
                  required 
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faLock} className="absolute top-3 left-3 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="Contraseña" 
                  name="password" 
                  value={usuario.password} 
                  onChange={handleChange} 
                  className="w-full p-3 pl-10 rounded border border-gray-300" 
                  required 
                />
              </div>
              <div className="relative mb-4">
                <FontAwesomeIcon icon={faUnlock} className="absolute top-3 left-3 text-gray-400" />
                <input 
                  type="password" 
                  placeholder="Confirmar contraseña" 
                  name="confirmarPassword" 
                  value={usuario.confirmarPassword} 
                  onChange={handleChange} 
                  className="w-full p-3 pl-10 rounded border border-gray-300" 
                  required 
                />
              </div>
              {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
              <button type="submit" className="w-full py-3 bg-purple-600 text-white rounded">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
