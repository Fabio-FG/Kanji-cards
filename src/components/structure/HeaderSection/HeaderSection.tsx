import "./HeaderSection.css";
import bg from "../../../assets/images/3506329.jpg";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="header-title">
          <h1>Learn Kanji every day with KanjiLearnAPI</h1>
          <button>Learn More</button>
        </div>
        <div className="header-image">
          {/* <img src={bg} alt="backgroundImg" /> */}
        </div>
      </div>
    </>
  );
};

export default AboutSection;
