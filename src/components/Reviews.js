import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Reviews() {
  const [reviews, setReviews] = useState([
    { name: "Juan Pérez", review: "Excelente trabajo en el modelo 3D." },
    { name: "Ana López", review: "Me encantó la animación en Blender." }
  ]);

  const [newReview, setNewReview] = useState({ name: "", review: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", review: "" });
    }
  };

  return (
    <Container>
      <h2>Reseñas de Clientes</h2>
      <Row>
        {reviews.map((r, index) => (
          <Col key={index} md={4}>
            <div className="review-card">
              <h5>{r.name}</h5>
              <p>"{r.review}"</p>
            </div>
          </Col>
        ))}
      </Row>

      <h3>Deja tu Reseña</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
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
          />
        </Form.Group>
        <Button type="submit" className="mt-2">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Reviews;
