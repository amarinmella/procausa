
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Página no encontrada | ProCausa';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-law-light-gray px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="font-serif text-8xl font-bold text-law-navy mb-4">404</h1>
        <p className="text-2xl text-law-dark-gray mb-6">Página no encontrada</p>
        <p className="text-law-dark-gray/80 mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center bg-law-navy text-white px-6 py-3 rounded hover:bg-law-navy/90 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Volver al inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
