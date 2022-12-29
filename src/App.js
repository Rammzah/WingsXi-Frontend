// Components
import Faqs from "./components/body/main/Faqs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/body/main/Home";
import Howto from "./components/body/main/Howto";
import Info from "./components/body/main/Info";
import Login from "./components/body/main/Login";
import Menu from "./components/body/menu/Menu";
import Rules from "./components/body/main/Rules";

// Functions
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col">
            <Router>
              <Routes>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="rules" element={<Rules />} />
                <Route path="info" element={<Info />} />
                <Route path="howto" element={<Howto />} />
                <Route path="faqs" element={<Faqs />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
