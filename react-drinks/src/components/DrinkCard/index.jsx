import { Card, Col, Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import useDrinks from "../../hooks/useDrinks";
import styles from './index.module.css'
import useCart from "../../hooks/useCart";
import { types } from '../../types'
import Swal from 'sweetalert2'
import useAuth from "../../hooks/authProvider";

export const DrinkCard = ({ drink }) => {
    const { strDrinkThumb, strDrink, idDrink } = drink;
    const { handleDrinkIdClick } = useDrinks()

    const { handleToggleFavorite, favorites, user } = useAuth()

    const { dispatch } = useCart()


    const handleAddCart = () => {

        if (user) {
            dispatch({
                type: types.addItemToCart,
                payload: drink,
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Agregado Al Carrito',
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Debes estar logeado para agregar al carrito!',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }
    
    const handleFavorite = () => {
        user ?
            handleToggleFavorite(idDrink)
            :
            Swal.fire({

                icon: 'error',
                title: 'Debes estar logeado!',
                showConfirmButton: false,
                timer: 1500
            })

    }
    return (
        <Col md={6} lg={3} style={{background:"tranparent"}}>
            <Card className='mb-4' styles={types.strDrinkThumb}>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`imagen de ${strDrink}`}
                />
                <Card.Body style={{background:"darksalmon"}}>
                    <Card.Title className={styles.strDrink}>{strDrink}</Card.Title>
                    <a className="text-danger" onClick={handleFavorite}>

                        {
                            favorites.includes(idDrink) ?
                                <i className="fa-solid fa-heart fa-lg" />

                                :

                                <i className="fa-regular fa-heart fa-lg" />
                        }
                    </a>
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
