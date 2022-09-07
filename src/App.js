import { BrowserRouter, Routes, Route } from "react-router-dom"


import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:slug/products=" element={<Products />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App