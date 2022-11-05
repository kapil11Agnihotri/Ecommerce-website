import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails = (props) => {
  const { productId } = useParams();
  console.log(props.product);
  let prod = props.product.filter((single) => {
    console.log(single);
    return single.key == productId;
  });
  console.log(prod);

  return (
    <div className="flex" style={{marginLeft: "40%"}}>
      <div style={{ width: "25%" }}>
        <div className="product-item">
          <img src={prod[0].url} width="100%" alt="color" />

          <h2>{prod[0].title}</h2>

          <h3> Rs. {prod[0].price} /-</h3>
          <br/>
          <br/>
          <p>
            Most albums are recorded in a studio,[2] although they may also be
            recorded in a concert venue, at home, in the field, or a mix of
            places. The time frame for completely recording an album varies
            between a few hours to several years. This process usually requires
            several takes with different parts recorded separately, and then
            brought or "mixed" together. Recordings that are done in one take
            without overdubbing are termed "live", even when done in a studio.
            
          </p>
          {/* <button onClick={() => addToCart(prod)}>
              Add To Cart
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
