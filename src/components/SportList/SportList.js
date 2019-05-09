import React from "react";
import { connect } from "react-redux";
import Sport from "./Sport/Sport";
import "./SportList.sass";

const SportList = ({ sportList }) => {
  if (!sportList) return null;

  const sports = sportList.map(sport => {
    return <Sport sport={sport} key={sport.Sport.n_ID} />;
  });

  return <section className="SportList">{sports}</section>;
};

const mapStateToProps = state => {
  return { sportList: state.data.SportList };
};

export default connect(mapStateToProps)(SportList);
