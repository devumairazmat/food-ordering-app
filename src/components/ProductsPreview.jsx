import React from "react";
import { useState, useEffect } from "react";
import { ProductPreviewCard } from "../components/ProductPreviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import  { addToCart } from "../store/cart/cartSlice";

function ProductsPreview() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((e) => console.log(e));
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
    console.log(product);
  };
  return (
    <>
      <div className="w-full text-white bg-black p-4">
        <Carousel responsive={responsive}>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <div className="w-full p-4">
                  <ProductPreviewCard
                    key={index}
                    product={product}
                    onAddProduct={onAddProduct}
                  />
                </div>
              );
            })}
        </Carousel>
      </div>
    </>
  );
}

export default ProductsPreview;
