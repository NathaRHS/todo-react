import { useState } from "react";
import Header from "./Header";
import AjoutCard from "./AjoutCardTemp";
import Card from "./card";
import "../App.css";

function Accueil() {
 
  const [cards, setCards] = useState([]);
  const [blurLevel, setBlurLevel] = useState(0);

  const styleContainer=  {
    filter:`blur(${blurLevel}px)`,
  };
  
  return (
    <div className="accueil-container" style={styleContainer}>
      <Header></Header>
      
      <AjoutCard setCards={setCards}></AjoutCard>
      <h1>To do app</h1>
      <div className="cards">
        {cards.map((card, i) => (
          <Card key={i} name={card.name} tacheName={card.name} setBlurLevel={setBlurLevel}></Card>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
