import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Juan Pérez", review: "Excelente trabajo en el modelo 3D.", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Ana López", review: "Me encantó la animación en Blender.", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Carlos Ramírez", review: "El diseño fue justo lo que necesitaba.", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "José Rosado", review: "Muy profesionales en su trabajo.", img: "https://i.imgflip.com/2/6k7tby.jpg" },
    { name: "Israel García", review: "¡¡Sus renders están a otro nivel!!", img: "https://www.uttt.edu.mx//ctrlfotos/22300898.jpg" },
    { name: "Ivan Reyes", review: "Grandiosos proyectos de VR/AR", img: "https://www.uttt.edu.mx//ctrlfotos/22300526.jpg" }
  ]);

  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, { ...newReview, img: "https://randomuser.me/api/portraits/lego/6.jpg" }]);
      setNewReview({ name: "", review: "" });
    }
  };

  return (
    <Container style={{ marginTop: "50px", color: "white" }}>
      <h2 className="text-center" style={{ marginTop: "80px" }}>
      <strong className="purple"> Reseñas </strong>
         de Clientes</h2>
      <Row>
        {reviews.map((r, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <div className="review-card">
              <img src={r.img} alt={r.name} className="review-img" />
              <h5>{r.name}</h5>
              <p>"{r.review}"</p>
            </div>
          </Col>
        ))}
      </Row>

      <h3 className="text-center mt-5"> 
      <strong className="purple">Deja </strong>
        tu Reseña</h3>
      <Form onSubmit={handleSubmit} className="text-center">
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
            style={{ maxWidth: "400px", margin: "0 auto" }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Comentario</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            required
            style={{ maxWidth: "400px", margin: "0 auto" }}
          />
        </Form.Group>
        <Button type="submit" className="mt-2" style={{ marginBottom: "50px" }}>Enviar</Button>
      </Form>

      {/* CTA - Llamada a la acción */}
      <div className="cta-container text-center mt-5">
        <p>¿Quieres obtener más información o hacer algún proyecto con nosotros?</p>
        <Button
          variant="outline-light"
          href="/contacto"  // Cambia esta ruta por la página de contacto o formulario relevante
          size="lg"
          style={{ marginBottom: "60px" }} // Aquí agregamos un margen inferior
        >
          Contáctanos
        </Button>
      </div>

      <style jsx>{`
        .review-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          margin: 10px;
        }
        .review-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        .cta-container p {
          color: white;
          font-size: 18px;
          margin-bottom: 20px;
        }
      `}</style>
    </Container>
  );
}

export default Reviews;
