import Header from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StyledContainer } from "./components/styles/Container.styled"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./components/styles/GlobalStyles"
//import RoutesComponent from "./components/Routes/RoutesComponent"
import Nav from "./components/Nav/Nav"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductPage from "./pages/ProductPage"
import { ContactPage } from "./pages/ContactPage"
import { CartPage } from "./pages/CartPage"


// https://coolors.co/98ce00-16e0bd-78c3fb-89a6fb-98838f
const theme = {
  colors: {
    body: "#FFF",
    nav: "#FFF",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <BrowserRouter>
      <GlobalStyles/>
        <Header />
        <StyledContainer>
            <Routes>
              <Route path="/" element={<Nav/>}/>
              <Route index element={<HomePage />}/>
              <Route path="products" element={<ProductsPage />}/>
              <Route path="product/:id" element={<ProductPage />}/>
              <Route path="contact" element={<ContactPage />} />
              <Route path="cart" element={<CartPage/>}/>
            </Routes>
        </StyledContainer>
        </BrowserRouter>
      <Footer />
    </>
  </ThemeProvider>
  )
}

export default App
