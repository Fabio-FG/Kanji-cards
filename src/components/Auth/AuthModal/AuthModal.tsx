import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthModal.css";


const AuthModal = ({ setOpenModal }: any) => {
  //handle values states
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  let navigate = useNavigate()


  
  const handleSubmit = (e:any) => {
    console.log("form submit");
    e.preventDefault();
    const user = { username, email, password};
    console.log("new user", user);
    if(user){
      setMessage(true);
    }
    
    //delay for creation of account
    setTimeout(onSuccess, 2000)
  }
  
  const onSuccess = () => {
    navigate('/')
    setOpenModal(false)
  }
  return (
    <>
      <div className="modal">
        <div className="cancelX">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input type="email" required value={email} onChange={(e) => {setEmail(e.target.value)}} />
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
          {message && <p>Account Created!</p>}
          <div className="btnWrapper">
            <button className="cancelBtn" onClick={() => setOpenModal(false)}>Cancel</button>
            <button className="confirmBtn">Sign</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthModal;
