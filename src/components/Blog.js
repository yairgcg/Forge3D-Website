import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "./Particle";
import { Link } from "react-router-dom";
import BlogModelado from "../../src/Assets/Topologia.png";
import RealidadMarketing from "../../src/Assets/Projects/RealidadAumentada.jpg";
import RealidadVirtual from "../../src/Assets/Projects/RealidadVirtual.jpeg"

const blogPosts = [
  {
    title: "Cómo mejorar tu modelado 3D",
    description: "Descubre consejos prácticos para optimizar tus habilidades en modelado 3D.",
    img: BlogModelado,
    slug: "mejorar-modelado-3d",
    content: "Aquí iría todo el contenido completo del post..."
  },
  {
    title: "Realidad Aumentada en el Marketing",
    description: "Exploramos cómo la AR está revolucionando las estrategias de marketing digital.",
    img: RealidadMarketing,
    slug: "ar-en-marketing",
    content: "Aquí iría todo el contenido completo del post..."
  },
  {
    title: "El futuro de la Realidad Virtual",
    description: "Un vistazo a las tecnologías emergentes en el mundo de la Realidad Virtual.",
    img: RealidadVirtual,
    slug: "futuro-realidad-virtual",
    content: "Aquí iría todo el contenido completo del post..."
  },
];


function Blog() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <h1 className="project-heading">
          Últimos <strong className="purple">Artículos</strong>
        </h1>
      </Row>

      <Row>
        {blogPosts.map((post, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="project-card-view">
              <Card.Img variant="top" src={post.img} alt={post.title} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary" as={Link} to={`/blog/${post.slug}`}>
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blog;
