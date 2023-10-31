import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
