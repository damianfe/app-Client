import { useState } from "react";
import { CartCanvas } from "../CartCanvas";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/authProvider";
import Logo from '../../../public/drink-lg.png';
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Definir el estado para el menú móvil

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const { cart } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex items-center justify-between p-4 bg-customRed shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center" aria-label="Inicio">
        <img
          src={Logo}
          alt="Logo"
          className="w-20 h-auto md:w-24 lg:w-28"
        />
      </Link>

      {/* Menú de Navegación */}
      <nav className="hidden lg:flex space-x-6">
        <Link
          to="/productos"
          className="text-customWhite text-shadow-black hover:text-customOrange"
          aria-label="Productos"
        >
          Productos
        </Link>
        <div className="relative">
          <button
            aria-label="Explorar categorías"
            className="text-customWhite text-shadow-black hover:text-customOrange"
          >
            ¿Qué buscás?
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
            <Link
              to="/whiskys"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              aria-label="Whiskys"
            >
              Whiskys
            </Link>
            <Link
              to="/vinos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              aria-label="Vinos"
            >
              Vinos
            </Link>
            <Link
              to="/licores"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              aria-label="Licores"
            >
              Licores
            </Link>
          </div>
        </div>
        <div className="relative">
          <button
            aria-label="Opciones de usuario"
            className="text-customWhite text-shadow-black hover:text-customOrange"
          >
            Usuarios
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-lg p-2">
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              aria-label="Ingresá"
            >
              Ingresá
            </Link>
            <Link
              to="/register"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              aria-label="Registrate"
            >
              Registrate
            </Link>
          </div>
        </div>
      </nav>

      {/* Iconos y Botones */}
      <div className="flex items-center space-x-4">
        <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />

        {user ? (
          <div className="flex items-center space-x-4">
            <Link to="/user/profile" className="text-customWhite text-shadow-black hover:text-blue-600" aria-label="Perfil">
              <IconButton>
                <AccountCircleIcon />
                <span className="text-customWhite text-shadow-black ml-1 hidden md:inline">{user.name}</span>
              </IconButton>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outlined"
              startIcon={<LogoutIcon />}
              className="text-customWhite text-shadow-black hover:bg-gray-100"
              aria-label="Cerrar sesión"
            >
              Cerrar sesion
            </Button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link to="/login" aria-label="Iniciar sesión">
              <Button variant="outlined" className="text-customWhite text-shadow-black hover:bg-gray-100">
                <i className="fa-solid fa-right-to-bracket">Login</i>
              </Button>
            </Link>
            <Link to="/register" aria-label="Registrarse">
              <Button variant="outlined" className="text-gray-800 border-gray-800 hover:bg-gray-100">
                <i className="fa-solid fa-user-plus">Registro</i>
              </Button>
            </Link>
          </div>
        )}

        <div className="relative">
          <IconButton onClick={handleShowCart} aria-label="Ver carrito">
            <ShoppingCartIcon />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="primary"
            className="absolute -top-2 -right-2"
          />
        </div>
      </div>

      {/* Menú Móvil */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-gray-800"
          aria-label="Abrir menú"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {isNavOpen && (
          <nav className="absolute right-0 mt-2 w-full bg-white shadow-lg rounded-lg p-4">
            <Link to="/productos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Productos">
              Productos
            </Link>
            <Link to="/whiskys" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Whiskys">
              Whiskys
            </Link>
            <Link to="/vinos" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Vinos">
              Vinos
            </Link>
            <Link to="/licores" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Licores">
              Licores
            </Link>
            <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Ingresá">
              Ingresá
            </Link>
            <Link to="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" aria-label="Registrate">
              Registrate
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
