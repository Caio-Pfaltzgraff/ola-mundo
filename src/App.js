import AboutMe from "./pages/aboutme";
import Start from "./pages/start";

console.log(window.location)

const pagina = window.location.pathname === '/' ? <Start/> : <AboutMe/>

function App() {
  return pagina;
}

export default App;
