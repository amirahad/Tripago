import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(res.statustext);
        }
        const json = await res.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("could not fetch data");
        // console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}
