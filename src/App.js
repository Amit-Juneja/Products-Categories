import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectCategory } from "./slices/categorySlice";
import { fetchProducts, setSearchTerm } from "./slices/productSlice";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  const products = useSelector((state) => state.products.products);
  const searchTerm = useSelector((state) => state.products.searchTerm);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory));
  }, [dispatch, selectedCategory]);

  const handleCategorySelect = (category) => {
    dispatch(selectCategory(category));
  };

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="panel left-panel">
        <Category data={categories} onSelect={handleCategorySelect} />
      </div>
      <div className="vertical-divider" />
      <div className="panel right-panel">
        <Product data={filteredProducts} onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
