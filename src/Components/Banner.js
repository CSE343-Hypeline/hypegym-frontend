import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { Col } from "react-bootstrap";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1> {"Get Stronger"} </h1>
            <button onClick={() => console.log("connect")}>
              {" "}
              Let's Connect <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>

          <Col xs={12} md={6} xl={7}>
            <h1>H</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
