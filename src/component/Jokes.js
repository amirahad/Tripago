// import { useEffect, useState } from "react";
import { useRef, useState } from "react";
import useRandomJokes from "../hooks/useRandomJokes";
import  "./TripList";

export default function Jokes() {
  //     const [ jokes,setJokes ] = useState("")

  //   useEffect(() => {
  //     const fetchjokes = async () =>
  //       await fetch(
  //         "http://api.icndb.com/jokes/random?firstName=Amir&lastName=Ahad"
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setJokes(data.value.joke);
  //         });
  //     fetchjokes();
  //   }, []);
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
  const [firstName, setFirstName] = useState("Amir");
  const [lastName, setLastName] = useState("Ahad");
  const jokes = useRandomJokes(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  };

  return (
    <div className="trip-list">
      <h2>Enter your Name to Generate a Joke...</h2>
      <form>
        <input
          placeholder="Enter your first name"
          ref={firstNameRef}
        />
        <input
          placeholder="Enter your last name"
          ref={lastNameRef}
        />
        <button onClick={generateJoke}>Generate a Joke</button>
      </form>
      <p className="jokes">""{jokes}""</p>
    </div>
  );
}
