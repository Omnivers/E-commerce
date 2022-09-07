import { BrowserRouter, Routes, Route } from "react-router-dom"


import React from "react"
import Home from "./pages/Home"
import Container from "./components/Container"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
// import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:slug/products=" element={<Products />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App