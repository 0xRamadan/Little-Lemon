import { useReducer } from "react";
import Heading from "../components/sections/headingPages/Heading";
import BookingForm from "../components/sections/reservePages/BookingForm"
import { fetchAPI } from "../bookingsAPI";


export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
