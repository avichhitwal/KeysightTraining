import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './FlightDashboard.css';

const FlightsDashboard = () => {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(""); 
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  useEffect(() => {
    loadFlights();
  }, []);



  const loadFlights = async () => {
    const res = await fetch("http://localhost:8484/getAll");
    const data = await res.json();
    setFlights(data);
  };

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:8484/${id}`, { method: "DELETE" });
//     loadFlights(); 
//   };

  const handleBook = (flight) => {
    navigate("/passenger", { state: { flight } });
    };

  const filteredFlights = flights.filter(
    (f) =>
      f.flightName.toLowerCase().includes(search.toLowerCase()) ||
      f.flight_no.toString().includes(search)
  );

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    if (!sortKey) return 0; // no sort
    if (sortKey === "name") {
      return sortOrder === "asc"
        ? a.flightName.localeCompare(b.flightName)
        : b.flightName.localeCompare(a.flightName);
    }
    if (sortKey === "price") {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="flights-dashboard">
      <h2>Flights Dashboard</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by flight name or number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button className="btn" onClick={() => { setSortKey("name"); setSortOrder("asc"); }}>Sort Name A-Z</button>
        <button className="btn" onClick={() => { setSortKey("price"); setSortOrder("asc"); }}>Sort Price Low-High</button>
        <button className="btn" onClick={() => { setSortKey("price"); setSortOrder("desc"); }}>Sort Price High-Low</button>
      </div>

      <div className="table-wrapper">
        <table className="flights-table">
          <thead>
            <tr>
            <th>Flight No</th>
            <th>Flight Name</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedFlights.map((f) => (
            <tr key={f.id}>
              <td>{f.flight_no}</td>
              <td>{f.flightName}</td>
              <td>{f.source}</td>
              <td>{f.destination}</td>
              <td>{f.depttime}</td>
              <td>{f.availableseats}</td>
              <td>{f.price}</td>
              <td className="actions">
                <button className="btn btn-primary" onClick={() => handleBook(f)}>Book</button>
                {/* <button onClick={() => handleDelete(f.id)} style={{ marginLeft: "5px" }}> */}
                  {/* Delete */}
                {/* </button> */}
              </td>
            </tr>
          ))}
          {sortedFlights.length === 0 && (
            <tr>
              <td colSpan="8" className="no-results">
                No flights found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FlightsDashboard;
