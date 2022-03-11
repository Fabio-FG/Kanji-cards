import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getKanji } from "../../Services/Services";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  //useParams to grab the id
  const { kanji } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<any>(null);
 

  useEffect(() => {
    const getKanjiItem = () => {
      getKanji(kanji as string).then((result) => {
        const { data}:any = result;
        console.log("destructured data", data);
        setIsLoading(false)
        setDetails(data)
      });
     

    };
    
    getKanjiItem();
    
  }, []);

  useEffect(() => {
    console.log(details)
    setDetails(details)
  }, [details])

  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      
      <div>Kanji: {details && details.kanji}</div>
      <div>Grade: {details && details.grade}</div>
      <div>Stroke Count:{details && details.stroke_count}</div>
      <div>JLPT level:{details && details.jlpt}</div>
      <div>Meanings: { details && details.meanings.map((el:string) => {
        return <div key={el}>{el}</div>
      })}</div>
      <div>Name readings: { details && details.name_readings.map((el:string) => {
        return <div key={el}>{el}</div>
      })}</div>
      <div>Kunyomi readings: { details && details.kun_readings.map((el:string) => {
        return <div key={el}>{el}</div>
      })}</div>
      <div>Onyomi readings: { details && details.on_readings.map((el:string) => {
        return <div key={el}>{el}</div>
      })}</div>
      <Link to="/">Back</Link>
    </>
  );
};

export default DetailsPage;
