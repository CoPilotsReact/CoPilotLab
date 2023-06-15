import { StyledProducts } from './ProductList.styled';
import { Card } from '../Cards/Card';
import { Link, Outlet } from 'react-router-dom';
import { withProducts } from '../../hocs/withProducts';
import { ProductListProps } from './ProductList.types';

const ProductList = ({products}: ProductListProps) => {
  return (
    <>
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
      <Outlet/>
    </ul>
      </StyledProducts>
      </>
  )
}

export default withProducts(ProductList)