import { combineReducers, createStore } from "redux"
import { productsReducer } from "./ProductReducer"
import { choosenProductsReducer } from "./ChosenProductReducer"


const combined = combineReducers({products: productsReducer, chosenProducts: choosenProductsReducer})

export const store = createStore(combined)

export type StoreDispatch = typeof store.dispatch
