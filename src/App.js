// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DatabasePage from './pages/DatabasePage';
import VehiclePage from './pages/VehiclePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Database Management</Link></li>
            <li><Link to="/vehicle">Vehicle Customization</Link></li>
          </ul> 
        </nav>

        <div className="content">
          <Routes>                                               
            <Route path="/" element={<DatabasePage />} />
            <Route path="/vehicle" element={<VehiclePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
