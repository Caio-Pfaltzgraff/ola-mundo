import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutme";
import Start from "./pages/start";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import { DefaultPage } from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Start />} />
          <Route path="sobremim" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
