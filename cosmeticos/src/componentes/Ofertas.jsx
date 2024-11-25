import Encabezado from "./Encabezado";
import Pie from "./Pie";
// Productos
import prod1 from "../assets/promociones/oferta1.jpg"; 
import prod2 from "../assets/promociones/oferta2.jpg"; 
import prod3 from "../assets/promociones/oferta3.jpg"; 
import prod4 from "../assets/promociones/oferta4.jpg"; 
import prod5 from "../assets/promociones/oferta5.jpg"; 

const Ofertas = () => {
    const ofertas = [
        { image: prod1, descuento: 'DESCUENTO DEL 40%' },
        { image: prod2, descuento: 'DESCUENTO DEL 20%' },
        { image: prod3, descuento: 'DESCUENTO DEL 30%' },
        { image: prod4, descuento: 'DESCUENTO DEL 5%' },
        { image: prod5, descuento: 'DESCUENTO DEL 10%' },
    ];

    return (
        <>
            <div className="absolute inset-0 w-full bg-[#e0e1e6]">
                <Encabezado />
                <div className="text-center py-8 px-4">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">¡Canjea tus puntos y disfruta de increíbles ofertas!</h3>
                    <div className="text-lg text-gray-700">
                        <p className="mb-2">✨ Por cada 100 Bs que compres en productos, recibes 5 puntos.</p>
                        <p className="mb-2">🎁 Por cada 100 puntos, obtén un 2x1 en cualquier producto.</p>
                        <p className="mb-2">🎉 Por cada 200 puntos, ¡puedes canjear productos exclusivos!</p>
                        <p>💥 Por cada 500 puntos, recibe un vale del 50% de descuento en tu compra total.</p>
                    </div>
                </div>
                <div className="relative w-screen min-h-screen bg-[#e0e1e6]">
                    <h3 className="text-2xl font-bold text-[#4D2DB7] mb-4">¡Además, ven a nuestra tienda física y disfruta de estos fabulosos descuentos. ¡Te esperamos con grandes ofertas!</h3>
                    <div className="grid grid-cols-3 gap-4 p-4">
                        <div className="relative group rounded-lg shadow-md col-span-1">
                            <img
                                src={ofertas[1].image}
                                alt="Producto 1"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs sm:text-sm md:text-base p-2 rounded shadow-lg">
                                {ofertas[1].descuento}
                            </span>
                        </div>
                        <div className="flex flex-col space-y-4 col-span-1">
                            <div className="relative group rounded-lg shadow-md w-full h-full">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src={ofertas[2].image}
                                        alt="Producto 3"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs sm:text-sm md:text-base p-2 rounded shadow-lg">
                                    {ofertas[2].descuento}
                                </span>
                            </div>
                            <div className="relative group rounded-lg shadow-md w-full h-full">
                                <div className="aspect-w-1 aspect-h-1">
                                    <img
                                        src={ofertas[0].image}
                                        alt="Producto 4"
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs sm:text-sm md:text-base p-2 rounded shadow-lg">
                                    {ofertas[0].descuento}
                                </span>
                            </div>
                        </div>
                        <div className="relative group rounded-lg shadow-md col-span-1">
                            <img
                                src={ofertas[3].image}
                                alt="Producto 2"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs sm:text-sm md:text-base p-2 rounded shadow-lg">
                                {ofertas[3].descuento}
                            </span>
                        </div>

                    
                        <div className="relative group rounded-lg shadow-md col-span-3">
                            <img
                                src={ofertas[4].image}
                                alt="Producto 5"
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs sm:text-sm md:text-base p-2 rounded shadow-lg">
                                {ofertas[4].descuento}
                            </span>
                        </div>
                    </div>
                </div>
                <Pie />
            </div>
        </>
    );
};

export default Ofertas;
