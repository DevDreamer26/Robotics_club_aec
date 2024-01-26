import {  Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
// import Resources from "./components/Resources/Resources";
// import Gallery from "./components/Gallery/Gallery";
import Events from "./components/Events/Events";
import R_aec from "./components/R-AEC/R_aec";
import Team23_24 from "./components/Team/Team_2023_2024/Team23_24";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Activity from "./components/Activity/Activity";
import Term from "./components/Terms/Term";
function App() {
  return (
  
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/events" element={<Events />} />
          <Route path="/raec" element={<R_aec/>} />
          <Route path="/activity" element={<Activity />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          <Route path="/team" element={<Team23_24 />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/term" element={<Term />} />
        </Routes>

        <Footer />
      </>
    
  );
}

export default App;
