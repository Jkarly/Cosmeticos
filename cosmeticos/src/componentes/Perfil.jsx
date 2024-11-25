import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import fondo from "../assets/perfil.jpg";
import img1 from "../assets/perfil2.jpg";
import fondo2 from "../assets/perfi21.jpg";
import prod1 from "../assets/promociones/oferta1.jpg";
import prod2 from "../assets/promociones/oferta2.jpg";
import prod3 from "../assets/promociones/oferta3.jpg";
import prod4 from "../assets/promociones/oferta4.jpg";
import prod5 from "../assets/promociones/oferta5.jpg";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import { useUsuarios } from "./UsuarioContext";

const Notificaciones = ({ ofertas }) => (
  <div className="w-full md:w-1/2 p-6 bg-white bg-opacity-80 rounded-lg shadow-md border border-gray-300">
    <h2 className="text-xl font-semibold text-center mb-4">Notificaciones destacadas</h2>
    <ul className="space-y-3">
      {ofertas.map((oferta, index) => (
        <li key={index} className="flex justify-center items-center">
          <NavLink
            to={`/ofertas/${index}`}
            className="text-blue-600 hover:underline text-base font-medium"
          >
            {oferta.descuento}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const InformacionPersonal = ({
  usuarioLogueado,
  telefono,
  editando,
  setTelefono,
  setEditando,
  handleGuardar,
}) => (
  <div className="w-full md:w-1/2 p-6 bg-white bg-opacity-80 rounded-lg shadow-md border border-gray-300">
    <h2 className="text-xl font-semibold text-center mb-4">Información Personal</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre Completo:</label>
        <p className="text-base text-gray-800">
          {usuarioLogueado?.nombreCompleto || "No registrado"}
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
        <p className="text-base text-gray-800">
          {usuarioLogueado?.email || "No registrado"}
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
        {editando ? (
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full p-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        ) : (
          <p className="text-base text-gray-800">{telefono || "No registrado"}</p>
        )}
      </div>
    </div>
    {editando ? (
      <button
        onClick={handleGuardar}
        className="mt-4 w-full px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600"
      >
        Guardar
      </button>
    ) : (
      <button
        onClick={() => setEditando(true)}
        className="mt-4 w-full px-4 py-2 bg-gray-200 text-sm font-medium rounded-md hover:bg-gray-300"
      >
        Editar
      </button>
    )}
  </div>
);

const Perfil = () => {
  const { usuarioLogueado, actualizarUsuario, cerrarSesion } = useUsuarios();
  const navigate = useNavigate();

  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const [imagenPerfil, setImagenPerfil] = useState(usuarioLogueado?.foto || img1);
  const [telefono, setTelefono] = useState(usuarioLogueado?.telefono || "");
  const [editando, setEditando] = useState(false);
  const [puntos, setPuntos] = useState(0);

  const ofertas = [
    { image: prod1, descuento: "DESCUENTO DEL 40%" },
    { image: prod2, descuento: "DESCUENTO DEL 20%" },
    { image: prod3, descuento: "DESCUENTO DEL 30%" },
    { image: prod4, descuento: "DESCUENTO DEL 5%" },
    { image: prod5, descuento: "DESCUENTO DEL 10%" },
  ];

  useEffect(() => {
    if (usuarioLogueado) {
      const puntosGuardados = JSON.parse(localStorage.getItem("puntosUsuario"));
      setPuntos(puntosGuardados ?? 0);
      if (puntosGuardados === null) {
        localStorage.setItem("puntosUsuario", JSON.stringify(0));
      }
    } else {
      navigate("/login");
      alert("Debes iniciar sesión para ver tu perfil.");
    }
  }, [usuarioLogueado, navigate]);

  const handleGuardar = () => {
    actualizarUsuario({ telefono });
    setEditando(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenPerfil(reader.result);
        actualizarUsuario({ foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute inset-0 w-full bg-[#e0e1e6]">
      <Encabezado />
      <div className="relative w-screen h-screen bg-[#e0e1e6] overflow-hidden">
        <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
        <img
          src={fondo2}
          alt="Fondo secundario"
          className="absolute w-[3000px] h-[700px] object-contain opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />

<div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-black">
  {usuarioLogueado ? (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden mb-4">
          <img src={imagenPerfil} alt="Perfil" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-semibold">{usuarioLogueado.nombreusuario}</h1>
        <h3 className="text-2xl font-semibold text-[#4D2DB7]">Puntos: {puntos}</h3>
        <label className="mt-4 text-purple-500 cursor-pointer">
          Cambiar Foto de Perfil
          <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
        </label>
      </div>

      {/* Botones */}
      <div className="flex w-full mt-4 space-x-2 flex-col md:flex-row justify-center">
        <button
          className="py-2 px-4 text-center bg-gray-200 hover:bg-purple-300 transition duration-300 mb-2 md:mb-0 max-w-[200px]"
          onClick={() => setMostrarInformacion(!mostrarInformacion)}
        >
          Información Personal
        </button>
        <button
          className="py-2 px-4 text-center bg-gray-200 hover:bg-purple-300 transition duration-300 max-w-[200px]"
          onClick={() => setMostrarNotificaciones(!mostrarNotificaciones)}
        >
          Notificaciones
        </button>
      </div>

      {/* Contenedor de las secciones */}
      <div
        className={`mt-4 flex justify-center gap-4 w-full md:w-1/2 ${
          mostrarNotificaciones && mostrarInformacion ? "flex-row" : "flex-col"
        }`}
      >
        {/* Notificaciones */}
        {mostrarNotificaciones && (
          <div className="w-[300px] h-[300px] bg-white bg-opacity-80 rounded-lg shadow-md border border-gray-300 p-4">
            <h2 className="text-xl font-semibold text-center mb-4">Notificaciones destacadas</h2>
            <ul className="space-y-3">
              {ofertas.map((oferta, index) => (
                <li key={index} className="flex justify-center items-center">
                  <NavLink
                    to={`/ofertas/${index}`}
                    className="text-blue-600 hover:underline text-base font-medium"
                  >
                    {oferta.descuento}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Información Personal */}
        {mostrarInformacion && (
          <div className="w-[300px] h-[300px] bg-white bg-opacity-80 rounded-lg shadow-md border border-gray-300 p-4">
            <h2 className="text-xl font-semibold text-center mb-4">Información Personal</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre Completo:</label>
                <p className="text-base text-gray-800">{usuarioLogueado?.nombreCompleto || "No registrado"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
                <p className="text-base text-gray-800">{usuarioLogueado?.email || "No registrado"}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Teléfono:</label>
                {editando ? (
                  <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    className="w-full p-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                ) : (
                  <p className="text-base text-gray-800">{telefono || "No registrado"}</p>
                )}
              </div>
            </div>
          
            {editando ? (
              <button
                onClick={handleGuardar}
                className="mt-4 w-full px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-800"
              >
                Guardar
              </button>
            ) : (
              <button
                onClick={() => setEditando(true)}
                className="mt-4 w-full px-4 py-2 bg-gray-200 text-sm font-medium rounded-md hover:bg-gray-300"
              >
                Editar
              </button>
            )}
          </div>
        )}
      </div>
    </>
  ) : (
    <div>
      <h1 className="text-2xl font-semibold text-red-500">Usuario no logueado.</h1>
    </div>
  )}
</div>
</div>
      <Pie />
    </div>
  );
};

export default Perfil;
