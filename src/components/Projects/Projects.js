import React from "react";
import Particle from "../Particle";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import arImage from "../../Assets/Projects/AR.jpeg";
import vrImage from "../../Assets/Projects/VR.jpeg";  // Cambiar con la imagen de VR
import modelingImage from "../../Assets/Projects/Modelado.jpg"; // Cambiar con la imagen de Modelado 3D
import animationImage from "../../Assets/Projects/Animacion.jpg"; // Cambiar con la imagen de Animación 3D
import videoEditingImage from "../../Assets/Projects/Video.png";  // Cambiar con la imagen de Edición de Video
import webDevImage from "../../Assets/Projects/website.jpg";  // Cambiar con la imagen de Desarrollo Web
import vfx from "../../Assets/Projects/VFX.jpg";

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
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1dC5ETa-aomR2464RAAX9gUHeXhzm3PJx?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
             
                </div>
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
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1mzPfYdsFkJ8eQIKsyT5ICGp3VCMrHk3i?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
              
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={modelingImage} alt="Modelado 3D" />
              <Card.Body>
                <Card.Title>Modelado 3D</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Diseñamos y creamos modelos 3D para diversas aplicaciones, incluyendo videojuegos y simulaciones.
                </Card.Text>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                 <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1YBag78zlRV7Lp2fBveMl84TpXWyGvlfM?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={animationImage} alt="Animación 3D" />
              <Card.Body>
                <Card.Title>Animación 3D</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Creación de animaciones 3D de alta calidad para simulaciones, videojuegos y más.
                </Card.Text>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1hrkiiYaBub2CEwpIx5WfXpPkpEKZpUja?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>


          {/* Tarjeta para Edición de Video */}
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={videoEditingImage} alt="Edición de Video" />
              <Card.Body>
                <Card.Title>Producción audiovisual</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Realizamos edición y post-producción de videos para todo tipo de proyectos, incluidos entornos virtuales.
                </Card.Text>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1rqa27zWsVzFk_34iQV9ggbqSyKUZ0Dnr?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
       
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={vfx} alt="Desarrollo Web" />
              <Card.Body>
                <Card.Title>VFX</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Desarrollamos producciones con efectos especiales como trackeo, rotoscopia y chroma key.
                </Card.Text>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <Button
                    variant="primary"
                    href="https://drive.google.com/drive/folders/1jxAtMSa3DWEhY48M53UTR-Xub-KRyBbW?usp=drive_link"
                    target="_blank"
                  >
                    Ver Proyectos
                  </Button>
                  
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        <div className="cta-container">
          <h2>¿Tienes un proyecto en mente?</h2>
          <p>¡Hablemos y llevémoslo a la realidad!</p>
          <Button href="/contact" className="purple-button">
            Contáctanos
          </Button>
        </div>
      </Container>

      {/* Botón flotante de Cotización */}
      <div className="floating-cta">
        <Button href="/contact" className="purple-button">
          Cotiza tu proyecto
        </Button>
      </div>

      {/* Estilos adicionales */}
      <style>
      {`
          .cta-container {
            text-align: center;
            margin: 40px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            max-width: 600px;
          }

          .cta-container h2, .cta-container p {
            color: white;
          }

          .floating-cta {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
          }

          .purple-button {
            background-color: #7D3C98 !important; 
            border: none;
          }

          .purple-button:hover {
            background-color: #5B2C6F !important;
          }
        `}
      </style>
    </Container>
  );
}

export default Projects;
