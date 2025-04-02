import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="header">
        <p>logo</p>
      </div>
      <div className="sidebar">
        <p>login</p>
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>d</p>
        <p>e</p>
      </div>
      <div className="contact">contact</div>
      <div className="chatbox">chatbox</div>
    </div>
    // <div className="mainContainer">
    //   <div className="header">
    //     <p>Logo</p>
    //     {/* <p className="mobileLogin">Login</p> */}
    //   </div>
    //   <div className="sidebar">
    //     <p>Login</p>
    //   </div>
    //   <div className="contact">Contact</div>
    //   <div className="chatbox">Chatbox</div>
    // </div>
  );
};

export default Home;
