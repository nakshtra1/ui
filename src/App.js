import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Inner from "./Components/Inner";
import InnerContain2 from "./Components/InnerContain2";
import Features from './Components/Features'
import Collaboration from './Components/Collaboration'
import Solutions from './Components/Solutions'
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Inner />
        <Routes>
        <Route exact path="/" element={<Inner />} />
          <Route exact path="features" element={<Features />} />
          <Route exact path="testimonials" element={<Testimonials />} />
          <Route exact path="solutions" element={<Solutions />} />
          <Route exact path="collaboration" element={<Collaboration />} />
        </Routes>
        <InnerContain2 />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
