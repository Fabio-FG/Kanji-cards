import KanjiList from "../../components/KanjiList/KanjiList";
import AboutSection from "../../components/structure/HeaderSection/HeaderSection";
import useFetch from "../../useFetch";

const LearnPage = () => {
  //custom hook to fetch data
  const { data, isPending, error } = useFetch(
    "https://kanjiapi.dev/v1/kanji/all"
  );

  return (
    <>
      {error && <div>{error}</div>}
      {!isPending && <div>Loading...</div>}
      <div className="container">
        <div className="data">{data && <KanjiList {...data!} />}</div>
      </div>
    </>
  );
};

export default LearnPage;
