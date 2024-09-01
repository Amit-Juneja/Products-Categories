import React, { useState } from "react";

function CategoryCard(props) {
  const { name, onSelect, isSelected } = props;

  return (
    <div key={name} className="category-card">
      <input
        type="radio"
        value={name}
        id={name}
        checked={isSelected}
        onChange={() => onSelect(name)}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
}

export default function Category(props) {
  const { data, onSelect } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (name) => {
    onSelect(name);
    setSelectedCategory(name);
  };

  return (
    <>
      <h3>List of Categories</h3>
      {data.map((category) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          isSelected={category.name === selectedCategory}
          onSelect={handleSelect}
        />
      ))}
    </>
  );
}
