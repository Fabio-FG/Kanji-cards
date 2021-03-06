import { RepeatIcon } from "@chakra-ui/icons";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./KanjiList.css";

const KanjiList = ({ data }: any) => {
  const [randomKanji, setRandomKanji] = useState<any>([]);
  /* const [storedRandomKanji, setStoredRandomKanji] = useState<any>([]); */
  let navigate = useNavigate();

  //Randomize data
  const randomizeKanji = useCallback(() => {
    let spreadData = [...data];
    const randomArr = [];
    for (let i = 0; i < 3; i++) {
      // finding a random kanji out of the data set.
      const randomIndex = Math.floor(Math.random() * data.length);
      let randomKanji = spreadData[randomIndex];

      //pushing a random kanji to a new array until there are 6 random kanji
      randomArr.push(randomKanji);
    }
    //set the kanji state to have the 6 kanji!

    setRandomKanji(randomArr);
  }, [data]);

  //make sure that info is always send on first render
  useEffect(() => {
    randomizeKanji();
  }, [randomizeKanji]);

  const goDetails = (kanji: string) => {
    navigate(`/learn/${kanji}`);
  };

  return (
    <div>
      <div className="title">
        <h1>Kanji List</h1>
        <div
          className="shuffle-box"
          onClick={() => {
            randomizeKanji();
          }}
        >
          <span>Shuffle</span>
          <RepeatIcon className="repeat" />
        </div>
      </div>
      <div>
        <div className="kanjiWrapper">
          {randomKanji.map((kanji: any, idx: number) => {
            return (
              <div key={kanji} className="kanjiCard">
                <Link to={`/learn/${kanji}`} className="kanji-title">
                  {kanji}
                </Link>
                <button
                  className="learnBtn"
                  onClick={() => {
                    goDetails(kanji);
                  }}
                >
                  Learn
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KanjiList;
