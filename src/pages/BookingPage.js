import React from "react";
import BookingForm from "../components/BookingForm";
import useBookingReducer from "../hooks/useBookingReducer";

function BookingPage() {
  const { availableTimes, dispatch } = useBookingReducer(new Date());

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) window.location.href = "/confirmed";
  };

  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;

// Mock API
const submitAPI = (formData) => {
  console.log("Form Data Submitted:", formData);
  return true;
};
