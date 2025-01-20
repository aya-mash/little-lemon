import { useReducer } from "react";

const initializeTimes = (date) => {
  // Fetch initial times based on the current date
  return fetchAPI(date || new Date());
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

export default function useBookingReducer(initialDate) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialDate, initializeTimes);
  return { availableTimes, dispatch };
}

// Mock API
const fetchAPI = (date) => {
  return ["17:00", "18:00", "19:00", "20:00"];
};
