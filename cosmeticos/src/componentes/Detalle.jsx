import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faAngleLeft, faAngleRight,faComment,faPen } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import imgFondo from "../assets/images/FondoPrincipal.jpg";
import { Boton } from "./General";
const Detalle = () => {
  const location = useLocation();
  const { producto } = location.state || {};  
  const navigate = useNavigate();

  const [contador, setContador] = useState(1);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  
  // carrusel
  const [activeIndex, setActiveIndex] = useState(0); 

  const Contar = () => {
    setContador(contador + 1);
  };

  const Decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (nuevoComentario.trim()) {
      setComentarios([...comentarios, nuevoComentario]);
      setNuevoComentario("");
    }
  };
  //llevo datos del product al carrito
  const agregarAlCarrito = () => {
    const productoCarrito = {
      ...producto,
      cantidad: contador,
      precioTotal: producto.precio * contador,
      precio: producto.precio,
    };
  
    // Recupero el carrito actual del localStorage, si existe
    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
  
    // Añado el nuevo producto al carrito
    carritoActual.push(productoCarrito);
  
    // Guardo el carrito actualizado en localStorage
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
  
    navigate("/carrito");
  };
  
  

  if (!producto) {
    return <h1 className="text-center text-red-500">Hubo un error: Producto no encontrado</h1>;
  }

  // Funciones para el carrusel
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? producto.image.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === producto.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="absolute inset-0 w-full">
        <Encabezado />
        
        <div className="relative w-screen min-h-screen pb-4">
          <img
            src={imgFondo}
            alt="Imagen de fondo principal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-x-2 sm:p-8 ml-4 mr-4 sm:ml-32 sm:mr-32">
            {/* Imagen del producto */}
            <div className="flex-shrink-0 w-full sm:w-auto mr-16">
              {producto.image.length > 1 ? (
                <div className="relative w-full max-w-6xl mx-auto">
                  <div className="relative w-full">
                    <img
                      src={producto.image[activeIndex]}
                      alt={`${producto.nombre} - imagen ${activeIndex + 1}`}
                      className="w-full sm:w-[220px] sm:h-[390px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                
                  {/* Botones Carrus*/}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-8 z-10 pointer-events-none">
                    <button
                      onClick={handlePrev}
                      className="transform -translate-x-24 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      aria-label="Previous slide"
                    >
                      <FontAwesomeIcon icon={faAngleLeft} className="text-xl" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="transform translate-x-24 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all pointer-events-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      aria-label="Next slide"
                    >
                      <FontAwesomeIcon icon={faAngleRight} className="text-xl" />
                    </button>
                  </div>
                </div>
              ) : (
                // Si solo hay una imagen no hay carrusel
                <img
                  src={producto.image[0]}
                  alt={`${producto.nombre} - imagen 1`}
                  className="w-full sm:w-[220px] sm:h-[390px] object-cover rounded-lg shadow-lg"
                />
              )}
            </div>

            {/* info del producto */}
            <div className="w-full sm:w-auto p-4 relative rounded-lg shadow-lg bg-black bg-opacity-60">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">{producto.nombre}</h2>
              <p className="text-lg sm:text-xl text-white mb-4">Categoría: {producto.categoria}</p>
              <p className="text-lg sm:text-xl text-white mb-4">Subcategoría: {producto.subcategoria}</p>
              <p className="text-lg font-bold text-[#900c3f] mb-4">{producto.precio} Bs</p>
              <p className="text-white mb-6">
                Aquí va una descripción más detallada del producto. Puedes incluir más información sobre el producto, características, o cualquier dato relevante que quieras mostrar al usuario.
              </p>

              {/* Cantidad */}
              <div className="flex justify-center items-center space-x-4 mb-6">
                <button className="px-4 py-2 bg-gray-200 text-black rounded-full" onClick={Decrementar}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  type="text"
                  value={contador}
                  readOnly
                  className="w-12 text-center border-2 border-gray-300 rounded-lg"
                />
                <button className="px-4 py-2 bg-gray-200 text-black rounded-full" onClick={Contar}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              {/* Botón para Carrito */}
              <button 
                className="px-6 py-2 bg-[#FF0000] text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
                onClick={agregarAlCarrito}>
                  Agregar al carrito
              </button>
            </div>
          </div>

          {/* comentarios */}
          <div className="relative w-full sm:w-3/4 lg:w-3/4 bg-[#e0e1e6] rounded-lg p-4 lg:p-10 shadow-md mx-auto mt-12 z-20">
            <h1 className="text-xl font-semibold mb-4 text-black">Comentarios <FontAwesomeIcon icon={faPen} /></h1>
            <ul className="mb-4 space-y-4">
              {comentarios.map((comentario, index) => (
                <li key={index} className="bg-[#E4003A] p-4 rounded-2xl shadow mb-2">
                  {comentario}
                </li>
              ))}
            </ul>
            <form onSubmit={manejarEnvio}>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mb-4"
                placeholder="Escribe tu comentario..."
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                rows="3"
              />
              <Boton type="submit">
                <FontAwesomeIcon icon={faComment} /> Enviar comentario 
              </Boton>
            </form>
          </div>
        </div>

        <Pie />
      </div>
    </>
  );
};

export default Detalle;
