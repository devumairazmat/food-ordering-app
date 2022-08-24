import React from "react";
import { useState, useEffect } from "react";
import { ProductPreviewCard } from "../components/ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ProductsPreview() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/api/products')
        .then(response => response.json())
        .then(data => setProducts(data?.data))
        .catch(e => console.log(e))
}, [])
  return (
    <>
      <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
        <h2>Products</h2>
        {products.length > 0 &&
          products.map((product, index) => {
            return <ProductPreviewCard key={index} product={product} />;
          })}
      </div>
    </>
  );
}

export default ProductsPreview;
