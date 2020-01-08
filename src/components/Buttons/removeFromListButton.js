import React, { Component } from "react";

export default class RemoveFromListButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.removeFromList}>Remove Item</button>
      </div>
    );
  }
}
