import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

// Lista de testimonios ampliada
const testimonials = [
  {
    name: "Carlos Méndez",
    role: "CEO de Innovatech",
    feedback: "Trabajar con Yair ha sido una experiencia increíble. Su talento para modelado 3D y VR es excepcional.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ana López",
    role: "Diseñadora UX/UI",
    feedback: "Gracias a su trabajo en AR, logramos una presentación interactiva que impresionó a nuestros clientes.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Miguel Torres",
    role: "Director de Proyectos",
    feedback: "Su trabajo en animación 3D le dio vida a nuestro videojuego. Recomendado al 100%.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Laura Ramírez",
    role: "Marketing Manager",
    feedback: "El nivel de realismo en sus renders 3D superó nuestras expectativas. Volveremos a trabajar con él.",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Ricardo Pérez",
    role: "Game Developer",
    feedback: "El trabajo de Yair en VR y animaciones ha sido clave en nuestro proyecto de videojuego. ¡Gran profesional!",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Sofía Herrera",
    role: "Arquitecta",
    feedback: "Sus renders arquitectónicos nos ayudaron a visualizar el proyecto con una calidad impresionante.",
    img: "https://randomuser.me/api/portraits/women/35.jpg",
  }
];

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <h1 className="project-heading">
            Testimonios y <strong className="purple">Casos de Éxito</strong>
          </h1>
        </Row>

        <Row className="resume">
          {testimonials.map((testi, idx) => (
            <Col md={4} key={idx} style={{ marginBottom: "20px" }}>
              <Card className="project-card-view">
                <Card.Img
                  variant="top"
                  src={testi.img}
                  alt={`${testi.name} testimonial`}
                  style={{ borderRadius: "100%", width: "100px", height: "100px", objectFit: "cover", margin: "auto", marginTop: "15px" }}
                />
                <Card.Body>
                  <Card.Title>{testi.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{testi.role}</Card.Subtitle>
                  <Card.Text style={{ textAlign: "justify" }}>{testi.feedback}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
