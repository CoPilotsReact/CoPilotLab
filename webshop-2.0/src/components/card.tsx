import React from "react";
import { ProductProps } from "../models/Product";



export const Card = ({
  id,
  title,
  price,
  description,
  image,
  category,
}: ProductProps) => {
  return (
    <>
      <div>
        <img src={image} alt={title}></img>
      </div>
    </>
  );
};
