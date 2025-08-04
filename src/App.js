import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";
import CardGridMain from "./components/cards/CardGridMain";
import Filter from "./components/buttoms/Filter";


function App() {
  return (
    <div>      
      <NavBar/>
      <Fondo/>  
      <Filter/>
      <CardGrid />     
      <CardGridMain />  
      <CardGridMain />  
      <CardGridMain />  
    </div>


  );
}

export default App;
