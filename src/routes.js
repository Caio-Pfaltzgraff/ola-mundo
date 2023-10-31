import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import { DefaultPage } from "components/DefaultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Start />} />
          <Route path="/sobremim" element={<AboutMe />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      {/* 
      
      Na rota "/", a estrutura a ser renderizada é:
      <DefaultPage>
        <Start />
      </DefaultPage>

      Na rota "/sobremim", a estrutura a ser renderizada é:
      <DefaultPage>
        <AboutMe />
      </DefaultPage>

      */}
      
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
