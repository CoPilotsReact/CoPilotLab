import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../../pages/HomePage'
import ProductPage from '../../pages/ProductPage'
import { ContactPage } from '../../pages/ContactPage'
import { CartPage } from '../../pages/CartPage'
import Nav from '../Nav/Nav'
import ProductsPage from '../../pages/ProductsPage'
import Header from '../Header/Header'

//TODO : Didn't work to move routing to its own component, tons of errors in console.

const RoutesComponent = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Nav />} />
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
  </Routes>
  </BrowserRouter></>
  )
}

export default RoutesComponent