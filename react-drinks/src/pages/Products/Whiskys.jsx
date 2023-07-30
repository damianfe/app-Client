import { Container, Row, Col, Card} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;

const ProductWrapper = styled.div`
  .product-title {
    color: white;
    text-shadow: 2px 2px 4px black;
  }
`;

const CardProduct = styled(Card)`
  .card-body {
    padding: 1rem;
  }
`;

export const Whiskyes = () => {

  const [whiskys, setWhiskys] = useState([]);

  useEffect(() => {
    axios.get(`${apiURL}whiskys`)
      .then((response) => {
        //console.log('Respuesta del servidor:', response);
        setWhiskys(response.data.whiskys);
      })
      .catch((error) => {
        console.error('Ocurrió un error:', error);
      });
  }, []);

  
    return (
      <ProductWrapper>
        <h1 className="product-title">Whisky</h1>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
            {Array.isArray(whiskys) ? (
              whiskys.map((product) => (
                <Col key={product._id}>
                  <CardProduct>
                    <Card.Img variant="top" src={product.urlImage} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{`$ ${product.price}`}</Card.Text>
                    </Card.Body>
                  </CardProduct>
                </Col>
              ))
            ) : (
              <p className="product-title">Cargando whiskys...</p>
            )}
          </Row>
        </Container>
      </ProductWrapper>
    );
}