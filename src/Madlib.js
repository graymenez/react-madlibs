import React, { useState } from "react";
import MadlibForm from "./MadlibForm";

const Madlib = () => {
  const initalToggle = true;
  const [sentence, setSentence] = useState({
    noun: "man",
    noun2: "women",
    adjective: "big",
    color: "red",
  });
  const [toggle, setToggle] = useState(initalToggle);
  const updateSentence = (noun, noun2, adjective, color) => {
    setSentence({
      noun: noun,
      noun2: noun2,
      adjective: adjective,
      color: color,
    });
  };
  const toggleParagraph = () => {
    setToggle((state) => !state);
    console.log(toggle);
  };

  const resetToggle = () => {
    setToggle(initalToggle);
  };

  return (
    <div id="Madlib">
      <MadlibForm
        update={updateSentence}
        toggleFunction={toggleParagraph}
        toggle={toggle}
      />
      <p
        style={toggle ? { display: "none" } : console.log("hurray")}
        id="Madlib-p"
      >
        The {sentence.noun} saw the {sentence.noun2}. The {sentence.noun}{" "}
        complimented the {sentence.noun2}'s {sentence.adjective} face but only
        because it was {sentence.color}.
      </p>
      {!toggle ? <button onClick={resetToggle}>Reset</button> : null}
    </div>
  );
};
export default Madlib;
