import { Dispatch } from "react"
import { ProductProps, ProductQuantity, SimpleProductQuantity } from "../components/Product/Product.types"
import { StoreDispatch, store } from "./Store"

// For some reason the state in the store isn't initialized when we try to call this. No idea why. That's why we tried to split it into another file.

export const AddProduct = (id: number) => {
    const state = store.getState()
    let choosenProducts = state.chosenProducts
    
}




















































// export const choosenProductsReducer = (state: ChoosenProductsState = initialState, action: Action ) => {

//     console.log("Inside reducer now")
//     switch (action.type) {
//         case "INCREASE_PRODUCT_QUANTITY": {
//             return {...state, choosenProducts: state.choosenProducts}
//         }
//         default: {
//             return state
//         }
//     }
// }
// export interface ChoosenProductsState {
//     choosenProducts: SimpleProductQuantity[]
// }

// export const initialState = {
//     //choosenProducts: []
//     choosenProducts: [{id: 1, title: "test", price: 10, quantity: 2}]
// }

/*
:    return (dispatch: Dispatch<SaveValue>, getState: () => State): void => {
        axios.post('www.exampleurl.com', value)
            .then((response) => {
                const someValueFromState = getState().stateValue;
                const payload = {...response, someValueFromState}
                dispatch({ type: constants.SAVE_VALUE, payload });
            });
    };
};

*/


// product: ProductProps
// export const AddProduct = () => {

//     console.log("hello from addproduct")

//     //return (dispatch: Dispatch<Action>, getState: () => ChoosenProductsState) => {

//         const state = store.getState()
//         console.log(state)
//         let choosenProducts = state.chosenProducts
//         console.log(choosenProducts)

//         //return {type: "ADD_PRODUCT" payload: {}}
//         // Dispatch something, just a placeholder by now
//         //dispatch({type: "ADD_PRODUCT", payload: {id: 1, category: "test", description: "test", image: "test", price: 10, title: "test"}})
//     //}

//     // Kolla om producten redan finns
//     // Om finns -> Plussa quantity
//     // Om inte finns -> Lägg till ny med quantity 1

// }

// Actions
// type AddProduct = { type: "ADD_PRODUCT", payload: ProductProps }

// type IncreaseProductQuantity = { type: "INCREASE_PRODUCT_QUANTITY", payload: SimpleProductQuantity }

// type DecreaseProductQuantity = { type: "DECREASE_PRODUCT_QUANTITY", payload: SimpleProductQuantity }

// type RemoveProduct = { type: "REMOVE_PRODUCT", payload: SimpleProductQuantity }


// type Action = AddProduct | IncreaseProductQuantity | DecreaseProductQuantity | RemoveProduct


