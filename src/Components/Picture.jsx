import React from "react";
import picture from "../Assets/Me.jpg";

const Picture = () => {
  return (
    <div className="container">
      <p>Hallo</p>
      <div>
        <img className="img_container" src={picture} alt="Picture" />
      </div>
    </div>
  );
};

export default Picture;
