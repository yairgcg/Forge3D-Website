import React from "react";
import { Container } from "react-bootstrap";

const TermsOfService = () => {
  return (
    <Container style={{ color: "white", marginTop: "60px" }}>

      <h2 className="text-center mb-4">Términos de Servicio</h2>
      <p className="text-justify mb-4">
        Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio, aceptas cumplir con los siguientes términos y condiciones. Te recomendamos leerlos cuidadosamente.
      </p>

      <div className="term-section mb-5">
        <h4>📌 Aceptación de los Términos</h4>
        <p className="text-justify">
          Al utilizar nuestro sitio, aceptas todos los términos y condiciones aquí descritos. Si no estás de acuerdo con alguno de ellos, te pedimos que no utilices este sitio.
        </p>
      </div>

      <div className="term-section mb-5">
        <h4>🔐 Uso del Sitio</h4>
        <p className="text-justify">
          El uso de nuestro sitio web debe ser conforme a las leyes aplicables y a las condiciones establecidas en este documento. Eres responsable de cualquier actividad que realices en nuestro sitio.
        </p>
      </div>

      <div className="term-section mb-5">
        <h4>⚖️ Modificaciones a los Términos</h4>
        <p className="text-justify">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Te recomendamos que revises esta sección periódicamente para estar al tanto de posibles cambios.
        </p>
      </div>

      <div className="term-section mb-5">
        <h4>📞 Contacto</h4>
        <p className="text-justify">
          Si tienes alguna pregunta o inquietud sobre estos términos, no dudes en contactarnos a través de <strong>terminos@forge3d.com</strong>.
        </p>
      </div>
    </Container>
  );
};

export default TermsOfService;
