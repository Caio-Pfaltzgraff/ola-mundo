import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/sobremim" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
