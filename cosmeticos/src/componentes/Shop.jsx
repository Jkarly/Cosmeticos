import { useState } from "react";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
// Productos
import prod1 from "../assets/productos/lab1.jpg";
import prod11 from "../assets/productos/lab11.jpg";
import prod12 from "../assets/productos/lab12.jpg";
import prod13 from "../assets/productos/lab13.jpg";
import prod2 from "../assets/productos/lab2.jpg";
import prod21 from "../assets/productos/lab21.jpg";
import prod22 from "../assets/productos/lab22.jpg";
import prod23 from "../assets/productos/lab23.jpg";
import prod3 from "../assets/productos/lab33.jpg";
import prod31 from "../assets/productos/lab31.jpg";
import prod32 from "../assets/productos/lab32.jpg";
import prod33 from "../assets/productos/lab33.jpg";
import prod4 from "../assets/productos/lab4.jpg";
import prod5 from "../assets/productos/lab5.jpg";
import prod6 from "../assets/productos/perf1.jpg";
import prod7 from "../assets/productos/vperf.jpg";
import prod8 from "../assets/productos/palet11.jpg";
import prod81 from "../assets/productos/palet1.jpg";
import prod82 from "../assets/productos/palet12.jpg";
import { HeartIcon,EyeIcon  } from "@heroicons/react/24/outline";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
//import { v4 as uuidv4 } from "uuid";

const Shop = () => {
  const navigate = useNavigate();

  const productos = [
    { id: 1, image: [prod1,prod11,prod12,prod13], nombre: "Producto 1", precio: "20", categoria: "maquillaje", subcategoria: "labial" },
    { id: 2, image: [prod8,prod81,prod82], nombre: "Producto 2", precio: "30", categoria: "maquillaje", subcategoria: "paletas" },
    { id: 3, image: [prod21,prod2,prod22,prod23], nombre: "Producto 2", precio: "30", categoria: "maquillaje", subcategoria: "labial" },
    { id: 4, image: [prod3,prod31,prod32,prod33], nombre: "Producto 3", precio: "40", categoria: "maquillaje", subcategoria: "labial" },
    { id: 5, image: [prod4], nombre: "Producto 4", precio: "50", categoria: "maquillaje", subcategoria: "labial" },
    { id: 6, image: [prod5], nombre: "Producto 5", precio: "60", categoria: "maquillaje", subcategoria: "labial" },
    { id: 7, image: [prod6], nombre: "Producto 6", precio: "70", categoria: "perfume", subcategoria: "damas" },
    { id: 8, image: [prod7], nombre: "Producto 7", precio: "70", categoria: "perfume", subcategoria: "varones" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [subcategoriaSeleccionada, setSubcategoriaSeleccionada] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [favoritos, setFavoritos] = useState([]);  // Estado para productos favoritos

  const categoriasDisponibles = [...new Set(productos.map((p) => p.categoria))];

  const subcategoriasDisponibles = (categoria) => [
    ...new Set(productos.filter((p) => p.categoria === categoria).map((p) => p.subcategoria)),
  ];

  const toggleMenu = (categoria) => {
    setMenuAbierto(menuAbierto === categoria ? null : categoria);
  };

  const productosFiltrados = productos.filter((product) => {
    const matchesCategoria = categoriaSeleccionada ? product.categoria === categoriaSeleccionada : true;
    const matchesSubcategoria = subcategoriaSeleccionada ? product.subcategoria === subcategoriaSeleccionada : true;
    return matchesCategoria && matchesSubcategoria;
  });

  const irADetalle = (producto) => {
    navigate(`/detalle/${producto.id}`, { state: { producto } });
  };

  const comprobarFavorito = (producto) => {
    setFavoritos((prevFavoritos) => {
      const nuevosFavoritos = prevFavoritos.includes(producto.id)
        ? prevFavoritos.filter((id) => id !== producto.id)
        : [...prevFavoritos, producto.id];
      console.log("Favoritos actuales:", nuevosFavoritos);
      return nuevosFavoritos;
    });
  };

  const mostrarFavoritos = () => {
    const productosFavoritos = productos.filter((producto) => favoritos.includes(producto.id));
    return productosFavoritos;
  };

  // Filtro los productos a mostrar según la categoría seleccionada, o si es la categoría de favoritos
  const productosAFiltrar = categoriaSeleccionada === "favoritos" ? mostrarFavoritos() : productosFiltrados;

  return (
    <div className="absolute inset-0  w-screen bg-[#e0e1e6]">
      <Encabezado />
      <div className="relative w-screen bg-[#e0e1e6]">
        <nav className="bg-white shadow-lg rounded-lg sm:max-w-[60%] mx-auto mb-4 mt-4">
            <ul className="flex flex-wrap justify-between sm:justify-start space-x-4">
              <li>
                <button
                  onClick={() => {
                    setCategoriaSeleccionada("");
                    setSubcategoriaSeleccionada("");
                    setMenuAbierto(null);
                  }}
                  className="px-4 py-2 bg-white rounded hover:bg-gray-200"
                >
                  Ver Todos
                </button>
              </li>
              {categoriasDisponibles.map((categoria, index) => (
                <li key={index} className="relative">
                  <button
                    onClick={() => toggleMenu(categoria)}
                    className="px-4 py-2 bg-white rounded hover:bg-gray-200 flex justify-between items-center w-full"
                  >
                    {categoria}
                    <ChevronDownIcon className="w-5 h-5 text-gray-700" />
                  </button>
                  {menuAbierto === categoria && (
                    <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg w-44">
                      <ul className="py-2 text-gray-700">
                        {subcategoriasDisponibles(categoria).map((subcategoria, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => {
                                setCategoriaSeleccionada(categoria);
                                setSubcategoriaSeleccionada(subcategoria);
                                setMenuAbierto(null);
                              }}
                              className="block px-4 py-2 w-full text-left hover:bg-[#B692C2] rounded focus:outline-none focus:ring-2 focus:ring-black"
                            >
                              {subcategoria}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => setCategoriaSeleccionada("favoritos")}
                  className="px-4 py-2 bg-white rounded hover:bg-gray-200"
                >
                  Favoritos
                </button>
              </li>
            </ul>
        </nav>
        {/* productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-8 pt-2 px-8">
            {productosAFiltrar.map((product) => (
                <div key={product.id} className="relative transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#900c3f] shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow p-4">
                    <div className="relative">
                    <img
                        className="w-full h-72 object-cover"
                        src={product.image[0]}
                        alt={product.nombre}
                    />
                    <button
                        onClick={() => {
                            console.log("Producto seleccionado:", product);
                            irADetalle(product);
                          }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-all"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.329)" }}
                    >
                        <EyeIcon className="w-16 h-12 text-white" />
                    </button>
                    <button
                      onClick={() => comprobarFavorito(product)}
                      className={`absolute top-3 right-3 text-white p-2 rounded-full shadow-lg transition-all ${favoritos.includes(product.id) ? "bg-red-500 hover:bg-red-700" : "bg-white hover:bg-gray-200"}`}
                      >
                      <HeartIcon className={`w-6 h-6 ${favoritos.includes(product.id) ? "text-white" : "text-gray-400"}`} />
                    </button>
                    </div>
                    <div className="px-6 py-4">
                    <div className="font-semibold text-lg text-white mb-2">{product.nombre}</div>
                    <p className="text-white text-base">{product.precio}Bs</p>
                    </div>
                </div>
                </div>
            ))}
        </div>

      </div>
      <Pie />
    </div>
  );
};

export default Shop;
