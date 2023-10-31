import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import { DefaultPage } from "components/DefaultPage";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Start />} />
          <Route path="sobremim" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
