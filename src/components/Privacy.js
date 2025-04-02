import React from "react";
import { Container } from "react-bootstrap";

const Privacy = () => {
  return (
    <Container 
      style={{ 
        marginTop: "60px", 
        minHeight: "calc(100vh - 100px)", // Para que el contenedor ocupe todo el alto disponible
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between"
      }}
    >
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>Política de Privacidad</h2>
        <p style={{ color: "white", textAlign: "justify" }}>
          En <strong>Forge3D</strong>, respetamos tu privacidad y nos comprometemos a proteger tu información personal. 
          A continuación, te explicamos cómo manejamos los datos que recopilamos.
        </p>

        <h4 style={{ color: "white", marginTop: "20px" }}>📌 Información que Recopilamos</h4>
        <p style={{ color: "white", textAlign: "justify" }}>
          Solo recopilamos información que nos proporcionas voluntariamente, como nombre, correo electrónico y datos de contacto cuando realizas una consulta o compras un producto.
        </p>

        <h4 style={{ color: "white", marginTop: "20px" }}>🔐 ¿Cómo Usamos tu Información?</h4>
        <p style={{ color: "white", textAlign: "justify" }}>
          La información que recopilamos se usa exclusivamente para mejorar tu experiencia, procesar pedidos y brindarte un mejor servicio. No vendemos ni compartimos tus datos con terceros.
        </p>

        <h4 style={{ color: "white", marginTop: "20px" }}>⚖️ Tus Derechos</h4>
        <p style={{ color: "white", textAlign: "justify" }}>
          Puedes solicitar en cualquier momento la eliminación o modificación de tus datos personales. Para ello, contáctanos a través de nuestro correo: privacidad@forge3d.com.
        </p>

        <h4 style={{ color: "white", marginTop: "20px" }}>📞 Contacto</h4>
        <p style={{ color: "white", textAlign: "justify" }}>
          Si tienes preguntas sobre nuestra Política de Privacidad, no dudes en contactarnos en <strong>privacidad@forge3d.com</strong>.
        </p>
      </div>
    </Container>
  );
};

export default Privacy;
