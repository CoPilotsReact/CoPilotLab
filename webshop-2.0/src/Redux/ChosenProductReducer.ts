import { ProductProps, SimpleProductQuantity } from "../components/Product/Product.types";
import { store } from "./Store";

type AddProduct = { type: "ADD_PRODUCT"; payload: ProductProps; };
type IncreaseProductQuantity = { type: "INCREASE_PRODUCT_QUANTITY"; payload: SimpleProductQuantity; };
type DecreaseProductQuantity = { type: "DECREASE_PRODUCT_QUANTITY"; payload: SimpleProductQuantity; };
type RemoveProduct = { type: "REMOVE_PRODUCT"; payload: SimpleProductQuantity; };

type Action = AddProduct | IncreaseProductQuantity | DecreaseProductQuantity | RemoveProduct;

export interface ChoosenProductsState {
    choosenProducts: SimpleProductQuantity[]
}

const initialState = {
    //choosenProducts: []
    choosenProducts: [{ id: 1, title: "test", price: 10, quantity: 2 }]
};

//TODO : We have some issue with a circular dependency so we have to initiate this reducer in another file. No clue why. 
export const choosenProductsReducer = (state: ChoosenProductsState = initialState, action: Action) => {

    console.log("Inside dummyreducer now");
    switch (action.type) {
        case "INCREASE_PRODUCT_QUANTITY": {
            return { ...state, choosenProducts: state.choosenProducts };
        }
        default: {
            return state;
        }
    }
};


