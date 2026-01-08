import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Noticias from "./Noticias";
import Mortandad from "./Mortandad";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/mortandad" element={<Mortandad />} />
    </Routes>
  );
}

export default App;

