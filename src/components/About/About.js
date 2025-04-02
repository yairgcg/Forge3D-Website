import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";  // Importa Helmet para la gestión de SEO
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Brandon from "../../Assets/Brandon Avatar.png";
import Daniel from "../../Assets/Doni Avatar.png";

function About() {
  return (
    <>
      {/* Agrega etiquetas meta para SEO */}
      <Helmet>
        <title>Sobre Nosotros - 3D Forge</title>
        <meta
          name="description"
          content="En 3D Forge nos especializamos en desarrollo 3D, programación web y entornos virtuales. Ofrecemos soluciones digitales innovadoras para empresas."
        />
        <meta
          name="keywords"
          content="3D Forge, desarrollo 3D, programación web, entornos virtuales, diseño gráfico, tecnología"
        />
        <meta name="author" content="3D Forge" />
      </Helmet>
      
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              className="about-text"
            >
              <h1 className="about-heading">
                ¿Quiénes <strong className="purple">somos?</strong>
              </h1>
              <p className="about-description">
                En <strong>3D Forge</strong>, creemos en el poder de la tecnología para transformar ideas en realidades digitales.
                Nos especializamos en <strong>desarrollo 3D, programación web y entornos virtuales</strong>, ofreciendo soluciones
                creativas e innovadoras para empresas que buscan destacar en la era digital.
              </p>
              <p className="about-description">
                Nuestro equipo está compuesto por apasionados del diseño, la programación y la animación, con experiencia en herramientas como
                <strong>Blender, Maya, Unity, Unreal Engine, Photoshop y más</strong>. Nos enfocamos en ofrecer experiencias visuales impactantes
                y altamente funcionales para nuestros clientes.
              </p>
              <h2>Nuestra <strong className="purple">Misión</strong></h2>
              <p className="about-description">
                Brindar soluciones digitales innovadoras que permitan a las empresas transformar sus ideas en proyectos impactantes,
                fusionando creatividad y tecnología de vanguardia.
              </p>
              <br />
              <h2>Nuestra <strong className="purple">Visión</strong></h2>
              <p className="about-description">
                Ser líderes en el desarrollo de experiencias digitales inmersivas, destacándonos por nuestra calidad, innovación y
                compromiso con la excelencia en el sector tecnológico.
              </p>
              <br />
              <h2>Nuestros <strong className="purple">Valores</strong></h2>
              <ul style={{ textAlign: "justify" }}>
                <li><strong>Innovación:</strong> Buscamos siempre las mejores soluciones creativas y tecnológicas.</li>
                <li><strong>Calidad:</strong> Nos enfocamos en entregar productos de alto nivel.</li>
                <li><strong>Compromiso:</strong> Trabajamos con dedicación para cumplir con las expectativas de nuestros clientes.</li>
                <li><strong>Colaboración:</strong> Creemos en el trabajo en equipo para potenciar ideas y resultados.</li>
                <li><strong>Pasión:</strong> Amamos lo que hacemos y nos motiva crear experiencias únicas.</li>
              </ul>
            </Col>
            <Col
              md={5}
              className="about-img"
            >
              <div>
                <img src={Brandon} alt="Brandon" className="img-fluid" style={{ width: "70%", borderRadius: "10px" }} />
                <h5 className="#f9f8f8" style={{ marginTop: "10px" }}>Brandon</h5>
              </div>
              <div style={{ marginTop: "30px" }}>
                <img src={Daniel} alt="Daniel" className="img-fluid" style={{ width: "70%", borderRadius: "10px" }} />
                <h5 className="#f9f8f8" style={{ marginTop: "10px" }}>Daniel</h5>
              </div>
            </Col>
          </Row>
          <h1 className="project-heading">
            Habilidades <strong className="purple">Profesionales</strong>
          </h1>
          <Techstack />
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
