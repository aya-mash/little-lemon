import React from "react";
import "./BookingSlot.css";

function BookingSlot({ time, isAvailable }) {
  return (
    <div className={`booking-slot ${isAvailable ? "available" : "unavailable"}`}>
      {time}
    </div>
  );
}

export default BookingSlot;
