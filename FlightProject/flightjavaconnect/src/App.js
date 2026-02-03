import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FlightList from './components/FlightList';
import EditFlight from './components/EditFlight';
import Login from './components/Login';
import FlightsDashboard from './components/FlightDashboard';
import PassengerDetails from './components/PassengerDetails';
import PaymentPage from './components/PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <header className="app-header">
          <div className="title">Flight Management Portal</div>
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<FlightsDashboard />} />
            <Route path="/edit/:id" element={<EditFlight />} />
            <Route path="/passenger" element={<PassengerDetails />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
