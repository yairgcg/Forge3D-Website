import React from "react";
import { Container, Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <Container className="mt-5 mb-5" style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Preguntas Frecuentes</h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Cómo puedo contactar con soporte?</Accordion.Header>
          <Accordion.Body>
            Puedes contactarnos a través de nuestro correo electrónico soporte@forge3d.com o mediante nuestras redes sociales.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>¿Cuáles son los tiempos de respuesta?</Accordion.Header>
          <Accordion.Body>
            Normalmente respondemos en un plazo de 24 a 48 horas, dependiendo del volumen de consultas que tengamos.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>¿Puedo solicitar modificaciones en los productos?</Accordion.Header>
          <Accordion.Body>
            Sí, ofrecemos modificaciones personalizadas dependiendo del proyecto. Contáctanos para más detalles.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>¿Aceptan reembolsos?</Accordion.Header>
          <Accordion.Body>
            Los reembolsos se manejan caso por caso. Si tienes algún inconveniente con tu compra, escríbenos y encontraremos una solución.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>¿Ofrecen descuentos para estudiantes?</Accordion.Header>
          <Accordion.Body>
            Sí, contamos con descuentos especiales para estudiantes. Solo debes enviarnos una prueba de tu estatus académico.
          </Accordion.Body>
        </Accordion.Item>

        {/* Nuevas preguntas frecuentes */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>¿Puedo solicitar un reembolso?</Accordion.Header>
          <Accordion.Body>
                Claro, el reembolso es válido siempre y cuando se solicite dentro de los 30 días posteriores a la compra  
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>¿Qué métodos de pago aceptan?</Accordion.Header>
          <Accordion.Body>
            Aceptamos tarjetas de crédito, PayPal y transferencias bancarias.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>¿Tienen una política de privacidad?</Accordion.Header>
          <Accordion.Body>
            Sí, nuestra política de privacidad está disponible en el pie de página de nuestro sitio web.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default FAQ;