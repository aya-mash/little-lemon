import React from "react";
import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  return (
    <div className="confirmed-booking">
      <h1>Booking Confirmed!</h1>
      <p>Thank you for booking with Little Lemon.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default ConfirmedBooking;
