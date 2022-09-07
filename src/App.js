import { BrowserRouter, Routes, Route } from "react-router-dom"


import React from "react"
import Home from "./pages/Home"
// import NotFound from "./pages/NotFound"
// import "./App.css"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import Navbar from "./components/Navbar"
import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:slug/products=" element={<Products />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App