import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import Card from "./components/cards/Card.js";

function App() {
  return (
    <div>      
      <NavBar/>
      <Fondo/>  
      <Card/>     
    </div>


  );
}

export default App;
