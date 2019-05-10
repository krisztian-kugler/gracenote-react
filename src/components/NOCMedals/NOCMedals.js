import React from "react";
import { connect } from "react-redux";
import Medal from "../Medal/Medal";
import "./NOCMedals.sass";

export const NOCMedals = ({ NOCMedals }) => {
  if (!NOCMedals) return null;

  const { NOC, Medals } = NOCMedals;

  const renderMedal = (counter, color) => {
    if (counter > 0) return <Medal counter={counter} color={color} />;
  };

  return (
    <section className="NOCMedals">
      <h1 className="country">{NOC.c_Name}</h1>
      <div className="medals">
        {renderMedal(Medals.n_Gold, "gold")}
        {renderMedal(Medals.n_Silver, "silver")}
        {renderMedal(Medals.n_Bronze, "bronze")}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return { NOCMedals: state.data.NOCMedals };
};

export default connect(mapStateToProps)(NOCMedals);
