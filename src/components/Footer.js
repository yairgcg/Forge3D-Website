import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí podrías agregar una función para enviar los datos a un backend
  };

  return (
    <Container fluid className="footer">
      <Row>

        {/* Formulario de Contacto */}
        <Col md="12" className="d-flex flex-column align-items-center">
          <h2 className="text-center mb-4" style={{ color: "white" }}>Contáctanos</h2>
          <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", width: "100%" }}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Ingresa tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ maxWidth: "400px", margin: "0 auto" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingresa tu correo"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ maxWidth: "400px", margin: "0 auto" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Escribe tu mensaje"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ maxWidth: "400px", margin: "0 auto" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100" style={{ maxWidth: "400px", marginBottom: "20px", marginLeft: "auto", marginRight: "auto" }}>
              Enviar Mensaje
            </Button>


          </Form>
        </Col>

        {/* Texto "Diseñado y Desarrollado" alineado correctamente */}
        <Col md="4" className="footer-copywright d-flex justify-content-center align-items-center">
          <h3 style={{ color: "white" }}>Diseñado y Desarrollado por Forge3D</h3>
        </Col>

        {/* Links de Políticas */}
        <Col md="4" className="footer-links d-flex justify-content-center align-items-center">
          <Link to="/faq" style={{ color: "white", textDecoration: "none", fontWeight: "bold", margin: "0 10px" }}>
            Preguntas Frecuentes
          </Link>
          <Link to="/privacy" style={{ color: "white", textDecoration: "none", fontWeight: "bold", margin: "0 10px" }}>
            Política de Privacidad
          </Link>
          <Link to="/terms-of-service" style={{ color: "white", textDecoration: "none", fontWeight: "bold", margin: "0 10px" }}>
            Términos de Servicio
          </Link>
        </Col>

        {/* Texto "Copyright" alineado correctamente */}
        <Col md="4" className="footer-copywright d-flex justify-content-center align-items-center">
          <h3 style={{ color: "white" }}>Copyright © {year} Forge3D</h3>
        </Col>

        {/* Redes sociales */}
        <Col md="12" className="footer-body d-flex justify-content-center mt-3">
          <ul className="footer-icons d-flex gap-3 list-unstyled">
            <li className="social-icons">
              <a href="https://github.com/gallardohjl2" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "24px" }}>
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.tiktok.com/@3d.forge1?_t=ZM-8vA7BAT73R9&_r=1" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "24px" }}>
                <FaTiktok />
              </a>
            </li>
            <li className="social-icons">
              <a href="https://www.facebook.com/share/1Bdiuk5kKC/" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "24px" }}>
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
