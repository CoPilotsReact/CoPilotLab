import { Outlet } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";

const ProductsPage = () => {
  
  return (
    <>
      <h1>Products</h1>
      <ProductList />
    </>
  );
};

export default ProductsPage;