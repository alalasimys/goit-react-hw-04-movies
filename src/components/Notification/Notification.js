import "./Notification.scss";
import page404 from "./page-404.png";

import React from "react";

const Notification = () => {
  return (
    <div className="Notification">
      {/* <div className="image-thumb"> */}
      <img src={page404} alt="Page not found" className="Notification--image" />
      {/* </div> */}

      <div className="Notification--content">
        <h3 className="title">We didn't find anything for your query.</h3>
        <p className="text">
          Please try more generic search or try other search terms.
        </p>
      </div>
    </div>
  );
};

export default Notification;
