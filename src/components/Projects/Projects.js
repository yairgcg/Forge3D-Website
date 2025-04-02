import React from "react";
import Particle from "../Particle";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import arImage from "../../Assets/Projects/AR.jpeg";  
import vrImage from "../../Assets/Projects/VR.jpeg";  // Cambiar con la imagen de VR
import modelingImage from "../../Assets/Projects/Modelado.jpg"; // Cambiar con la imagen de Modelado 3D
import animationImage from "../../Assets/Projects/Animacion.jpg"; // Cambiar con la imagen de Animación 3D
import videoEditingImage from "../../Assets/Projects/Video.png";  // Cambiar con la imagen de Edición de Video
import webDevImage from "../../Assets/Projects/website.jpg";  // Cambiar con la imagen de Desarrollo Web

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Nuestros<strong className="purple"> proyectos</strong>
        </h1>
        <p style={{ color: "white" }}>
          Nuestras <strong className="purple">áreas</strong>  de especialización son las siguientes.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Tarjeta para AR */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={arImage} alt="AR Area" />
              <Card.Body>
                <Card.Title>Realidad Aumentada (AR)</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Exploramos experiencias interactivas mediante AR, permitiendo
                  superponer elementos digitales en el mundo real a través de dispositivos móviles.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-ar"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta para VR */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={vrImage} alt="VR Area" />
              <Card.Body>
                <Card.Title>Realidad Virtual (VR)</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Creamos experiencias inmersivas en entornos virtuales utilizando tecnología VR.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-vr"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta para Modelado 3D */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={modelingImage} alt="Modelado 3D" />
              <Card.Body>
                <Card.Title>Modelado 3D</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Diseñamos y creamos modelos 3D para diversas aplicaciones, incluyendo videojuegos y simulaciones.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-modelado"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta para Animación 3D */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={animationImage} alt="Animación 3D" />
              <Card.Body>
                <Card.Title>Animación 3D</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Creación de animaciones 3D de alta calidad para simulaciones, videojuegos y más.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-animacion"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta para Edición de Video */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={videoEditingImage} alt="Edición de Video" />
              <Card.Body>
                <Card.Title>Edición de Video</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Realizamos edición y post-producción de videos para todo tipo de proyectos, incluidos entornos virtuales.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-video-editing"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tarjeta para Desarrollo Web */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={webDevImage} alt="Desarrollo Web" />
              <Card.Body>
                <Card.Title>Desarrollo Web</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Desarrollamos aplicaciones web y sitios interactivos para proporcionar experiencias inmersivas en entornos virtuales.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/tu-repositorio-webdev"
                  target="_blank"
                >
                  Ver Repositorio
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
