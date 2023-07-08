import { Modal, Row, Col,Image } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"


export const DrinkModalDetail = () => {
    const { showModal, handleShowModalCLick, recipe } = useDrinks()

    if (!recipe) {
        // Manejar el caso cuando `recipe` es undefined
        return null; // Otra opción es mostrar un mensaje de error
    }

    const { strDrink, strDrinkThumb } = recipe

    const showIngredients = () => {
        const ingredients = []
        for (let i = 0; i <= 15; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>{recipe[`strIngredient${i}`]}{recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

    return (
        <Modal show={showModal} onHide={handleShowModalCLick}>
            <Row>
                <Col>
                    <Image
                        src={strDrinkThumb}
                        alt={`imagen de ${strDrink}`}
                        fluid
                        className={"rounded-start"}
                    />
                </Col>
                <Col>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {strDrink}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </Modal.Body>
                </Col>
            </Row>
        </Modal>
    )
}

