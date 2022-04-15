import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import KanjiList from "../../components/KanjiList/KanjiList";
import AboutSection from "../../components/structure/AboutSection/AboutSection";
import "./HomePage.css";

const HomePage = () => {
  //custom hook to fetch data
  const { data, isPending, error } = useFetch(
    "https://kanjiapi.dev/v1/kanji/all"
  );

  return (
    <>
      {error && <div>{error}</div>}
      {!isPending && <div>Loading...</div>}
      <div className="container">
        <div>
          <AboutSection />
        </div>
        <div className="data">{data && <KanjiList {...data!} />}</div>
      </div>
    </>
  );
};

export default HomePage;
