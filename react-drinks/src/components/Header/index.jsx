import { useState } from "react";
import { CartCanvas } from "../CartCanvas";
import styles from "./Header.module.css";
import { Badge, Button } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import useAuth from "../../hooks/authProvider";
import Logo from '../../../public/drink-lg.png'
export default function Header() {

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  const { cart } = useCart()
  const { user, logout } = useAuth()
  const handleLogout = () => {
    logout()
  }

  return (
    <header className={`d-flex justify-content-between p-3 ${styles.header}`}>
      <Link to={"/"} className="nav-link">
        <Card.Img
          variant='top'
          src={Logo}
          alt={`imagen de ${Logo}`}
          style={{width:"42%", borderRadius: "25px"}}
        /></Link>

      <div className="d-flex gap-2 align-items-center">
        {
          user ?
            (
              <div className="d-flex gap-2">

                <Link to={"/user/profile"} className="btn btn-lg btn-outline-light d-flex gap-2 align-items-center">
                  <i className="fa-solid fa-user"></i>
                  <span>{user.name}</span>
                </Link>

                <Button onClick={handleLogout} variant="outline-light" size="lg">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Button>
              </div>
            ) : (
              <>
                <Link to={"/login"} className="btn btn-lg btn-outline-light">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
                <Link to={"/register"} className="btn btn-lg btn-outline-light">
                  <i className="fa-solid fa-user-plus"></i>
                </Link>
              </>
            )
        }

        <div className="position-relative">
          <Button variant="outline-light" size="lg" onClick={handleShowCart}>
            <i className="fa-solid fa-cart-shopping "></i>
          </Button>
          <Badge className="position-absolute top-50 start-50" pill bg="dark" >{cart.length}</Badge>
        </div>
      </div>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
    </header>
  );
}
