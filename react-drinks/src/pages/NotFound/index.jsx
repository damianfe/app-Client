import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-lg text-white mb-4">Page not found</p>
        <Link 
          to={'/'}
          className="text-blue-500 hover:underline"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
