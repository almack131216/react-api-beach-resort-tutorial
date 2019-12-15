import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context";
import Title from "../components/Title";

// get all unique values
const getUnique = (getItems, value) => {
  return [...new Set(getItems.map(item => item[value]))];
};

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSizem,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(items, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search items" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">item type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* (END) select type */}
      </form>
    </section>
  );
}
