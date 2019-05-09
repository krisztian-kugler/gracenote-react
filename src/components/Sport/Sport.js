import React from "react";
import Participant from "../../Participant/Participant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sport.sass";

const Sport = ({ sport }) => {
  console.log(sport);
  const { Medals, GoldMedalList, SilverMedalList, BronzeMedalList } = sport;

  const goldMedalList = GoldMedalList.map((gold, i) => {
    return <Participant medal="gold" participant={gold} key={i} />;
  });

  const silverMedalList = SilverMedalList.map((silver, i) => {
    return <Participant medal="silver" participant={silver} key={i} />;
  });

  const bronzeMedalList = BronzeMedalList.map((bronze, i) => {
    return <Participant medal="bronze" participant={bronze} key={i} />;
  });

  const medalsTotal = (medals, medalColor) => {
    if (medals > 0) {
      return (
        <div className="medals">
          <FontAwesomeIcon className={"medal " + medalColor} icon={["fas", "medal"]} />
          <p>{medals}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <section className="Sport">
      <header className="header">
        <h1>{sport.Sport.c_Name}</h1>
        {medalsTotal(Medals.n_Gold, "gold")}
        {medalsTotal(Medals.n_Silver, "silver")}
        {medalsTotal(Medals.n_Bronze, "bronze")}
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
