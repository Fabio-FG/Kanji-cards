import { useNavigate } from "react-router-dom";
import "./styles.css";


export default function AboutSection() {
  const navigate = useNavigate();

  function goToAbout() {
    navigate("/about");
  }

  return (
    <section className="about">
      <article className="about-text">
      <h1 className="about-title">About LearnKanji 漢字</h1>
        <p>
          LearnKanji is a personal project geared towards those who wish to
          learn and study Japanese kanji on a daily basis. The project is merely
          an enhancement tool and the goal is to be an auxiliary method in
          learning.
        </p>
        <br />
        <p>
          This project is divided into{" "}
          <span className="span" onClick={goToAbout}>
            three phases.
          </span>
        </p>
      </article>
     

    </section>
  );
}
