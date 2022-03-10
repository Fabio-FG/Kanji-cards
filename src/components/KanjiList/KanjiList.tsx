import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KanjiList = ({ data }: any) => {
  const [randomKanji, setRandomKanji] = useState<any>([]);

  //Randomize data

  useEffect(() => {
    const randomizeKanji = async () => {
      try {
        const randomArr = [];
        for (let i = 0; i < 6; i++) {
          // finding a random kanji out of the data set.
          const randomIndex = Math.floor(Math.random() * data.length);
          let randomKanji = data[randomIndex];
          
          //pushing a random kanji to a new array until there are 6 random kanji
          randomArr.push(randomKanji);
        }
        ;
        //set the kanji state to have the 6 kanji!
        setRandomKanji(randomArr);
      } catch (error) {}
      return "error with the code";
    };

    randomizeKanji();
  }, []);

  return (
    <div>
      <h1>Kanji List</h1>
      <div>
        <div>
          the random six kanji:
          {randomKanji.map((kanji: any, idx:number) => {
            return (
              <div key={kanji}>
                <Link to={`/${kanji}`}> {kanji} </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KanjiList;
