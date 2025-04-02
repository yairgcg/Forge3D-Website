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
      <h2 className="text-center">Reseñas de Clientes</h2>
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

      <h3 className="text-center mt-4">Deja tu Reseña</h3>
      <Form onSubmit={handleSubmit} className="text-center">
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
      `}</style>
    </Container>
  );
}

export default Reviews;
