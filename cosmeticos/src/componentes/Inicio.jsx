import Encabezado from "./Encabezado"; 
import Pie from "./Pie";
import img1 from "../assets/1.jpg"; 
import img2 from "../assets/productos/Fondos2.png"
import img3 from "../assets/chic1.jpg"; 
import img4 from "../assets/chic2.jpg"; 
import img5 from "../assets/chic3.jpg"; 
import { useState,useEffect  } from 'react';
//Carrusel
import carru1 from "../assets/carrusel/1.jpg"; 
import carru2 from "../assets/carrusel/2.jpg"; 
import carru3 from "../assets/carrusel/4.jpg"; 
import carru4 from "../assets/carrusel/6.jpg"; 
import carru5 from "../assets/carrusel/9.jpg"; 
import carru6 from "../assets/carrusel/8.jpg"; 
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"; 
import { useNavigate } from "react-router-dom";


const images = [
    { src: carru1, alt: 'Descripción de la imagen 1' },
    { src: carru2, alt: 'Descripción de la imagen 2' },
    { src: carru3, alt: 'Descripción de la imagen 3' },
    { src: carru4, alt: 'Descripción de la imagen 4' },
    { src: carru5, alt: 'Descripción de la imagen 5' },
    { src: carru6, alt: 'Descripción de la imagen 6' }
];

