import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              ¿Quiénes <strong className="purple">somos?</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              En <strong>3D Forge</strong>, creemos en el poder de la tecnología para transformar ideas en realidades digitales.
              Nos especializamos en <strong>desarrollo 3D, programación web y entornos virtuales</strong>, ofreciendo soluciones
              creativas e innovadoras para empresas que buscan destacar en la era digital.
            </p>
            <p style={{ textAlign: "justify" }}>
              Nuestro equipo está compuesto por apasionados del diseño, la programación y la animación, con experiencia en herramientas como
              <strong>Blender, Maya, Unity, Unreal Engine, Photoshop y más</strong>. Nos enfocamos en ofrecer experiencias visuales impactantes
              y altamente funcionales para nuestros clientes.
            </p>          
            <h2>Nuestra
              <strong className="purple"> Misión</strong>
            </h2>

            <p style={{ textAlign: "justify" }}>
              Brindar soluciones digitales innovadoras que permitan a las empresas transformar sus ideas en proyectos impactantes,
              fusionando creatividad y tecnología de vanguardia.
            </p>
            <br />
            <h2>Nuestra
              <strong className="purple"> Visión</strong>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Ser líderes en el desarrollo de experiencias digitales inmersivas, destacándonos por nuestra calidad, innovación y
              compromiso con la excelencia en el sector tecnológico.
            </p>
            <br />

            <h2>Nuestros 
                <strong className="purple"> Valores</strong>
            </h2>
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
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Habilidades <strong className="purple">Profesionales</strong>
        </h1>
        <Techstack />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
