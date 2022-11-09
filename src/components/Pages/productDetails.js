import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const ProductDetails = (props) => {
  const { productId } = useParams();

  let prod = props.product.filter((single) => {
    return single.key ===Number(productId)
  });

  return (
    <>
      <Header />
      <div className="flex" style={{ marginLeft: "40%" }}>
        <div style={{ width: "30%" }}>
          <div style={{ padding: "10px" }}>
            <h2>{prod[0].title}</h2>
            <br />
            <img src={prod[0].url} width="100%" alt="color" />
            <br />
            <h3> Rs. {prod[0].price} /-</h3>
            <br/>
            <p>
              <h3>Description:</h3>As a child Wassily Kandinsky learned to play the cello and piano.
              As an artist, he made associations between art and music. “The
              sound of colors is so definite that it would be hard to find
              anyone who would express bright yellow with base notes, or dark
              lake with the treble.” He wrote, “Color is the keyboard, the eyes
              are the harmonies, the soul is the piano with many strings. The
              artist is the hand that plays, touching one key or another, to
              cause vibrations in the soul.”
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
