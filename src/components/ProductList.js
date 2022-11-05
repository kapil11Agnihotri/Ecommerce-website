import "../App.css";

import { Link } from "react-router-dom";
function ProductList({ product, addToCart }) {
  return (
    <div className="flex">
      {product.map((productItem, productIndex) => {
        console.log(productItem.key)
        return (
          <div style={{ width: "25%" }}>
            <div className="product-item">
              <Link to={`/Store/${productItem.key}`}>
                {""}
                <img src={productItem.url} width="100%" alt="color" />
                </Link>
                <p>{productItem.title}</p>
              
              <p> Rs. {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
