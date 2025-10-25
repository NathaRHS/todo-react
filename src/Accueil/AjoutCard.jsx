import { useState } from "react";
import Header from "./Header";

import Card from "./card";
import "../App.css";

function AjoutCard({ setCards }) {
  const [inputTacheValue, setInputTacheValue] = useState("");
  const [inputDateValue, setInputDateValue] = useState("");
  const [inputProgression, setInputProgression] = useState("");
  function ajouterCard() {
    setCards((prevCards) => [
      ...prevCards,
      {
        name: inputTacheValue,
        date: inputDateValue,
        progression: inputProgression,
      },
    ]);
    setInputTacheValue("");
    setInputDateValue("");
    setInputProgression("");
  }
  return (
    <div className="recherche-container">
      <input
        type="text"
        value={inputTacheValue}
        placeholder="la tache"
        onChange={(e) => setInputTacheValue(e.target.value)}
      />
      <input
        type="date"
        value={inputDateValue}
        placeholder="date de fin"
        onChange={(e) => setInputDateValue(e.target.value)}
      />
      <input
        type="progression"
        value={inputProgression}
        placeholder="progression /100"
        onChange={(e) => setInputProgression(e.target.value)}
      />
      <button onClick={ajouterCard}>ajouter</button>
    </div>
  );
}

export default AjoutCard;
