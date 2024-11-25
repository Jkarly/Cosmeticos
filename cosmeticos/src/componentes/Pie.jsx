import { useState } from "react";

const Pie = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte! Hemos enviado un mensaje a tu correo.");
    setEmail(""); 
  };

  return (
    <footer className="relative w-screen bg-[#571f63] text-white py-8">
     
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Horarios de apertura */}
        <div>
          <h4 className="text-lg font-bold mb-4">HORARIOS DE APERTURA</h4>
          <ul>
            <li>Lunes-viernes: 05:00 A.M. - 11:00 P.M.</li>
            <li>Sábado: 07:00 A.M. - 09:00 P.M.</li>
            <li>Domingo: Cerrado</li>
            <li>Festivos: Cerrado</li>
          </ul>
        </div>

        {/* Noticias */}
        <div>
          <h4 className="text-lg font-bold mb-4">NOTICIAS</h4>
          <p className="mb-2">
            ✨ Nueva línea de cosméticos con descuentos increíbles. ¡Descúbrela ahora!
          </p>
          <p>
            🌸 Venta especial con hasta un 55% de descuento en productos seleccionados.
          </p>
        </div>

        {/* Suscribir */}
        <div>
          <h4 className="text-lg font-bold mb-4">SUSCRÍBETE</h4>
          <p className="mb-4">Recibe actualizaciones y ofertas exclusivas directamente en tu correo.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tuemail@example.com"
              className="w-full px-4 py-2 mb-2 text-black rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-400 hover:bg-purple-500 text-white py-2 rounded-md"
            >
              SUSCRIBIRME
            </button>
          </form>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-lg font-bold mb-4">CONTACTO</h4>
          <p>📍 Av. La Esperanza C/Country et al Shoppen</p>
          <p>📧 <a href="mailto:TodayspaGuapas2374@outlook.com" className="underline">TodayspaGuapas2374@outlook.com</a></p>
          <p>📞 +123 456 7890</p>
          <div className="mt-4 flex space-x-4">
            {/* Redes sociales */}
            <a href="#" className="hover:opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                alt="Twitter"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://play-lh.googleusercontent.com/-eFRwLcNm0Ax43uXu5BrXIwhuGC7vm7N2OFRqVuMCVQxYE7Ca3Xdr5xvGmnYGoUO8jfm"
                alt="TikTok"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 TodayspaGuapas. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Pie;
