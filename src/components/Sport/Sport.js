import React from "react";
import Participant from "../Participant/Participant";
import Medal from "../Medal/Medal";
import "./Sport.sass";

const Sport = ({ sport }) => {
  const { Sport, Medals, GoldMedalList, SilverMedalList, BronzeMedalList } = sport;

  const goldMedalList = GoldMedalList.map((gold, i) => {
    return <Participant medal="gold" participant={gold} key={i} />;
  });

  const silverMedalList = SilverMedalList.map((silver, i) => {
    return <Participant medal="silver" participant={silver} key={i} />;
  });

  const bronzeMedalList = BronzeMedalList.map((bronze, i) => {
    return <Participant medal="bronze" participant={bronze} key={i} />;
  });

  const renderMedal = (counter, color) => {
    if (counter > 0) return <Medal counter={counter} color={color} />;
  };

  return (
    <section className="Sport">
      <header className="header">
        <h1 className="sport-name">{Sport.c_Name}</h1>
        {renderMedal(Medals.n_Gold, "gold")}
        {renderMedal(Medals.n_Silver, "silver")}
        {renderMedal(Medals.n_Bronze, "bronze")}
      </header>
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="medal" />
            <th className="participant">Participant</th>
            <th className="event">Event</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {goldMedalList}
          {silverMedalList}
          {bronzeMedalList}
        </tbody>
      </table>
    </section>
  );
};

export default Sport;
