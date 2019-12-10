import React, { Component } from "react";
import { ItemContext } from "../Context";

export default class FeaturedItems extends Component {
  static contextType = ItemContext;

  render() {
    const { name, greeting } = this.context;

    return (
      <div>
        {greeting} {name} from featured items
      </div>
    );
  }
}
