import React, { Component } from "react";
import Data from "./data";
const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
  state = {
    items: [],
    sortedItems: [],
    featuredItems: [],
    loading: true
  };
  // getData
  componentDidMount() {
    let items = this.formatData(Data);
    console.log("[Context.js] items...", items);
    let featuredItems = items.filter(item => item.featured === true);
    this.setState({
      items,
      featuredItems,
      sortedItems: items,
      loading: false
    });
  }

  formatData(Data) {
    let tempItems = Data.map(dataItem => {
      let id = dataItem.sys.id;
      let images = dataItem.fields.images.map(image => image.fields.file.url);
      let item = { ...dataItem.fields, images, id };
      return item;
    });
    return tempItems;
  }

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
