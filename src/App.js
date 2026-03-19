import "./App.css";
import Fondo from "./components/containers/Fondo";
import NavBar from "./components/navbars/NavBar";
import CardGrid from "./components/cards/CardGrid";
import Filter from "./components/buttoms/Filter";
import ScrollToTop from "./components/buttoms/ScrollToTop";


function App() {
  return (
    <div>
      <NavBar />
      <Fondo />
      <Filter />
      <CardGrid />
      <ScrollToTop />
    </div>
  );
}

export default App;