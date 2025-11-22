import React from "react";
import Typewriter from "typewriter-effect";

function TypeDeveloper() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web & Logiciel",
          "Full-Stack Developer",
          "React.js & C#/.NET",
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

export default TypeDeveloper;

