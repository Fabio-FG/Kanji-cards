import { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ openModal, setOpenModal }: any) => {
  
 console.log("proped openModal is:", openModal)

  return (
    <>
      <div className="modal">
        <div
          onClick={() => {
            
          }}
        >
          X
        </div>
        <button>Sign</button>
      </div>
    </>
  );
};

export default AuthModal;
