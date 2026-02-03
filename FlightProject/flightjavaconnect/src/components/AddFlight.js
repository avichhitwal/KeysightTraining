// AddFlight.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFlight = () => {
  const [flight_no, setFlightNo] = useState("");
  const [flightName, setFlightName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [depttime, setDepttime] = useState("");
  const [availableseats, setAvailableSeats] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const saveFlight = async (e) => {
    e.preventDefault();

    const flight = {
      flight_no,
      flightName,
      source,
      destination,
      depttime,
      availableseats: parseInt(availableseats),
      price: parseFloat(price),
    };

    await fetch("http://localhost:8484/add/flight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    });

    navigate("/"); // navigate to flight list/dashboard after saving
  };

  return (
    <div>
      <h3>Add Flight</h3>
      <form onSubmit={saveFlight}>
        <div>
          <label>Flight No</label>
          <input
            value={flight_no}
            onChange={(e) => setFlightNo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Flight Name</label>
          <input
            value={flightName}
            onChange={(e) => setFlightName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Source</label>
          <input
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Destination</label>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Departure Time</label>
          <input
            type="time"
            value={depttime}
            onChange={(e) => setDepttime(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Available Seats</label>
          <input
            type="number"
            value={availableseats}
            onChange={(e) => setAvailableSeats(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddFlight;
