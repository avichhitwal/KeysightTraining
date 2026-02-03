import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './PassengerDetails.css';

const PassengerDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight } = location.state || {}; // Get flight from state

  const [passengerName, setPassengerName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idType, setIdType] = useState("Aadhar"); // Aadhar/Passport
  const [numPassengers, setNumPassengers] = useState(1);

  if (!flight) {
    return <p>No flight selected. Go back to the flights page.</p>;
  }

  const handlePayment = () => {
    const bookingDetails = {
      flight,
      passengerName,
      idNumber,
      idType,
      numPassengers,
      totalPrice: flight.price * numPassengers,
    };

    // Pass booking details to payment page
    navigate("/payment", { state: { bookingDetails } });
  };

  return (
    <div className="passenger-details">
      <h2>Passenger Details</h2>

      <h3>Flight Information</h3>
      <div className="flight-info">
        <p><strong>Flight No:</strong> {flight.flight_no}</p>
        <p><strong>Name:</strong> {flight.flightName}</p>
        <p><strong>Source:</strong> {flight.source}</p>
        <p><strong>Destination:</strong> {flight.destination}</p>
        <p><strong>Departure:</strong> {flight.depttime}</p>
        <p><strong>Price per seat:</strong> ${flight.price}</p>
      </div>

      <hr />

      <h3>Enter Passenger Details</h3>

      <div className="form-grid">
        <div className="form-field">
          <label>Name:</label>
          <input
            className="input"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>ID Number:</label>
          <input
            className="input"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label>ID Type:</label>
          <select className="input" value={idType} onChange={(e) => setIdType(e.target.value)}>
            <option value="Aadhar">Aadhar</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <div className="form-field">
          <label>No. of Passengers:</label>
          <input
            className="input"
            type="number"
            value={numPassengers}
            min="1"
            onChange={(e) => setNumPassengers(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PassengerDetails;
