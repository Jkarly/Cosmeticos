import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./componentes/Inicio";
import Shop from "./componentes/Shop";
import Detalle from "./componentes/Detalle";
import Ofertas from "./componentes/Ofertas";
import Contacto from "./componentes/Contacto";
import Perfil from "./componentes/Perfil";
import Carrito from "./componentes/Carrito";
import Login from "./componentes/Login";
import Registrar from "./componentes/Registrar";
import { UsuarioProvider } from "./componentes/UsuarioContext";
import DetalleOferta from "./componentes/DetalleOferta";

const MisRoutes = () => {
  return (
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/ofertas/:id" element={<DetalleOferta />} />
          <Route path="/ofertas" element={<Ofertas/>} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  );
};

export default MisRoutes;
