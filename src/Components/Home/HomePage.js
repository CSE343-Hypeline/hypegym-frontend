import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { button } from "../API";

const HomePage = () => {
  useEffect(() => {
    pingTest();
  }, []);

  const pingTest = () => {
    button()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <h1> {"Get Stronger"} </h1>
          <h3>Watch the your gym get hyped with Hypeline Technologies</h3>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
