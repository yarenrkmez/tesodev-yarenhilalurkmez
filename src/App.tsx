/** Dependencies */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/** Screens */
import HomePage from './screens/HomePage/HomePage';
import ButtonsPage from './screens/ButtonsPage/ButtonsPage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buttons" element={<ButtonsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
