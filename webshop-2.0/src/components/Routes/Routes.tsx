import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../../pages/HomePage'
import ProductsPage from '../pages/ProductsPage'
import ProductPage from '../../pages/ProductPage'
import { ContactPage } from '../../pages/ContactPage'

const RoutesComponent = () => {
  return (
    <>
    <BrowserRouter>
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