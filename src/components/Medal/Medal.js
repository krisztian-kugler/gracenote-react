import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Medal = ({ counter, color }) => {
  return (
    <div className="Medal">
      <FontAwesomeIcon className={"icon " + color} icon={["fas", "medal"]} />
      <p className={"counter " + color}>{counter}</p>
    </div>
  );
};

export default Medal;
