import { useNavigate } from "react-router-dom";
import './NotFoundPage.css'

export default function NotFoundPage() {
  const navigate = useNavigate();

  const backButton = () => {
      //redirect home page
        navigate("/");
  }
  
  return (
    <>
      <div className="not-found-container">
        <div className="not-found-text">Page not found</div>
        <button onClick={() => backButton()}>Back</button>
      </div>
    </>
  );
}
