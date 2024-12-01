import React, { useState } from "react";
import axios from "axios";
import "./AddCategory.css";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      alert("Category name is required");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/categories", {
        name: categoryName,
      });

      if (response) {
        alert("Category added successfully!");
      }

      setCategoryName("");
    } catch (error) {
      alert(error.response?.data?.message || "Failed to add category");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-category-form">
      <h2>Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </div>
        <button type="submit" className="submitButton" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
