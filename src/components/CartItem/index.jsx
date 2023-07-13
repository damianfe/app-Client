import { Image, ListGroup } from "react-bootstrap"
import PropTypes from 'prop-types'


export const CartItem = ({ drink }) => {
  const { strDrink, strDrinkThumb, price } = drink
  return (
    <ListGroup.Item className="d-flex gap-2">
      <Image src={strDrinkThumb} width={"80px"} />
      <div style={{ width: "100%" }}>
        <h5>{strDrink}</h5>
        <hr />
        <div className="d-flex justify-content-between">
          ${price}
        </div>

      </div>

    </ListGroup.Item>
  )
}


CartItem.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    price: PropTypes.number
  })


}