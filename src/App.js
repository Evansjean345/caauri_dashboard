import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Caauri from "./components/Caauri";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Career from "./components/Career";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/caaurimuniquez" element={<Caauri />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carriere" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
