import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Index";
import Home from "./components/Home/Index";
import Projet from "./components/Project/Index";
import Contact from "./components/Contact/Index";
import Experience from "./components/Experience/Index"

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projet />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
