import { useState } from "react";
import Header from "../Header";
import AjoutCard from "../AjoutCardTemp";
import Card from "../card";
import "../Load.css";

function Loading() {
 
  const [onLoad, setOnLoad] = useState(true);

  const styleContainer=  {
    animation:onLoad===true?"Loading ease infinite":"",
    background:"red",
    width:"10px",
    
  };
  
  return (
    <div className="Loading-container">
        <div className="boribory"style={styleContainer}>eto</div>
    </div>
  );
}

export default Loading;
