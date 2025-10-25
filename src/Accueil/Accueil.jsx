import { useState } from "react";
import Header from "./Header";
import AjoutCard from "./ajoutCard";

import Card from "./card";
import "../App.css";

function Accueil() {
 
  const [cards, setCards] = useState([]);
  return (
    <div className="accueil-container">
      <Header></Header>
      
      <AjoutCard setCards={setCards}></AjoutCard>
      <h1>To do app</h1>
      <div className="cards">
        {cards.map((card, i) => (
          <Card key={i} name={card.name} tacheName={card.name}></Card>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
