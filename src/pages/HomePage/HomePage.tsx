import React from "react";
import './HomePage.css';
import useFetch from "../../Hooks/useFetch";
import KanjiList from "../../components/KanjiList/KanjiList";
import HeaderSection from "../../components/structure/HeaderSection/HeaderSection";
import bg from "../../assets/images/WallpaperDog-10848836.jpg"
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
          <img src={bg} alt="intro-background" className="homepageBg"/>
          <HeaderSection />
          <AboutSection />
        </div>
        <h3 className="kanji-subtitle">An example of how the app works</h3>
        <div className="data">{data && <KanjiList {...data as Object} />}</div>
      </div>
    </>
  );
};

export default HomePage;