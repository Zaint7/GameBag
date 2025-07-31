import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";

function App() {
  return (
    <div>      
      <NavBar/>
      <Fondo/>  
      <CardGrid />     
      <CardGrid />  
      <CardGrid />  
      <CardGrid />  
    </div>


  );
}

export default App;