const Inicio = () => {
    const [esCelular, setEsCelular] = useState(false); 
    const [indiceImg, setIndiceImg] = useState(0);   
    useEffect(() => {
        const handleResize = () => {
            setEsCelular(window.innerWidth <= 640);
        };
        handleResize(); 
        window.addEventListener('resize', handleResize);  
        return () => {
            window.removeEventListener('resize', handleResize);  
        };
    }, []);
    // Siguiente imagen
    const siguienteGrupo = () => {
        if (indiceImg + (esCelular ? 1 : 3) < images.length) {
            setIndiceImg(indiceImg + (esCelular ? 1 : 3));
        } else {
            // Si llega al final, vuelve al principio
            setIndiceImg(0);
        }
    };
    

    // imagen anterior
    const anteriorGrupo = () => {
        if (indiceImg - (esCelular ? 1 : 3) >= 0) {
            setIndiceImg(indiceImg - (esCelular ? 1 : 3));
        } else {
            // Si está en el inicio, vuelve al final
            setIndiceImg(images.length - (esCelular ? 1 : 3));
        }
    };
    
    // Obtener el grupo de imágenes actual
    const ImgActual = images.slice(indiceImg, indiceImg + (esCelular ? 1 : 3));
    useEffect(() => {
        const intervalId = setInterval(() => {
            siguienteGrupo(); 
        }, 5000); 
    
        return () => clearInterval(intervalId); // Limpio el intervalo al sacar el componente
    }, [indiceImg]);
    

    const [mostrarMas, setMostrarMas] = useState(false);
    const activarTexto = () => {
        setMostrarMas(!mostrarMas);
    };
    const navegar = useNavigate();
    return (
        <>
            <div className="absolute inset-0 w-full bg-[#e0e1e6]">
                <Encabezado />
                <div className="relative w-screen h-screen">
                    {/* 1er fondo */}
                    <img 
                        src={img1} 
                        alt="Imagen de fondo" 
                        className="absolute inset-0 w-full h-full object-cover" 
                    />
                    {/* 2do fondo */}
                    <img 
                        src={img2} 
                        alt="Segundo Fondo" 
                        className="absolute inset-0 w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[480px] object-cover opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 sm:p-0"
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white pt-16 px-4 sm:px-6">
                        <div className="text-center">
                            <h1 className="text-[20px] sm:text-[24px] md:text-[32px] font-bold mb-2">
                                MAQUÍLLATE A TU ESTILO
                            </h1>
                            <p className="text-[15px] sm:text-[14px] mb-4 break-words">
                                Porque todos merecemos cosas únicas!<br/>
                                Acumula puntos y canjelos en productos
                            </p>

                            <button className="bg-white text-purple-500 font-semibold py-1 px-3 sm:py-2 sm:px-4 rounded-full hover:bg-purple-500 hover:text-white transition duration-300 w-full sm:w-auto"
                                onClick={() => navegar("/ofertas")}>  
                                Ver Más
                            </button>
                        </div>
                    </div>
                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-[#e0e1e6] py-4 px-2 w-screen min-h-[500px]">
                    {/* Primera columna con texto */}
                    <div className="p-4 sm:p-12">
                        <h1 className="text-3xl sm:text-4xl font-bold text-purple-600">PORQUÉ NUESTROS CLIENTES NOS ESCOGEN</h1>
                        <p className="mt-4 text-gray-600 text-sm sm:text-base text-justify">
                        Nuestros clientes nos eligen por la calidad de nuestros productos, el compromiso con la belleza natural y sostenible, y una atención personalizada que asegura una experiencia de compra única y confiable.
                        </p>
                        {mostrarMas && (
                            <p className="mt-4 text-gray-600 text-sm sm:text-base text-justify">
                                Al elegirnos, no solo accedes a productos de alta calidad, sino que también te unes a una comunidad que valora la sostenibilidad y el bienestar. Nuestro compromiso con la satisfacción del cliente es total, brindando atención personalizada en cada compra para garantizar que cada experiencia sea única y memorable.
                            </p>
                        )}
                        <button
                            onClick={activarTexto}
                            className="mt-8 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                            >
                            {mostrarMas ? 'LEER MENOS' : 'LEER MÁS'}
                        </button>
                        
                    </div>

                    {/* Segunda columna con imágenes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 sm:ml-2">
                        <div className="grid grid-rows-2 gap-2">
                            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform group-hover:translate-y-[-10px]">
                                <img 
                                src={img5} 
                                alt="Imagen 1" 
                                className="w-full h-[230px] object-cover transition-transform duration-300 group-hover:scale-105" 
                                />
                            </div>
                            
                            <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform group-hover:translate-y-[-10px]">
                                <img 
                                src={img4} 
                                alt="Imagen 2" 
                                className="w-full h-[230px] object-cover transition-transform duration-300 group-hover:scale-110" 
                                />
                            </div>
                        </div>
                        
                        {/* Segunda columna con una imagen grande */}
                        <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform group-hover:translate-y-[-10px]">
                        <img 
                            src={img3} 
                            alt="Imagen 3" 
                            className="w-full h-[470px] object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                        </div>
                    </div>
                </div>


                <div className="relative w-screen pt-8 bg-[#e0e1e6]">
                    <div className="flex justify-center items-center bg-[#e0e1e6]">
                        {/* Botón anterior */}
                        <button onClick={anteriorGrupo} className="text-black mx-2 p-2">
                            <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        <div className="flex space-x-2 overflow-hidden">
                            <div className="flex flex-nowrap">
                                {ImgActual.map((image, index) => (
                                    <div key={index} className="rounded-full p-2 border border-white flex justify-center items-center overflow-hidden">
                                        <img 
                                            src={image.src} 
                                            alt={image.alt} 
                                            className={`object-cover ${esCelular ? 'w-32 h-32' : 'w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-80 lg:h-80'} rounded-full`} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botón siguiente */}
                        <button onClick={siguienteGrupo} className="text-black mx-2 p-2">
                            <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>
                    </div>

                    <div className="flex justify-center items-center bg-[#e0e1e6] py-4">
                        <button 
                            onClick={() => navegar("/shop")}   
                            className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 w-full sm:w-auto"
                        >
                            Ver más
                        </button>
                    </div>
                </div>


                
                <div className="relative w-screen pt-8 bg-[#e0e1e6] pb-4">
                    <div className="flex flex-col items-center bg-[#e0e1e6] py-2 px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#721d67] mb-4 text-center">
                            Únete a nosotros
                        </h1>
                        <p className="text-black text-center mb-6 text-sm sm:text-base md:text-lg">
                            Obtén un 10% de descuento en tu primer pedido y mantente al día con nuestras últimas ofertas.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="mail"
                                required
                                placeholder="Ingresa tu email aquí"
                                className="w-full sm:w-auto px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                className="bg-white text-purple-500 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300 w-full sm:w-auto"
                                onClick={() => alert("¡Estás Suscrit@!")}
                            >Suscribirse</button>
                        </div>
                    </div>
                </div>

                <Pie />
            </div>
        </>
    );
};

export default Inicio;
