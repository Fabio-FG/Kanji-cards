import React, { useState } from "react";
import AuthModal from "../AuthModal/AuthModal";

const HeaderAuth = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    function onOpenModal(){
        console.log("open");
        setOpenModal(true);
    } 

    function onCloseModal(){
        setOpenModal(false);
    }

  return (
    <>
    {openModal && <AuthModal setOpenModal={ setOpenModal}/>}
      <button className="authBtn" onClick={() => onOpenModal()}>
        Login
      </button>
      <button className="authBtn" onClick={() => onOpenModal()}>
        Sign up
      </button>
    </>
  );
};

export default HeaderAuth;
