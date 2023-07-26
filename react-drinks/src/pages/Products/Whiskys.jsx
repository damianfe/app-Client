import { Container, Row, Col, Card} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './index.module.css';


const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;

export const Whiskyes = () => {

  const [whiskys, setWhiskys] = useState([]);


  useEffect(()=>{
    axios.get(`${apiURL}whiskys`)
    .then((response)=>{
      setWhiskys(response.data.whisky)
      console.log(response.data);
    })
    .catch((error) =>{
      console.error('ocurrió un error',error)
    })
  
  },[])
 console.log(whiskys);
 

 
  return (
    <div className={styles.product}>
      <h1 style={{
                            color: "white",
                            textShadow: "2px 2px 4px black"
                        }}>Whisky</h1>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
         {whiskys && whiskys.map((product) => (
              <Col key={product._id}>
                <Card className={styles.cardProduct}>
                  <Card.Img variant="top" src= {`${product.urlImage}`} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      
                      {`$ ${product.price}`}
                     
                    </Card.Text>
                 
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>

  )
}