import { useEffect, useState } from "react";


export default function useRandomJokes(firstName,lastName) {
    const [ jokes,setJokes ] = useState("")

    useEffect(() => {
        const fetchjokes = async () =>
          await fetch(
            `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
          )
            .then((res) => res.json())
            .then((data) => {
              setJokes(data.value.joke);
            });
        fetchjokes();
      }, [firstName,lastName]);

      return jokes;

}
