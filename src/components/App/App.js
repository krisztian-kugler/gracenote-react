import React from "react";
import { connect } from "react-redux";
import fetchData from "../../actions/actions";
import NOCMedals from "../NOCMedals/NOCMedals";
import SportList from "../SportList/SportList";
import "./App.sass";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <main className="container">
        <NOCMedals />
        <SportList />
      </main>
    );
  }
}

export default connect(
  null,
  { fetchData }
)(App);
