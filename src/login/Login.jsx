import Formulaire from "./formulaire";
import Heure from "./Heure";
import ImageChat from "./imageChat";
import './login.css'

function Login() {
  return (
    <div className="form-container">
      <h1>Se connecter</h1>

      <Formulaire></Formulaire>
      <p>while waiting here is some cats pictures</p>
      <ImageChat></ImageChat>
    </div>
  );
}
export default Login;
