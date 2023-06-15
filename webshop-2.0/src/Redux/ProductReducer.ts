import { ProductProps } from "../components/Product/Product.types";

export interface ProductState {
    products: ProductProps[]
}

const initialState = {
    //products: []
    products: [{id: 1, title: "test", description: "test", price: 1, image: "test", category: "test"}]
}

type SetProductsAction = {type: "SET_PRODUCTS", payload: ProductProps}

export const productsReducer = (state: ProductState = initialState, action: SetProductsAction) => {
    console.log("Inside products reducer")
    switch (action.type){
        case "SET_PRODUCTS": {
            return {...state, products: action.payload};
        }
        default: {
            return state;
        }
    }
}