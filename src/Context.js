import React, { Component } from "react";
const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
  state = {
    greeting: "hey",
    name: "Alex"
  };
  render() {
    return (
      <ItemContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer, ItemContext };
