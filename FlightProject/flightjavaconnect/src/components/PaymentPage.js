import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const { bookingDetails } = location.state || {};
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  const [cvv, setCvv] = useState("");
  const [showCvv, setShowCvv] = useState(false);

  if (!bookingDetails) {
    return <p>No booking found.</p>;
  }

  const handlePayment = () => {
    const id  = "abc1234";
    setBookingId(id);
    setConfirmed(true);

  };

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      {!confirmed ? (
        <div className="content">
          <div className="summary">
            <p className="summary-line"><strong>Flight:</strong> {bookingDetails.flight.flightName}</p>
            <p className="summary-line"><strong>Passenger:</strong> {bookingDetails.passengerName}</p>
            <p className="summary-line"><strong>ID ({bookingDetails.idType}):</strong> {bookingDetails.idNumber}</p>
            <p className="summary-line"><strong>No. of Passengers:</strong> {bookingDetails.numPassengers}</p>
            <p className="summary-line"><strong>Total Amount:</strong> ${bookingDetails.totalPrice}</p>
          </div>

          <div className="payment-form">
            <div className="form-field">
              <label>Card Number</label>
              <input className="input" placeholder="XXXX XXXX XXXX XXXX" />
            </div>

            <div className="form-field">
              <label>Expiry</label>
              <input className="input" placeholder="MM/YY" />
            </div>

            <div className="form-field">
              <label>CVV</label>
              <div className="cvv-row">
                <input
                  className="input"
                  placeholder="CVV"
                  type={showCvv ? "text" : "password"}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  aria-label="CVV"
                />
                <button
                  type="button"
                  className="btn btn-small"
                  onClick={() => setShowCvv((s) => !s)}
                  aria-pressed={showCvv}
                  aria-label={showCvv ? "Hide CVV" : "Show CVV"}
                >
                  {showCvv ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={handlePayment}>Pay Now</button>
            </div>
          </div>

        </div>
      ) : (
        <div className="success">
          <h3>Booking Successful!</h3>
          <p>Your Booking ID: <strong>{bookingId}</strong></p>
          <p>Thank you for booking with us.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
