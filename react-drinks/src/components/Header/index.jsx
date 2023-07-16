import { useState } from "react";
import { CartCanvas } from "../CartCanvas";
import styles from "./Header.module.css";
import { Badge, Button } from "react-bootstrap";
import useCart from "../../hooks/useCart";

export default function Header() {

const [showCart, setShowCart] = useState(false);

const handleShowCart = () => setShowCart(true)
const handleCloseCart = () => setShowCart(false)

const {cart} = useCart()

  return (
    <header className={`d-flex justify-content-around py-5 ${styles.header}`}>

      <h1>Buscador de Bebidas</h1>
      <div className="position-relative">
      <Button variant="outline-light" size="lg" onClick={handleShowCart}>
      <i className="fa-solid fa-cart-shopping "></i>
      </Button>
      <Badge className="position-absolute top-50 start-50" pill bg="dark" >{cart.length}</Badge>
      </div>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart}/>
    </header>
  );
}
