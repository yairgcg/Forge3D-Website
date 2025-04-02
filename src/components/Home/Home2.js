import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import avatar from "../../Assets/Avatar.png";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Home2() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Por favor, ingresa un correo válido.");
      return;
    }
    setMessage("¡Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTENOS <span className="purple"> PRESENTARNOS </span>
            </h1>
            <p className="home-about-body">
              En 3D Forge, transformamos ideas en experiencias digitales impactantes. 🚀
              <br />
              <br />
              Con experiencia en{" "}
              <i>
                <b className="purple">
                  Unity, Unreal Engine, Blender, Maya, Photoshop, Premiere Pro y más
                </b>
              </i>
              , creamos contenido visual de alta calidad, aplicaciones interactivas y estrategias digitales que llevan tu marca al siguiente nivel.
              <br />
              <br />
              Explora nuestro portafolio y descubre cómo podemos potenciar{" "}
              <i>
                <b className="purple">tu negocio</b>
              </i>{" "}
              con tecnología de vanguardia.
            </p>

            {/* Formulario de Suscripción */}
            <div className="landing-subscription mt-4">
              <h2 className="landing-title">¡Suscríbete a nuestro boletín!</h2>
              <p>Recibe las últimas novedades y ofertas exclusivas.</p>
              <Form onSubmit={handleSubmit} className="mt-3">
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo para recibir novedades"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 email-input"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Suscribirse
                </Button>
              </Form>
              {message && <Alert variant="success" className="mt-2">{message}</Alert>}
            </div>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRANOS</h1>
            <p>
              Siéntete libre de <span className="purple">contactarnos</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gallardohjl2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@3d.forge1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTiktok />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/share/1Bdiuk5kKC/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
