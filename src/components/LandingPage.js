import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function LandingPage() {
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
    <Container fluid className="landing-page text-center">
      
      <Row className="hero-section align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h1 className="landing-title">
            Potencia tu marca con <span className="purple">3D Forge</span>
          </h1>
          <p className="landing-subtitle">
            Creamos experiencias digitales con Realidad Aumentada, Modelado 3D y más.
          </p>
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
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
        </Col>
        <Col md={6}>
          
        </Col>
      </Row>

      {/* Beneficios */}
      <Row className="benefits-section mt-5">
        <Col md={4}>
          <h3>🚀 Innovación</h3>
          <p>Utilizamos las últimas tecnologías en 3D y RA.</p>
        </Col>
        <Col md={4}>
          <h3>🎨 Creatividad</h3>
          <p>Diseños únicos que cautivan a tu audiencia.</p>
        </Col>
        <Col md={4}>
          <h3>📈 Resultados</h3>
          <p>Maximiza el impacto de tu marca con experiencias inmersivas.</p>
        </Col>
      </Row>

      {/* Botón de Acción */}
      <Row className="mt-5">
        <Col>
          <Button as={Link} to="/proyectos" variant="success" size="lg">
            Explora Nuestros Proyectos
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
