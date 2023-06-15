import { ProductProps } from "../Product/Product.types";
import { StyledCard } from "./Card.styled";


export  const Card = ({
  id,
  title,
  price,
  description,
  image,
  category,
}: ProductProps) => {
  return (
    <>
    <StyledCard>
      <div className="card">
        <p>{category.toUpperCase()}</p>
        <p>{title}</p>
        <img src={image} alt={title}></img>
        <p>{price}$</p>
        </div>
      </StyledCard>
    </>
  );
};
