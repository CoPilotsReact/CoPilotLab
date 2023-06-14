import { Card } from "../card";
import { ProductProps } from "../../models/Product";
import { withProducts } from "../../hocs/withProducts";
import { StyledProducts } from "../styles/Products.styled";
import { Link, Outlet } from "react-router-dom";

export interface SortableProductProps {
  products: Array<ProductProps>
}

const Products = ({products}: SortableProductProps) => {
  
  return (
    <>
        <h1>Products</h1>
      <StyledProducts>
      <ul>
        {products.map((product) => {
          return (
            <>
            <Link to={"/product/"+product.id.toString()}>
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
              </Link>
            </>
          );
        })}
      </ul>
        </StyledProducts>
        <Outlet/>
    </>
  );
};

export default withProducts(Products);

