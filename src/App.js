import React, { Component } from "react";
import { voteAngular, voteReact, voteVuejs } from "./actions";
import "./bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  handleVoteAngular = () => {
    this.store.dispatch(voteAngular());
  };

  handleVoteReact = () => {
    this.store.dispatch(voteReact());
  };

  handleVoteVuejs = () => {
    this.store.dispatch(voteVuejs());
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <img src="select.png" alt="pics" style={{ borderRadius: "50%" }} />
          <h2>
            what is your favourite javaScript front-end framework/library ?
          </h2>
          <h4>click on the logo below to vote</h4>
          <br />
          <div
            className="row col-10"
            style={{ margin: "0 auto", alignItems: "center" }}
          >
            <div className="col-lg-4 my-4">
              <img
                src="angular.png"
                alt="angular_Logo"
                width="140px"
                height="140px"
                onClick={this.handleVoteAngular}
                className="c-pointer"
              />
            </div>
            <div className="col-lg-4 my-4">
              <img
                src="react.png"
                alt="react_Logo"
                onClick={this.handleVoteReact}
                width="140px"
                height="140px"
                className="c-pointer"
              />
            </div>
            <div className="col-lg-4 my-4">
              <img
                src="vue.png"
                alt="vuejs_Logo"
                width="140px"
                height="140px"
                onClick={this.handleVoteVuejs}
                className="c-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
