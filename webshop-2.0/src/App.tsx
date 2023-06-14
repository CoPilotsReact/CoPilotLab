import Header from "./components/header";
import { Footer } from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import { StyledContainer } from "./components/styles/Container.styled";
import { Contact } from "./components/pages/contact";
import { ThemeProvider } from "styled-components";
import Products from "./components/pages/products";
import Nav from "./components/nav";

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
        <BrowserRouter>
        <Header />
        <StyledContainer>
            <Routes>
              <Route path="/" element={<Nav/>}/>
              <Route index element={<Home />}/>
              <Route path="products" element={<Products />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
        </StyledContainer>
          </BrowserRouter>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

