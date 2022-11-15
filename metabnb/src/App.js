import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import PlaceToStay from "./components/PlaceToStay";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <nav>
          <Navbar />
      </nav>
        <Routes>
          <Route path="/Metabnb" element={<Home />} />
          <Route path="/PlaceToStay" element={<PlaceToStay />} />
        </Routes>
        <footer>
           <Footer />
        </footer>

      </BrowserRouter>
    
      
    </div>
  );
}

export default App;
