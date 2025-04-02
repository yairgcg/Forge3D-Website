import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import SubscriptionForm from "./SubscriptionForm";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright d-flex align-items-center justify-content-center">
          <h3>Diseñado y Desarrollado por Forge3D</h3>
        </Col>

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

        <Col md="4" className="footer-copywright d-flex align-items-center justify-content-center">
          <h3>Copyright © {year} Forge3D</h3>
        </Col>

        <Col md="12" className="footer-subscription d-flex flex-column align-items-center mt-3">
          <h4 style={{ color: "white" }}>¡Suscríbete a nuestro boletín!</h4>
          <SubscriptionForm />
        </Col>


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
