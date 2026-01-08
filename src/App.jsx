import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Noticias from "./noticias";
import Mortandad from "./mortandad";
import "./styles.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/mortandad" element={<Mortandad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
