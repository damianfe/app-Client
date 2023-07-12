import { useState } from "react";
import { CartCanvas } from "../CartCanvas";
import styles from "./Header.module.css";
import { Button } from "react-bootstrap";

export default function Header() {

const [showCart, setShowCart] = useState(false);

const handleShowCart = () => setShowCart(true)
const handleCloseCart = () => setShowCart(false)

  return (
    <header className={`d-flex justify-content-around py-5 ${styles.header}`}>

      <h1>Buscador de Bebidas</h1>
      <Button variant="outline-light" size="lg" onClick={handleShowCart}>
      <i className="fa-solid fa-cart-shopping fa-lg"></i>
      </Button>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart}/>
    </header>
  );
}
