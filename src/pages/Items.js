import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <Hero herp="roomsHero">
      <Banner title="Items">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
  );
}
