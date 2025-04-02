import React from "react";
import { Col, Row } from "react-bootstrap";

import {

  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiAutodesk,
  SiAdobe,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobexd,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiCsharp,
  SiPython,
  SiFirebase,
  SiReact,
  SiSteam,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiMarkdown,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Logos de Software y Tecnologías */}
      <Col xs={4} md={2} className="tech-icons"><SiUnity /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiUnrealengine /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBlender /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAutodesk /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobe /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobephotoshop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobeillustrator /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobeaftereffects /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobepremierepro /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAdobexd /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJavascript /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMarkdown /></Col>     
      <Col xs={4} md={2} className="tech-icons"><SiCsharp /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiReact /></Col>      
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>                
      <Col xs={4} md={2} className="tech-icons"><SiSteam /></Col>          
    </Row>
  );
}

export default Techstack;
