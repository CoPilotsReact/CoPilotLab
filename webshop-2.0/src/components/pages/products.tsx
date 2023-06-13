import React, { useEffect, useState } from "react";
import { Card } from "../card";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const Products = () => {
  const [products, setProducts] = useState(Array<ProductProps>);

  // Maybe we can fetch all product categories and filter them? Without causing a re-render maybe?
  useEffect(() => {
    console.log("USE EFFECT IN PRODUCTS RAN!");
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  //TODO : This useEffect runs continually. Why the fuck does it do that.

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
    </>
  );
};

/*

<ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Card
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                category={product.category}
              ></Card>
            </li>
          );
        })}
      </ul>
      */
