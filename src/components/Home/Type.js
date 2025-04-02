import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Modelado 3D",
          "Animación 3D",
          "Experiencias VR/AR",
          "Edición de vídeo",
          "Animación 2D",
          "Edición de imágenes",
          "Branding",
          "Creación de logos",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
