import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FlightList from './components/FlightList';
import AddFlight from './components/AddFlight';
import EditFlight from './components/EditFlight';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Flight Management Portal</h2>

        <nav>
          <Link to="/">Flights</Link>
          <Link to="/add">Add Flight</Link>
        </nav>

        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/add" element={<AddFlight />} />
          <Route path="/edit/:id" element={<EditFlight />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
