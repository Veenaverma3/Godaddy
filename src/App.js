 import React from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Priorties from "./Component/Priorties";
import Review from "./Component/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Footer1 from "./Component/Footer1";
import Askedques from "./Component/Askedques";
import Main1 from "./Component/main1";
import Main2 from "./Component/Main2";
import Main3 from "./Component/Main3";
import Main4 from "./Component/Main4";
import Main5 from "./Component/Main5";
 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <Hero />
        <Review />
        <Priorties />
        <Main1/>
        <Main2/>
        <Main3/>
        <Main4/>
        <Main5/>
        <Askedques/>
         <Footer1/>
        <Footer />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
