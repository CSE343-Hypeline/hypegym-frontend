import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <h1> {"Get Stronger"} </h1>
          <h3>Watch the gym get hyped with technology</h3>
        </Row>
      </Container>
    </section>
  );
};
