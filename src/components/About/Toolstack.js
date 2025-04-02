import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito!");
    console.log(formData);
    // Aquí podrías enviar los datos a un backend o servicio de correo
  };

  return (
    <Container style={{ maxWidth: "600px", marginTop: "50px" }}>

    </Container>
  );
}

export default ContactForm;
