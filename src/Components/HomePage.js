import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <h1> {"Get Stronger"} </h1>
          <h3>Watch the your gym get hyped with technology</h3>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
