import { useNavigate } from "react-router-dom"; 
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import img1 from "../assets/carrito/carrito.jpg";
import qr from "../assets/carrito/qr.jpg"; 
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Carrito = () => {
  const navigate = useNavigate();  
  
  // Recupero el carrito desde localStorage
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem("carrito")) || []);

  //elimino un producto del carrito
  const eliminarProducto = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  };
  

  if (carrito.length === 0) {
    return <h1 className="text-center text-red-500">Carrito vacío</h1>;
  }

  const cancelarOrden = () => {
    // Limpio el carrito del localStorage
    localStorage.removeItem("carrito");
    navigate("/shop"); 
  };

  // const enviarFormulario = (event) => {
  //   event.preventDefault(); 
  //   alert("¡Felicidades, realizaste tu compra!");
  //   navigate("/shop");
  // };
  const confirmarPago = (event) => {
    event.preventDefault();
    
    // Recupero los puntos actuales del usuario desde localStorage
    const puntosActuales = JSON.parse(localStorage.getItem("puntosUsuario")) || 0;
    
    // Calculo los nuevos puntos (por cada 100 en el precio, 5 puntos)
    const nuevosPuntos = puntosActuales + Math.floor(precioTotal / 100) * 5;
    
    // Almaceno los puntos actualizados en localStorage
    localStorage.setItem("puntosUsuario", JSON.stringify(nuevosPuntos));
    alert(`¡Felicidades, realizaste tu compra! Has ganado ${Math.floor(precioTotal / 100) * 5} puntos.`);
    
    // Reseteo el carrito
    localStorage.removeItem("carrito");
    navigate("/perfil");
  };
  
  
  
  const enviarQRPorWhatsApp = () => {
    const mensaje = "Aquí está el código QR para tu pago.";
    const numeroWhatsApp = "59167966970";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}%20${encodeURIComponent(window.location.origin + qr)}`;
    window.open(urlWhatsApp, "_blank");
  };

  // Calculo el precio total del carrito
  const precioTotal = carrito.reduce((total, item) => total + (item.precioTotal || 0), 0);
  
  return (
    <>
      <div className="absolute inset-0 w-full bg-[#e0e1e6]"> 
        <Encabezado />
        <div className="relative w-full min-h-screen bg-[#e0e1e6]">
          <img 
            src={img1} 
            alt="Imagen de fondo" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:p-8 px-4 sm:ml-32 sm:mr-32 min-h-screen gap-12 relative z-10">
            
            {/* Formulario de pago */}
            <div className="w-full sm:w-1/2 p-4 relative rounded-lg shadow-lg bg-black bg-opacity-60">
              <h2 className="text-3xl font-semibold mb-4 text-white">Pago por Tarjeta</h2>
              <form className="space-y-4" onSubmit={confirmarPago}>
                <div>
                  <label htmlFor="nombre" className="text-white block text-lg">Nombre en la tarjeta</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full p-2 mt-2 rounded-md bg-white text-black"
                    placeholder="Ingresa el nombre que aparece en la tarjeta"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="numeroTarjeta" className="text-white block text-lg">Número de tarjeta</label>
                  <input
                    type="text"
                    id="numeroTarjeta"
                    name="numeroTarjeta"
                    className="w-full p-2 mt-2 rounded-md bg-white text-black"
                    placeholder="Ingresa tu número de tarjeta"
                    required
                    maxLength="19"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div className="w-full sm:w-1/2 sm:pr-2">
                    <label htmlFor="fechaExpiracion" className="text-white block text-lg">Fecha de expiración</label>
                    <input
                      type="month"
                      id="fechaExpiracion"
                      name="fechaExpiracion"
                      className="w-full p-2 mt-2 rounded-md bg-white text-black"
                      required
                    />
                  </div>
                  

                  <div className="w-full sm:w-1/2 sm:pl-2">
                    <label htmlFor="cvv" className="text-white block text-lg">Código de seguridad (CVV)</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      className="w-full p-2 mt-2 rounded-md bg-white text-black"
                      placeholder="CVV"
                      required
                      maxLength="3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="direccion" className="text-white block text-lg">Dirección de facturación</label>
                  <input
                    type="text"
                    id="direccion"
                    name="direccion"
                    className="w-full p-2 mt-2 rounded-md bg-white text-black"
                    placeholder="Ingresa tu dirección de facturación"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="monto" className="text-white block text-lg">Monto a pagar</label>
                  <input
                    type="text"
                    id="monto"
                    name="monto"
                    className="w-full p-2 mt-2 rounded-md bg-white text-black text-center"
                    value={`${precioTotal} Bs`}
                    readOnly
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full p-3 bg-[#900c3f] text-white font-semibold rounded-md flex items-center justify-center space-x-2"
                  >
                    <ShoppingBagIcon className="w-6 h-6" />
                    <span>Confirmar Pago</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Carrito de productos */}
            <div className="w-full sm:w-1/2 p-4 relative rounded-lg shadow-lg bg-black bg-opacity-60">
              <h2 className="text-3xl font-semibold mb-4 text-white">Tu Carrito</h2>
              {carrito.map((producto, index) => (
                <div key={index} className="mb-6 p-4 bg-[#9228dd96] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-between items-center">
                    {/* Información del producto */}
                    <div className="flex-1 mr-4">
                      <p className="text-2xl font-semibold text-white">{producto.nombre}</p>
                      <p className="text-lg text-gray-300">Cantidad: {producto.cantidad}</p>
                      <p className="text-lg font-bold text-[#050505]">Precio: {producto.precioTotal} Bs</p>
                    </div>

                    {/* Botón para eliminar */}
                    <button
                      onClick={() => eliminarProducto(index)}
                      className="bg-transparent hover:bg-[#FF204E] text-white p-4 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out"
                    >
                      <span className="text-xl">-</span>
                    </button>
                  </div>
                </div>
              ))}

              <div className="mb-4">
                <img src={qr} alt="QR de pago" className="w-40 h-40 mx-auto" />
                <p className="text-white text-center mt-2">Escanea este QR para completar tu pago</p>
              </div>
              <p className="text-lg font-bold text-[#F9E400]">Monto Total: {precioTotal} Bs</p>
              <div className="mt-4">
                <button
                  onClick={enviarQRPorWhatsApp}
                  className="flex items-center justify-center w-full p-3 bg-[#38e54cf1] text-white text-center font-semibold rounded-md"
                >
                  <span>Enviar QR por WhatsApp <FontAwesomeIcon icon={faPaperPlane} /></span>
                </button>
              </div>
              {/* Seguir comprando */}
              <div className="mt-4">
                <button
                  onClick={() => navigate("/shop")}
                  className="w-full p-3 bg-[#433878] text-white font-semibold rounded-md"
                >
                  Seguir Comprando <FontAwesomeIcon icon={faCartShopping}/>
                </button>
              </div>
              <div className="mt-4">
                <button
                    onClick={cancelarOrden}
                    className="flex items-center justify-center w-full p-3 bg-[#900c3f] text-white text-center font-semibold rounded-md"
                    >
                    <XCircleIcon className="w-6 h-6" />
                    <span>Cancelar Orden</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Pie />
      </div>
    </>
  );
};

export default Carrito;
