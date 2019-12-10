import React, { Component } from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ItemContext } from "../Context";
export default class Item extends Component {
  constructor(props) {
    super(props);
    // console.log("[Item.js] this.props...", this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = ItemContext;
  // componentDidMount() {}

  render() {
    const { getItem } = this.context;
    const item = getItem(this.state.slug);
    // console.log(item);
    if (!item) {
      return (
        <div className="error">
          <h3>Item not found</h3>
          <Link to="/items" className="btn-primary">
            Back to items
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = item;

    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} item`}>
          <Link to="/items" className="btn-primary">
            Back to items
          </Link>
        </Banner>
      </Hero>
    );
  }
}
