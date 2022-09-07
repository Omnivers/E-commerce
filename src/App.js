import { BrowserRouter, Routes, Route } from "react-router-dom"


import React from "react"
import Home from "./pages/Home"
import Footer from '../pages/Footer'
// import NotFound from "./pages/NotFound"
// import "./App.css"


const App = () => {
  return (
    <BrowserRouter>
      {/* <Container> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      {/* </Container> */}
    </BrowserRouter>
  )
}

export default App