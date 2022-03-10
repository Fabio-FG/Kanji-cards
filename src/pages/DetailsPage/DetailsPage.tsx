import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const DetailsPage = () => {
  //useParams to grab the id
  const { kanji } = useParams();
  const [details, setDetails] = useState();

  const {
    data: kanjiDetail,
    isPending,
    error,
  } = useFetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);

  console.log(kanjiDetail.data)
 

  return (
    <>
      {isPending && <div>Loading..</div>}
      {error && <div>There was an Error</div>}
      
      {kanjiDetail && <p>Kanji: {kanjiDetail.data.kanji}</p>}
      {kanjiDetail && <p>Grade: {kanjiDetail.data.grade}</p>}
      {kanjiDetail && <p>Readings: {kanjiDetail.data.name_readings}</p>}
      {kanjiDetail && <p>Onyomi Readings: {kanjiDetail.data.on_readings}</p>}
      {kanjiDetail && <p>Kunoymi Readings: {kanjiDetail.data.kun_readings}</p>}
      {kanjiDetail && <p>JLPT level: {kanjiDetail.data.jlpt}</p>}
      {kanjiDetail && <p>English Heisig: {kanjiDetail.data.heisig_en}</p>}
      {kanjiDetail && <p>Meanings: {kanjiDetail.data.meanings.map((el:any) => {
        return <div>{el}</div>
      })}</p>}
    </>
  );
};

export default DetailsPage;
