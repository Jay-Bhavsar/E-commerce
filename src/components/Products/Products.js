import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import HeroSection from "../Hero/Hero";

function Products() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/get/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories", error));
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
            categoryName: categoryName,
          },
        });
        setProducts(response.data.products);
        setTotalProducts(response.data.totalProducts);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, categoryName]);

  const handleCategoryChange = (e) => {
    setCategoryName(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <HeroSection />

      <div className="products-container">
        <h1>Products</h1>

        <div className="category-filter">
          <h4>Categories :</h4>
          {categories.map((category) => (
            <label key={category._id} className="category-radio">
              <input
                type="radio"
                name="category"
                value={category.name}
                checked={categoryName === category.name}
                onChange={handleCategoryChange}
              />
              {category.name}
            </label>
          ))}
        </div>

        {loading ? <p>Loading...</p> : null}

        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="product-card"
                key={product._id}
                onClick={() => handleProductClick(product._id)} // On click, navigate to product detail
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <p>
                    <strong>Price: ${product.price}</strong>
                  </p>
                  <div className="product-rating">
                    <span>Rating: {product.rating?.rate}</span>
                    <span>({product.rating?.count} reviews)</span>
                  </div>
                </div>

                {/* Button Container for Add to Cart and Add to Shortlist */}
                <div className="button-container">
                  <button className="add-to-cart">Add To Cart</button>
                  <button className="add-to-shortlist">Add to Shortlist</button>
                </div>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="pagination-btn"
          >
            Previous
          </button>

          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => handlePageChange(page + 1)}
              disabled={currentPage === page + 1}
              className={`pagination-btn ${
                currentPage === page + 1 ? "active" : ""
              }`}
            >
              {page + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
