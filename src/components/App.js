import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    };
  }

  changeNewItem(input) {
    this.setState({
      newItem: input
    });
  }

  addToList(input) {
    let toDoList = this.state.list;

    toDoList.push(input);

    this.setState({
      list: toDoList,
      newItem: ""
    });
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.changeNewItem(e.target.value)}
          value={this.state.newItem}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.newItem)}>
          Add To List
        </button>
        <ul>
          {this.state.list.map(value => (
            <li>{value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
