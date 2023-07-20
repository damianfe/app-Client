import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container style={{ backgroundColor: "red" }}>
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center">404</h1>
          <p className="text-center">Page not found</p>
        <Link to={'/'}>Volver al inicio</Link>
        </Col>
      </Row>
    </Container>
  );
}
