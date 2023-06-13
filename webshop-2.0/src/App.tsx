import Header from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import { StyledContainer } from "./components/styles/Container.styled";
import { Products } from "./components/pages/products";
import { Contact } from "./components/pages/contact";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";

// https://coolors.co/98ce00-16e0bd-78c3fb-89a6fb-98838f
const theme = {
  colors: {
    body: "#FFF",
    nav: "#FFF",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Products></Products>
      </>
    </ThemeProvider>
  );
}

export default App;

/*

  <Header />
        <StyledContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route index element={<Products />} />
                <Route index element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StyledContainer>
        <Footer />

        */
