import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeartLetter from './heartLetter';
import Dedication from './Dedication';
import Carousel from './Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeartLetter />} /> 
          <Route path="/dedication" element={<Dedication />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
