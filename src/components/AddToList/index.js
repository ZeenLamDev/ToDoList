import React, { Component } from "react";

export class AddToList extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addToList}>Add To List</button>
      </div>
    );
  }
}

export default AddToList;
