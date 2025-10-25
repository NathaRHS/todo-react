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
  const now = new Date(Date.now);

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
  return (
    <>
      <div className="container">
        <form action="login" method="get">
          Taches : {props.tacheName}
          {/* <Comments></Comments> */}
          <p>likes :{likes} </p>
          <div
            className="color"
            style={{
              background: colorLike,
              width: "70px",
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
          <button onClick={() => setLikes(likes + 1)}>liker</button>
          <p>Date de creation {date}</p>
        </form>
      </div>
    </>
  );
}
export default Card;
