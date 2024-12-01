import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import like from "../../Assets/like.png";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product by ID", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleTab = (tab) => {
    setSelectedTab(tab);
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>No product found with ID: {id}</p>;
  }

  return (
    <>
      <div className="product-detail-container">
        <div className="imageContainer">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="contentContainer">
          <p className="ProductTitle">
            <strong>{product.title}</strong>
          </p>
          <p>{product.description}</p>
          <hr />
          <div className="stars">
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star filled">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
          <p className="PriceTitle">
            <strong>${product.price}</strong>
          </p>

          {/* Toggle Bar */}
          <div className="product-rating">
            <span>Rating: {product.rating?.rate}</span>
            <span>({product.rating?.count} reviews)</span>
          </div>

          <div className="action">
            <div className="quantity-control">
              <span
                className="quantity-btn"
                onClick={decrementQuantity}
                disabled={quantity === 1}
              >
                -
              </span>
              <span className="quantity-display">{quantity}</span>
              <span className="quantity-btn" onClick={incrementQuantity}>
                +
              </span>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="toggle-bar">
        <p
          className={`toggle-button ${
            selectedTab === "description" ? "active" : ""
          }`}
          onClick={() => toggleTab("description")}
        >
          Description
        </p>
        <p
          className={`toggle-button ${
            selectedTab === "reviews" ? "active" : ""
          }`}
          onClick={() => toggleTab("reviews")}
        >
          Reviews
        </p>
      </div>
      <hr />

      {selectedTab === "description" && (
        <div className="description">
          <div className="descriptionheading">
            <h3>Product Description</h3>
          </div>
          <p>
            When it's colder than the far side of the moon and spitting rain
            too, you've still got to look good. From water-repellent leather to
            a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can
            keep your flame burning when the weather hits. Metal lace hardware
            and extended tongue bring mountain boot toughness, while the
            star-studded toe design gives your look the edge
          </p>

          <div className="descriptionheading">
            <h3>Benifits</h3>
          </div>

          <div className="descriptionheading">
            <ul className="benefits-list">
              <li>
                <span className="checkmark">&#10003;</span>
                Durable leather is easily cleanable so you can keep your look
                fresh.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Water-repellent
                finish and internal membrane help keep your feet dry.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Toe piece with star
                pattern adds durability.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Synthetic insulation
                helps keep you warm.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Originally designed
                for performance hoops, the Air unit delivers lightweight
                cushioning.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Plush tongue wraps
                over the ankle to help keep out the moisture and cold.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Rubber outsole with
                aggressive traction pattern adds durable grip.
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Durable leather is
                easily cleanable so you can keep your look fresh.
              </li>
            </ul>
          </div>

          <div className="descriptionheading">
            <h3>Product Details</h3>
          </div>

          <div className="descriptionheading">
            <ul className="benefits-list">
              <li>
                <span className="checkmark">&#10003;</span>
                Not intended for use as Personal Protective Equipment (PPE){" "}
              </li>
              <li>
                <span className="checkmark">&#10003;</span> Water-repellent
                finish and internal membrane help keep your feet dry.
              </li>
            </ul>
          </div>
        </div>
      )}

      {selectedTab === "reviews" && (
        <div className="description">
          <div className="descriptionheading">
            <h3>Customers Feedback</h3>
          </div>
          <div className="descriptionheading">
            <div className="ratingbox">
              <h1>4.8</h1>
              <div className="stars">
                <span className="star filled">&#9733;</span>
                <span className="star filled">&#9733;</span>
                <span className="star filled">&#9733;</span>
                <span className="star filled">&#9733;</span>
                <span className="star">&#9734;</span>
              </div>
              <p>Product Rating</p>
            </div>
          </div>
          <div className="descriptionheading">
            <h3>Reviews</h3>
          </div>
          <div className="descriptionheading">
            <ul className="review-list">
              <li>
                <div className="profile-section">
                  <p>
                    <span className="profilepic">J</span>
                    <span className="profilename">Jay Bhavsar</span>
                  </p>
                </div>

                <h3 className="subHead">Great Product</h3>
                <p className="subParagrah">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Veritatis velit quas itaque ea
                  tempora iste hic corporis rem odit illo perferendis,
                  voluptates et eum ipsa molestiae magni corrupti optio tenetur,
                  excepturi nobis cum iusto eligendi, quis quibusdam!
                  Consequatur, quidem dolores!
                </p>

                <div className="review-actions">
                  <span>
                    <img src={like} alt="" />
                  </span>{" "}
                  <a className="like-btn">Like</a>
                  <a className="reply-btn">Reply</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="descriptionheading">
            <ul className="review-list">
              <li>
                <div className="profile-section">
                  <p>
                    <span className="profilepic">J</span>
                    <span className="profilename">Jay Bhavsar</span>
                  </p>
                </div>

                <h3 className="subHead">Great Product</h3>
                <p className="subParagrah">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Veritatis velit quas itaque ea
                  tempora iste hic corporis rem odit illo perferendis,
                  voluptates et eum ipsa molestiae magni corrupti optio tenetur,
                  excepturi nobis cum iusto eligendi, quis quibusdam!
                  Consequatur, quidem dolores!
                </p>

                <div className="review-actions">
                  <span>
                    <img src={like} alt="" />
                  </span>{" "}
                  <a className="like-btn">Like</a>
                  <a className="reply-btn">Reply</a>
                </div>
              </li>
            </ul>
          </div>

          <a className="allReviews">View All Reviews</a>

          <div className="descriptionheading">
            <h3>Write a Review</h3>
          </div>

          <p>
            <p>What is it like to Product?</p>
            <div className="stars">
              <span className="star filled">&#9733;</span>
              <span className="star filled">&#9733;</span>
              <span className="star filled">&#9733;</span>
              <span className="star filled">&#9733;</span>
              <span className="star">&#9734;</span>
            </div>
            When it's colder than the far side of the moon and spitting rain
            too, you've still got to look good. From water-repellent leather to
            a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you can
            keep your flame burning when the weather hits. Metal lace hardware
            and extended tongue bring mountain boot toughness, while the
            star-studded toe design gives your look the edge
          </p>

          <div className="reviewFormFlex">
            <div className="review-form-container">
              <form className="review-form">
                <div className="form-group">
                  <label htmlFor="review-title">Review Title</label>
                  <input
                    type="text"
                    id="review-title"
                    placeholder="Enter your review title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="review-content">Review Content</label>
                  <textarea
                    id="review-content"
                    placeholder="Write your review here"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
