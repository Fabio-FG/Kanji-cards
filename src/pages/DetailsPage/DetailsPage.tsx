import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { getKanji } from "../../Services/Services";



const DetailsPage = () => {
  //useParams to grab the id
  const { kanji } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<Record<string, never>>({});

  useEffect(() => {
    const getKanjiItem = () => {
       getKanji(kanji as string).then((result) => {
        console.log("result", result);
        let results = result;
        setDetails(results);
      });
    };

    getKanjiItem();
  }, []);

  return (
    <>
      <div>Kanji: {details.kanji}</div>
      <div>Grade: {details.grade}</div>
      <div>Stroke Count: {details.stroke_count}</div>
      <div>Kun readings: {details.kun_readings}</div>
      <div>On readings: {details.on_readings}</div>
      <div>Meanings: {details.meanings}</div>
      <div>JLPT level: {details.jlpt}</div>
    </>
  );
};

export default DetailsPage;
