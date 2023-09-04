import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Inner from "./Components/Inner";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import InnerContain2 from "./Components/InnerContain2";
import InnerContainer3 from "./Components/InnerContainer3";
import InnerContainer4 from "./Components/InnerContainer4";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inner />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/innercontain2" element={<InnerContain2 />} />
          <Route exact path="/innercontainer3" element={<InnerContainer3 />} />
          <Route exact path="/innercontainer4" element={<InnerContainer4 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
