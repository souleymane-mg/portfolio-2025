import React from "react";
import Typewriter from "typewriter-effect";

function TypeUIUX() {
  return (
    <Typewriter
      options={{
        strings: [
          "UI/UX Designer",
          "Designer d'Interfaces",
          "Figma & Prototypage",
          "Design Thinking",
          "Expérience Utilisateur"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeUIUX;

