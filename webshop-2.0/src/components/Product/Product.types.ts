

export interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }

  export type ProductQuantity = {
    chosenProduct: ProductProps,
    quantity: number
}

export type SimpleProductQuantity = {
  id: number,
  title: string,
  price: number,
  quantity: number
}