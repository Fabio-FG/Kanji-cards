import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DetailsPage from "../DetailsPage/DetailsPage";

const uniqid = require("uniqid");

const apiURL = "https://kanjiapi.dev/v1/kanji/all";

const HomePage: React.FC = () => {
  //useStates
  const [data, setData] = useState([]);
  const [kanjiID, setKanjiID] = useState(0);
  //useEffect to  fetch API data
  useEffect(() => {
    //axios call
    const fetchKanji = async () => {
      const response = await axios.get(`${apiURL}`);
      console.log(response);
      const kanjiData = response.data;
      console.log(kanjiData);
      setData(kanjiData);
    };
    fetchKanji();
  }, []);

  //grabbing the kanji details
  const getDetails = (id: any) => {
    setKanjiID(id);
    console.log("got the id", id);
  };

  return (
    <div>
      <div className="search-box">
        <input type="text" placeholder="Search Kanji" />
      </div>
      {data.slice(0, 10).map((kanji, kanjiId) => {
        kanjiId = uniqid();

        return (
          <p key={kanjiId}>
            <button
              key={kanjiId}
              onClick={() => {
                getDetails(kanjiId);
              }}
            >
              <Link to={`/${kanji}`}>Kanji:{kanji}</Link>
            </button>
          </p>
        );
      })}

      {console.log(kanjiID)}
    </div>
  );
};

export default HomePage;
