import React from "react";

function Search({ onSearch }) {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search products..."
    />
  );
}

function Tile(props) {
  const { title, thumbnail } = props;
  return (
    <div className="product-card">
      <div>
        <img src={thumbnail} alt={title} width="190px" height="200px"></img>
      </div>
      <h6>{title}</h6>
    </div>
  );
}

export default function Product(props) {
  const { data, onSearch } = props;
  return (
    <>
      <div className="search">
        <Search onSearch={onSearch} />
      </div>
      <h2>List of Products</h2>
      <div className="products">
        {data && data.length == 0 && (
          <h3>No products found for this category found!</h3>
        )}
        {data.map(({ id, title, thumbnail }) => (
          <Tile title={title} thumbnail={thumbnail} key={id} />
        ))}
      </div>
    </>
  );
}
