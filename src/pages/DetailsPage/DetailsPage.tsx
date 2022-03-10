
import { useParams } from "react-router-dom";

const DetailsPage = () => {

   //useParams to grab the id
   const { kanji } = useParams() 
  return <p>item: {kanji}</p>;
};

export default DetailsPage;
