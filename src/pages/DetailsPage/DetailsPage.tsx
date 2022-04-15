import "./DetailsPage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getKanji } from "../../Services/Services";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  //useParams to grab the id
  const { kanji } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);
  let navigate = useNavigate()
  

  useEffect(() => {
    const getKanjiItem = () => {
      getKanji(kanji as string).then((result) => {
        const { data }: any = result;
        console.log("destructured data", data);
        setIsLoading(false);
        setDetails(data);
      });
    };

    getKanjiItem();
  }, [kanji]);

  useEffect(() => {
    console.log(details);
    setDetails(details);
  }, [details]);

  const goBack = () => {
    navigate(-1);
  }

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="wrapper">
        <div className="kanji">{details && details.kanji}</div>
        <div className="info-container">
          <div className="details-wrapper">
            <p>Grade: {details && details.grade}</p>
            <p>Stroke Count:{details && details.stroke_count}</p>
            <p>JLPT level:{details && details.jlpt}</p>
          </div>
          <div className="meanings-wrapper">
            <div>
              Meanings:{" "}
              {details &&
                details.meanings.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
            </div>
            <div>
              Name readings:{" "}
              {details &&
                details.name_readings.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
            </div>
            <div>
              Kunyomi readings:{" "}
              {details &&
                details.kun_readings.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
            </div>
            <div>
              Onyomi readings:{" "}
              {details &&
                details.on_readings.map((el: string) => {
                  return <div key={el}>{el}</div>;
                })}
            </div>
          </div>
        </div>
      </div>
      <button className="backBtn" onClick={() => {goBack()}}>Back</button>
    </>
  );
};

export default DetailsPage;
