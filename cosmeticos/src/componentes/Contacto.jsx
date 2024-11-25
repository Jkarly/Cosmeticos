import { useState } from "react";
import Mapa from "./map/Mapa";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import fondo2 from "../assets/fondo/contac.jpg";
import likes from "../assets/productos/likes.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faHeart, faFaceSmileWink} from "@fortawesome/free-solid-svg-icons";
const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    setFormData({
      nombre: "",
      apellido: "",
      comentario: "",
    });

    alert("¡Comentario enviado con éxito!");
  };

  return (
    <div className="absolute inset-0 w-full">
      <Encabezado />

      <div className="relative w-screen min-h-screen pb-4 flex items-center justify-center">
        <img
          src={fondo2}
          alt="Imagen de fondo principal"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative flex flex-col md:flex-row justify-center items-start w-full px-4 md:px-6 md:pt-24 pb-12 z-20 gap-4 md:gap-8">
          <div className="flex-grow w-full md:w-5/12 max-w-lg bg-[#ddd0d0e8]  bg-opacity-90 rounded-lg shadow-lg p-4 md:p-6 mx-2 mb-6 sm:mt-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">
              <FontAwesomeIcon icon={faHeart} className="h-12 md:h-16 w-12 md:w-16" />
            </h2>
            <h2 className="text-lg md:text-2xl font-bold mb-4 text-center text-gray-800">
              Contáctate con nosotros, estamos para ayudarte
            </h2>
            <p className="text-sm md:text-base mb-4 text-left">
              <strong>Horario de atención: </strong>Lunes a viernes de 08:30 a 20:30
            </p>
            <p className="text-sm md:text-base mb-4 text-left flex items-center">
              <strong>
                <FontAwesomeIcon icon={faEnvelope} /> Email:
              </strong>Todoparaguapas@outlook.com
            </p>
            <p className="text-sm md:text-base mb-4 text-left flex items-center">
              <strong><FontAwesomeIcon icon={faPhone} /> Celular:</strong>{" "} 69326994</p>
            <div className="mb-6">
              <Mapa />
            </div>
            <p className="text-sm md:text-base lg:text-lg mb-4 text-center">
              <strong><FontAwesomeIcon icon={faMapMarkerAlt} /> Avenida La Paz esquina Calle Oruro, frente al parque Bolívar</strong>
            </p>


          </div>

          {/* Formulario */}
          <div className="flex-grow w-full md:w-5/12 max-w-lg bg-[#ddd0d0e8] p-4 md:p-6 rounded-lg shadow-lg mx-2">
            <h3 className="text-lg md:text-[25px] font-bold font-custom text-[#7077A1] text-center">
              ¿Te gustó nuestra página?<br /> Por favor califícanos <FontAwesomeIcon icon={faFaceSmileWink} />
             </h3>
            <img src={likes} alt="Likes" className="relative mb-4 mx-auto w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[370px] rounded-[10px]"/>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
                  <label
                    htmlFor="nombre"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="appearance-none block w-full bg-purple-100 text-purple-700 border border-purple-300 rounded-lg py-2 sm:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2">
                  <label
                    htmlFor="apellido"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Apellido"
                    className="appearance-none block w-full bg-purple-100 text-purple-700 border border-purple-300 rounded-lg py-2 sm:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="comentario"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Comentario
                </label>
                <textarea
                  id="comentario"
                  name="comentario"
                  rows="4"
                  value={formData.comentario}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full p-3 border border-purple-300 rounded-lg focus:outline-none focus:border-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Pie />
    </div>
  );
};

export default Contacto;
