import { Modal, Row, Col, Image, Button} from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";
import useCart from "../../hooks/useCart";
import { types } from "../../types";
import { getDrinkById } from "../../helpers";

export const DrinkModalDetail = () => {
  const { showModal, handleShowModalClick, recipe, drinks } = useDrinks();
  
  const { idDrink,strDrink, strDrinkThumb, strInstructions } = recipe;

  const showIngredients = () => {
    const ingredients = [];
    for (let i = 0; i < 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={`ingredient-${i}`}>
            {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };
  const { dispatch } = useCart()


  const handleAddCart = () => {

  const drink = getDrinkById(drinks,idDrink)
      dispatch({
          type: types.addItem,
          payload: drink
      })
  }

  return (
    <Modal show={showModal} onHide={handleShowModalClick} size="xl" centered>
      <Row style={{background:"darksalmon"}}>
        <Col>
          <Image src={strDrinkThumb} fluid className="rounded-start" />
        </Col>
        <Col>
          <Modal.Header closeButton>
            <Modal.Title>{strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body  className="d-flex flex-column">
            <div  style={{background:"darksalmon"}}>
            <h4>Instructions</h4>
            <p>{strInstructions}</p>
            <h4>Ingredients & Measures</h4>
            <ul>{showIngredients()}</ul>
            </div>
            <Button
                        variant={"danger"}
                        className="w-100 text-uppercase mt-2"
                        onClick={handleAddCart}
                    >
                        Comprar
                    </Button>
            
  
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};
