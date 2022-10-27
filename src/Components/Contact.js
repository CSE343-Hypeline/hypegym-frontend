import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/logo.svg";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              <img src={contactImg} alt="Contact Us" />
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              <div>
                <h2>Get In Touch</h2>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"></textarea>
                      <button type="submit">
                        <span>Send</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
