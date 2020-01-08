import React from "react";
import InputItem from "../InputItem";
import { ListItem } from "../ListItem";
import RemoveFromListButton from "../Buttons/removeFromListButton";

// actually!! Split these components up
// and prop drilling - to implement it!
// then we change it all to styled components
// then make a nice card with it for the blog
// Yeah, you made everything into props
// It's the only way to pass data from parent to child or vice-versa
// well ur next challenge is to use it more :)
// yup - iterate and it becomes second nature
// code is never perfect xD xD

// think about code and read about it :)
// using props (passing data up - or down)

class App extends React.Component {
  state = {
    newItem: { comment: "" },
    list: [],
    editingIndex: null,
    editingText: ""
  };

  newToDo = event => {
    const { value } = event.target;
    // set the state of newItem to an object with key comment value event.target.value
    // so as you type the state gets set per key press
    this.setState({
      newItem: { comment: value }
    });
  };

  addToList = () => {
    const { list, newItem } = this.state;
    // create a copy of list and add newItem to the end of the array
    this.setState({
      list: [...list, newItem],
      newItem: { comment: "" }
    });
  };

  removeFromList = index => {
    // remove the item with the index of the array
    const updatedArray = this.state.list.filter((_, key) => key !== index);
    // set state to your new updated array
    this.setState({ list: updatedArray });
  };

  editFromList = index => {
    const { list, editingText } = this.state;
    const newList = list.map((item, key) => {
      // return the comment (e.g skip)
      if (key !== index) return item;
      // return an object
      return { comment: editingText };
    });
    this.setState({ editingIndex: null, editingText: "", list: newList });
  };

  render() {
    const { editingIndex } = this.state;
    return (
      <div>
        <InputItem newToDo={this.newToDo} newItem={this.state.newItem} />
        <button onClick={this.addToList}>Add To List</button>
        <ul>
          {/* map through your list */}
          <ListItem
            onChange={event =>
              this.setState({ editingText: event.target.value })
            }
            editingText={this.state.editingText}
            editListItem={index => this.setState({ editingIndex: index })}
            removeFromList={index => this.removeFromList(index)}
            editFromList={index => this.editFromList(index)}
            editingIndex={this.state.editingIndex}
            list={this.state.list}
          />
        </ul>
      </div>
    );
  }
}

export default App;
