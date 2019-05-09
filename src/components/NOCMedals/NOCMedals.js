import React from "react";
import { connect } from "react-redux";
import "./NOCMedals.sass";

const NOCMedals = ({ NOCMedals }) => {
  if (!NOCMedals) return null;

  console.log(NOCMedals);

  return (
    <section className="NOCMedals">
      <h1>{NOCMedals.NOC.c_Name}</h1>
    </section>
  );
};

const mapStateToProps = state => {
  return { NOCMedals: state.data.NOCMedals };
};

export default connect(mapStateToProps)(NOCMedals);
