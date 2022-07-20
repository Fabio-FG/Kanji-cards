import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function AboutSection() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/about");
  }

  return (
    <section className="about">
      <div className="about-intro">
        <h1 className="about-title">About LearnKanji</h1>
        <p>
          LearnKanji is a personal project geared towards those who wish to
          learn and study Japanese kanji on a daily basis. The project is merely
          an enhancement tool and the goal is to be an auxiliary method in
          learning.
        </p>

        <p>
          This project is divided into <span className="span">three phases.</span>
        </p>
        <button onClick={onClick} className="button">
          Learn More
        </button>
      </div>
    </section>
  );
}
