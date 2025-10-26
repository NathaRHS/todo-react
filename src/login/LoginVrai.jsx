import Formulaire from "./FormulaireMaj2";
import Heure from "./Heure";
import ImageChat from "./ImageChate";
import Loading from "../Accueil/loading/Loading";
import './login.css'
import { useState } from "react";

function LoginVrai() {
  const [isLoading,setIsLoading] = useState(false);
  return (
    <div className="form-container">
      
      <Formulaire></Formulaire>
      <ImageChat setLoading={setIsLoading}></ImageChat>

      {isLoading===true&&<Loading/ >}
    </div>
  );
}
export default LoginVrai;
