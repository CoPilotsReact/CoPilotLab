import { Component, ComponentType, useEffect, useState } from "react";
import { ProductProps } from "../models/Product";

export function withSortableProducts<T> (Component: ComponentType<T>) {

    return (hocProps: Omit<T, "products">) =>  {
        const [products, setProducts] = useState(Array<ProductProps>);
        useEffect(() => {
                    console.log("USE EFFECT IN PRODUCTS RAN!");
                    fetch("https://fakestoreapi.com/products")
                    .then((res) => res.json())
                    .then((json) => setProducts(json));
                }, []);

        return (<Component {...(hocProps as T)} products={products}/>);
    }
   
}