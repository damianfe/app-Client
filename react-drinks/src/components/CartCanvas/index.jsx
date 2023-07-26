import { Button, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types'
import useCart from "../../hooks/useCart"
import { CartItem } from "../CartItem"
import Swal from 'sweetalert2'
import { types } from "../../types"
export const CartCanvas = ({ showCart, handleCloseCart }) => {

  const { cart,dispatch } = useCart()
  const cleanCart = () =>{
    dispatch({
      type:types.cleanCart,
      payload : {}  
    })
  } 
  const handleConfirm = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Compra Realizada!',
        showConfirmButton: false,
        timer: 1500
    })
    cleanCart()
}

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end" style={{ backgroundColor: "#b6151080" }}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{
                  color: "white",
                  textShadow: "2px 2px 4px black"
                }}>Mi Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cart.length ? (
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <ListGroup>

                {
                  cart.map(drink => <CartItem key={drink.idDrink} drink={drink} />)
                }

              </ListGroup>
            </div>
            <div className="d-flex justify-content-center gap-2 mt-2">
              <Button variant="secondary" onClick={cleanCart}>Vaciar el carrito </Button>
              <Button variant="danger"onClick={handleConfirm}>Confirmar Compra</Button>
            </div>
          </div>

        ) : (
          <p>No hay productos agregados</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  )
}
CartCanvas.propTypes = {
  showCart: PropTypes.bool,
  handleCloseCart: PropTypes.func
};