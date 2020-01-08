import React, { Component } from "react";

export default class InputItem extends Component {
  render() {
    return (
      <input
        // same results as onChange={(event) => this.newToDo(event)}
        onChange={this.props.newToDo}
        value={this.props.newItem.comment}
        type="text"
      />
    );
  }
}
