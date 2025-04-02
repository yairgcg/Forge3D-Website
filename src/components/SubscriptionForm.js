import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

function SubscriptionForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setMessage("Por favor, ingresa un correo válido.");
            return;
        }

        console.log("Correo registrado:", email);
        setMessage("¡Gracias por suscribirte!");
        setEmail(""); // Limpia el input
    };

    return (
        <div className="subscription-form text-center">
            <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2"
                    style={{ width: "120%" }} // Aumenta el ancho
                    required
                />

                <Button type="submit" variant="primary">Suscribirse</Button>
            </Form>
            {message && <Alert variant="info" className="mt-2">{message}</Alert>}
        </div>
    );
}

export default SubscriptionForm;
