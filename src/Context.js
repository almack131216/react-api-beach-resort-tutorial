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

  getItem = slug => {
    let tempItems = [...this.state.items];

    const item = tempItems.find(item => item.slug === slug);
    return item;
  };

  render() {
    return (
      <ItemContext.Provider value={{ ...this.state, getItem: this.getItem }}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export function withItemConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ItemConsumer>
        {value => <Component {...props} context={value} />}
      </ItemConsumer>
    );
  };
}

export { ItemProvider, ItemConsumer, ItemContext };
