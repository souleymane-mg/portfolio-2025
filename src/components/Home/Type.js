import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web & Logiciel",
          "Full-Stack",
          "UX/UI Designer",
          "WordPress Integration",
          "Ecosystème Azure"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
