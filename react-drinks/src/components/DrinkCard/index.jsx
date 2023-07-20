import { Card, Col, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import useDrinks from "../../hooks/useDrinks";
import styles from './index.module.css'
import useCart from "../../hooks/useCart";
import { types } from '../../types'
import Swal from 'sweetalert2'

export const DrinkCard = ({ drink }) => {
    const { strDrinkThumb, strDrink, idDrink } = drink;
    const { handleDrinkIdClick } = useDrinks()

    const { dispatch } = useCart()


    const handleAddCart = () => {
        
        dispatch({
            type: types.addItemToCart,
            payload: drink
        })
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado Al Carrito',
        showConfirmButton: false,
        timer: 1500
      })

    return (
        <Col md={6} lg={3}>
            <Card className='mb-4' styles={types.strDrinkThumb}>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`imagen de ${strDrink}`}
                />
                <Card.Body>
                    <Card.Title className={styles.strDrink}>{strDrink}</Card.Title>
                    <Button
                        variant={"warning"}
                        className="w-100 text-uppercase mt-2"
                        onClick={() => {
                            handleDrinkIdClick(idDrink)


                        }}
                    >
                        Ver Receta
                    </Button>
                    <Button
                        variant={"danger"}
                        className="w-100 text-uppercase mt-2"
                        onClick={handleAddCart}
                    >
                        Comprar
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

DrinkCard.propTypes = {
    drink: PropTypes.object.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired
};
DrinkCard.defaultProps = {
    strDrinkThumb: 'https://codigogenesis.com/genesis/2022/04/imagen-placeholder-por-defecto-WooCommerce.png',
    strDrink: 'Nombre De La Bebida'
}