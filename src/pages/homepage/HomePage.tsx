import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import KanjiList from "../../components/KanjiList/KanjiList";
import HeaderSection from "../../components/structure/HeaderSection/HeaderSection";
import "./HomePage.css";
import AboutSection from "../../components/structure/AboutSection/AboutSection";

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
          <HeaderSection />
          <AboutSection />
        </div>
        <div className="data">{data && <KanjiList {...data!} />}</div>
      </div>
    </>
  );
};

export default HomePage;
