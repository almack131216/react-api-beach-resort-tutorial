import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="Home" subtitle="Blah blah">
        <Link to="/items" className="btn-primary">
          Cars
        </Link>
      </Banner>
    </Hero>
  );
}
