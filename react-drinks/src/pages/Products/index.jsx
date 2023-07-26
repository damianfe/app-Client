import { Container, Card, Row } from 'react-bootstrap'
import ImgWhisky from '../../../public/Whiskys.jpg'
import Vinos from '../../../public/vino-tinto.png'
import Licores from '../../../public/licore.png'
import { Link } from 'react-router-dom'
import styles from './index.module.css';


export const Productos = () => {
    return (
        <Container >
            <Row  >
                <div className={styles.containerProduct}>
                    <Link to="/whiskys" className={styles.containerProductBox}>
                        <Card border="warning" style={{ width: '18rem', backgroundColor: '#A94007' }}>

                            <Card.Title className='text-white text-center'>Whiskys</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={ImgWhisky} />
                                <Card.Body className="position-absolute top-0 start-0">


                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                    <Link to="/vinos"className={styles.containerProductBox}>
                        <Card border="danger" style={{ width: '18rem', backgroundColor: '#7C3030' }}>
                            <Card.Title className="text-white text-center">Vinos</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Vinos} className="w-100" />
                                <Card.Body className="position-absolute top-0 start-0">

                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                    <Link to="/licores" className={styles.containerProductBox}>
                        <Card border="info" style={{ width: '18rem', backgroundColor: '#E0C49D' }}>
                            <Card.Title className='text-white text-center'>Licores</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Licores} className='w-100' />
                                <Card.Body className="position-absolute top-0 start-0">

                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                </div>
            </Row>
            
        </Container>
    )
}