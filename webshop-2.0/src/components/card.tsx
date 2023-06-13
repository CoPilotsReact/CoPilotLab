import React from "react";

//TODO : Don't duplicate this interface
interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

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
