import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HeartLetter from './heartLetter';
import Dedication from './Dedication';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeartLetter />} /> 
          <Route path="/dedication" element={<Dedication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
