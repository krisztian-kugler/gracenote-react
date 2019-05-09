import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Participant.sass";

const Participant = ({ medal, participant }) => {
  return (
    <tr className="Participant">
      <td className="medal">
        <FontAwesomeIcon className={medal} icon={["fas", "medal"]} />
      </td>
      <td className="participant">{participant.Participant.c_Participant}</td>
      <td className="event">
        {participant.Gender.c_Name}'s {participant.Event.c_Name}
      </td>
    </tr>
  );
};

export default Participant;
