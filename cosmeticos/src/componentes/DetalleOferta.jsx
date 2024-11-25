import { useParams } from "react-router-dom";
import prod1 from "../assets/promociones/oferta1.jpg"; 
import prod2 from "../assets/promociones/oferta2.jpg"; 
import prod3 from "../assets/promociones/oferta3.jpg"; 
import prod4 from "../assets/promociones/oferta4.jpg"; 
import prod5 from "../assets/promociones/oferta5.jpg"; 

const DetalleOferta = () => {
  const { id } = useParams(); 

  const ofertas = [
    { image: prod1, descuento: 'DESCUENTO DEL 40%' },
    { image: prod2, descuento: 'DESCUENTO DEL 20%' },
    { image: prod3, descuento: 'DESCUENTO DEL 30%' },
    { image: prod4, descuento: 'DESCUENTO DEL 5%' },
    { image: prod5, descuento: 'DESCUENTO DEL 10%' },
  ];

  // Obtener la oferta correspondiente según el ID
  const oferta = ofertas[id];

  if (!oferta) {
    return <div>Oferta no encontrada.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{oferta.descuento}</h1>
      <img src={oferta.image} alt={`Oferta ${id}`} className="mt-4 w-full h-auto" />
      <p className="mt-4">¡Aprovecha esta oferta exclusiva!</p>
    </div>
  );
};

export default DetalleOferta;
