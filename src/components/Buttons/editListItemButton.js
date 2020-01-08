import React, { Component } from "react";

export class EditListItemButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.editListItem}>Edit Item</button>
      </div>
    );
  }
}

export default EditListItemButton;
