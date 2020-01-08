import React, { Component } from "react";

export class EditFromListButton extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.editFromList()}>Save</button>
      </div>
    );
  }
}

export default EditFromListButton;
