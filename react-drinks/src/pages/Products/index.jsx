import { Container, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ImgWhisky from '../../../public/whisky2.jpg';
import Vinos from '../../../public/vino-tinto.png';
import Licores from '../../../public/licore.png';

// Definimos una animación de rebote llamada "bounceAnimation" usando keyframes
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Creamos un "styled-component" para el contenedor principal de los productos
const ProductWrapper = styled(Container)`
  .product {
    margin-bottom: 15px;
  }

  .containerProductBox {
    text-decoration: none;
    animation: ${bounceAnimation} 2s;
  }

  .containerProduct {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px;

    @media (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      flex-direction: row;
      justify-content: center;
    }

    @media (max-width: 1440px) {
      flex-direction: row;
      justify-content: center;
    }

    @media (max-width: 2560px) {
      flex-direction: row;
      justify-content: center;
    }
  }
`;

// Creamos un "styled-component" para el componente Card de los productos
const ProductCard = styled(Card)`
  position: relative;
  width: 17rem;

  .productCardOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .productCardImage {
    width: 100%;
    height: 290px;
    object-fit: contain;
  }

  .productCardTitle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    color: white;
    text-align: center;
    background-color: rgba(192, 56, 56, 0.801);
    font-size: 18px;
    font-weight: bold;
  }

  &.whiskys {
    background-color: #a94007;
  }

  &.vinos {
    background-color: #7c3030;
  }

  &.licores {
    background-color: #e0c49d;
  }
`;

export const Productos = () => {
  return (
    <ProductWrapper>
      <Row>
        <div className="containerProduct">
          <Link to="/whiskys" className="containerProductBox">
            <ProductCard as="div" className="whiskys">
              <Card.Title className="productCardTitle">Whiskys</Card.Title>
              <div className="productCardOverlay">
                <Card.Img src={ImgWhisky} className="productCardImage" />
              </div>
            </ProductCard>
          </Link>
          <Link to="/vinos" className="containerProductBox">
            <ProductCard as="div" className="vinos">
              <Card.Title className="productCardTitle">Vinos</Card.Title>
              <div className="productCardOverlay">
                <Card.Img src={Vinos} className="productCardImage" />
              </div>
            </ProductCard>
          </Link>
          <Link to="/licores" className="containerProductBox">
            <ProductCard as="div" className="licores">
              <Card.Title className="productCardTitle">Licores</Card.Title>
              <div className="productCardOverlay">
                <Card.Img src={Licores} className="productCardImage" />
              </div>
            </ProductCard>
          </Link>
        </div>
      </Row>
    </ProductWrapper>
  );
};
