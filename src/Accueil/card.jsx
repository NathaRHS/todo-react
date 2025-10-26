import "./card.css";
import Comments from "./comments";
import { useState, useEffect } from "react";
function Card(props) {
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => console.log(data[0].id));
  });
  const [likes, setLikes] = useState(0);
  const [colorLike, setcolorLike] = useState("green");
  const [state, setState] = useState("pas terminée");
  const [pos, setPos] = useState({ x: 0, y: 300 });
  const [clicked, setCliked] = useState(false);
  const now = new Date(Date.now());
  const {setBlurLevel,tacheName} = props;

  const [date, setDate] = useState(
    now.toLocaleDateString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );

  function changeColor() {
    setcolorLike((colorLike) => (colorLike === "green" ? "red" : "green"));
    setState((state) =>
      state === "pas terminée" ? "terminée" : "pas terminée"
    );
  }
  const mooveCenter = () => {
    // setPos({ x: e.clientX + 120, y: e.clientY + 150 });
    console.log("aoo");
    setCliked((clicked) => clicked === false ?clicked = true:clicked = false)
    console.log(clicked)
    clicked?setBlurLevel(0):setBlurLevel(0);
    
  };

  const styleClick = {
    position:clicked?"fixed":"relative",
    top:clicked === true ?"50%":"auto",
    left:clicked === true ?"50%":"auto",
    transform:clicked?"translate(50%,50%) scale(1.4)":"translate(0%,0%) scale(1)  ",
    zIndex: clicked ? 999 : "auto",
    
  }
  return (
    <>
      <div
        className="container"
        onClick={mooveCenter}
        style={styleClick}
      >
        <form action="login" method="get">
          <h2>{tacheName}</h2>
          {/* <Comments></Comments> */}
          <div
            className="color"
            style={{
              background: colorLike,
              borderRadius: "10px",
              marginBottom: "15px",
              cursor: "pointer",
              fontWeight: "bold",
              padding: "15px",
            }}
            onClick={changeColor}
          >
            {state}
          </div>
          <button onClick={() => setLikes(likes + 1)}>voir la surprise</button>
          <p>Date de creation {date}</p>
        </form>
      </div>
    </>
  );
}
export default Card;
