import { Modal, Row, Col, Image} from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";

export const DrinkModalDetail = () => {
  const { showModal, handleShowModalClick, recipe } = useDrinks();
  
  const { strDrink, strDrinkThumb, strInstructions } = recipe;

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

  return (
    <Modal show={showModal} onHide={handleShowModalClick} size="xl" centered>
      <Row>
        <Col>
          <Image src={strDrinkThumb} fluid className="rounded-start" />
        </Col>
        <Col>
          <Modal.Header closeButton>
            <Modal.Title>{strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <h4>Instructions</h4>
            <p>{strInstructions}</p>
            <h4>Ingredients & Measures</h4>
            <ul>{showIngredients()}</ul>
            
            
  
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};
