import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Home />
        <Products />
        <About />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
