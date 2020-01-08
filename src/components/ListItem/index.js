import React, { Component } from "react";
import RemoveFromListButton from "../Buttons/removeFromListButton";
import EditFromListButton from "../Buttons/editFromListButton";
import EditListItemButton from "../Buttons/editListItemButton";
import AddToList from "../AddToList";

// now this component is a child of the parent component of App
// with props you can pass data up or down (parent to child or child to parent)
// you use use callbacks to achieve this

// 1. Make each button into a reusable component
// 2. Pass them an onClick prop and a text prop
// 3. Then use the text passed to the component as the text

class ListItem extends Component {
  render() {
    console.log("this.props", this.props);
    return this.props.list.map((newItem, index) => (
      <div key={index}>
        {/*  if editingIndex is equal to the item then return a HTML input element with the value of the editingText otherwise show the comment  */}
        {this.props.editingIndex === index ? (
          <>
            <AddToList addToList={this.props.addToList} />
          </>
        ) : (
          <li>{newItem.comment}</li>
        )}
        {/* callback function and pass index as the parameter */}
        {/* removeFromList is a prop in this component */}
        <RemoveFromListButton
          removeFromList={() => this.props.removeFromList(index)}
        />
        {this.props.editingIndex === index ? (
          <EditFromListButton
            editFromList={() => this.props.editFromList(index)}
          />
        ) : (
          <EditListItemButton
            editListItem={() => this.props.editListItem(index)}
          />
        )}
      </div>
    ));
  }
}

export { ListItem };
