import React, { Component } from "react";
import "../bootstrap.min.css";
import "../App.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  votesAngularInPercent() {
    if (this.store.getState().angular) {
      return (
        (this.store.getState().angular /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  votesReactInPercent() {
    if (this.store.getState().react) {
      return (
        (this.store.getState().react /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  votesVuejsInPercent() {
    if (this.store.getState().vuejs) {
      return (
        (this.store.getState().vuejs /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent() + "%",
      backgroundColor: "#dc3545",
    };
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent() + "%",
      backgroundColor: "#0062cc",
    };
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent() + "%",
      backgroundColor: "#28a745",
    };
  }

  render() {
    return (
      <div>
        <span className="label label-padding bg-danger px-1 my-1">
          Angular: {this.votesAngularInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress active my-1">
          <div
            className="progress-bar progress-bar-danger progress-bar-striped"
            style={this.votesAngularInPercentStyle()}
          ></div>
        </div>
        <span className="label label-padding bg-primary px-1">
          React: {this.votesReactInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress active my-1">
          <div
            className="progress-bar progress-bar-striped progress-bar-primary"
            style={this.votesReactInPercentStyle()}
          ></div>
        </div>
        <span className="label bg-success px-1">
          Vue.js: {this.votesVuejsInPercent().toFixed(2) + "%"}
        </span>
        <div className="progress active my-1">
          <div
            className="progress-bar progress-bar-striped progress-bar-success"
            style={this.votesVuejsInPercentStyle()}
          ></div>
        </div>
      </div>
    );
  }
}

export default Result;
