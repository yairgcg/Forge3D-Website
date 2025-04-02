import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            En <span className="purple">3D Forge </span>
            creemos en el poder de la tecnología para transformar<span className="purple"> ideas </span>
            en realidades digitales.
            <br />
            <br />
            Nacimos con la misión de ofrecer
                <span className="purple">soluciones creativas e innovadoras </span>
                en 3D, desarrollo web y entornos virtuales para empresas que buscan destacar en la era digital.
            <br />
            <br />
            Nuestro equipo está formado por
            <span className="purple"> apasionados del diseño</span>             
             , la programación y la animación, con experiencia            
            <br />
            <br />
  
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
