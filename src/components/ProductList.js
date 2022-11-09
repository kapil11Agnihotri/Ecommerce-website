import "../App.css";

import { Link } from "react-router-dom";

function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => (

        <div key={productItem.key} style={{ width: "25%" }}>
          <div className="product-item">
            <Link to={`/Store/${productItem.key}`}>
              {""}
              <p style={{ color: "black", textAlign: "center" }}>
                {productItem.title}
              </p>
              <br />
              <img src={productItem.url} width="100%" alt="color" />
            </Link>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px",
              }}
            >
              <p> Rs. {productItem.price} /-</p>
              <button
                onClick={() => addToCart(productItem)}
                style={{ background: "green", color: "white" }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
