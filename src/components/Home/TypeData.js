import React from "react";
import Typewriter from "typewriter-effect";

function TypeData() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist",
          "Analyste de Données",
          "Python & Machine Learning",
          "Big Data & Analytics",
          "Visualisation de Données"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeData;

