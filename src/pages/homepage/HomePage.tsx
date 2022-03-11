import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import KanjiList from "../../components/KanjiList/KanjiList";

 const HomePage = () => {
  //custom hook to fetch data
   const { data, isPending, error,} = useFetch("https://kanjiapi.dev/v1/kanji/all");

  
  return (
    <>
      
      {error && <div>{error}</div>}
      {!isPending && <div>Loading...</div>}
      {data && <KanjiList {...data!} />}
    </>
  );
};

export default HomePage;
