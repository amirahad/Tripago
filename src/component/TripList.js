import { useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./TripList.css";

export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  // const fetchTrips = useCallback(async ()=>{
  //   const response = await fetch(url)
  //   const json = await response.json()
  //   setTrips(json)
  // }, [url])

  // useEffect(() => {
  //   fetchTrips()
  // }, [fetchTrips]);

  //for array,class type reference
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setTrips(json));
  // }, [url]);
  // console.log(trips);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      {isPending && <div>Loading.... </div>}
      {error && <div>{error} </div>}
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips123")}>
          All Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=Europe")}
        >
          Europian Trips
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=America")}
        >
          American Trips
        </button>
      </div>
    </div>
  );
}
