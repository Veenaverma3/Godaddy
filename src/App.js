 import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
   
function App() {
  return (
    <Router>
      <div className="App">
        <Home/>
          {/* Routes */}
        <Routes>
         </Routes>
      </div>
    </Router>
  );
}

export default App;
