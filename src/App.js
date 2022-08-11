import "./App.css";
import About from "./Components/About";
import Cards from "./Components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import Socials from "./Components/Socials";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="app">
        <div className="black"></div>
        <div className="nav">
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>View Shops</li>
              <li>About us</li>
            </ul>
          </div>
          <div className="minori">
            <h3>Minori</h3>
          </div>
          <div className="list">
            <ul>
              <li>Shop</li>
              <li>View Shops</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
        <div className="tagLine">
          <h4>Minimalistic makeup for everyday use.</h4>
        </div>
      </div>
      <About />
      <Cards />
      <Socials />
      <Footer />
    </>
  );
}

export default App;
