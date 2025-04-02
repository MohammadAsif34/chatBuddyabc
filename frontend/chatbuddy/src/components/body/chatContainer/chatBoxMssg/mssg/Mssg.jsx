import React from "react";
import "./Mssg.css";

const Mssg = ({ mssg, type }) => {
  return (
    <div className={`chatboxMssg ${type === "self" ? "self" : "other"}`}>
      <div className="mssgBox">
        <div className="mssgs">{mssg}</div>
        <div className="mssgsStatus">
          <p>
            2:32 pm <i className="bi bi-check2-all"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mssg;
