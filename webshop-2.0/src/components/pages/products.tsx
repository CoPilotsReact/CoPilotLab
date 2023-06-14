import React, { useEffect, useState } from "react";
import { Card } from "../card";
import { ProductProps } from "../../models/Product";
import { withSortableProducts } from "../../hocs/withSortableProducts";

export interface SortableProductProps {
  products: Array<ProductProps>
}

const Products = ({products}: SortableProductProps) => {
  

  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
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
    </>
  );
};

export default withSortableProducts(Products);

