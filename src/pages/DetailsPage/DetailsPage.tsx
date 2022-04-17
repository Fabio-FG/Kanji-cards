import "./DetailsPage.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getKanji } from "../../Services/Services";


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
            <p className="grade">Grade: {details && details.grade}</p>
            <p className="details"><b>Stroke Count:</b> {details && details.stroke_count}</p>
            <p className="details"><b>JLPT level:</b>{details && details.jlpt}</p>
          </div>
          <div className="meanings-wrapper">
            <div className="meanings-box">
              <b>Meanings: </b>
              {details &&
                details.meanings.map((el: string) => {
                  return <div className="meaningFormatting" key={el}>{el}. </div>;
                })}
            </div>
            <div className="meanings-box">
              <b>Name readings: </b>
              {details &&
                details.name_readings.map((el: string) => {
                  return <div className="meaningFormatting" key={el}>{el}. </div>;
                })}
            </div>
            <div className="meanings-box">
              <b>Kunyomi readings:</b>
              {details &&
                details.kun_readings.map((el: string) => {
                  return <div className="meaningFormatting" key={el}>{el}. </div>;
                })}
            </div>
            <div className="meanings-box">
              <b>Onyomi readings:</b>
              {details &&
                details.on_readings.map((el: string) => {
                  return <div className="meaningFormatting" key={el}>{el}. </div>;
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
