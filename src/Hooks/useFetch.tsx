import { useState, useEffect } from "react";
import axios from "axios";


const useFetch = (url: string) => {
  const [data, setData] = useState(null); 
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getKanji = async () => {
      try {
        const fetchData: any = await axios.get(url);
        setData(fetchData);
      } catch (error: any) {
        setIsPending(false);
        setError(error.message);
        return "there was an error";
      }
    };
    getKanji();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
