import React from "react";
import { getKanji, getAllKanji } from "../../Services/Services";
import { useState, useEffect } from "react";
import DetailsPage from "../DetailsPage/DetailsPage";
import { Link } from "react-router-dom";

const HomePage = () => {
  //state
  const [data, setData] = useState([]);
  const [kanjiId, setKanjiId] = useState("");

  useEffect(() => {
    const allKanjiService = async () => {
      const fetchData = await getAllKanji();
      /* console.log(fetchData); */
      setData(fetchData);
    };

    allKanjiService();
  }, []);

  const getItem = async (kanji: any) => {
    const fetchItem = await getKanji(kanji);
    console.log("the data", fetchItem);
    setKanjiId(fetchItem);
  };

  return (
    <div>
      <p>home</p>
      {data.slice(0, 10).map((kanji) => {
        return (
          <div key={kanji}>
            <p>
              <button onClick={() => getItem(kanji)}>
                <Link to={`/${kanji}`}>{kanji}</Link>
              </button>
            </p>
          </div>
        );
      })}
      <DetailsPage Kanji={kanjiId} data={data} />
    </div>
  );
};

export default HomePage;
