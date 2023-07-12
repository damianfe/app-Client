import { ListGroup } from "react-bootstrap"
import PropTypes from 'prop-types'


export const CartItem = ({ drink }) => {
  const { strDrink } = drink
  return (
    <ListGroup.Item>{strDrink}</ListGroup.Item>
  )
}


CartItem.propTypes = {
drink : PropTypes.shape({
  strDrink : PropTypes.string
})

  
}