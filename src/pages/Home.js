import { useEffect, useState } from "react"
import Container from "../components/Container"
import Header from "../components/Header"
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Card from "../components/Card"
// import * as Scroll from 'react-scroll'; SCROLLING FOR START BUTTON , DOC https://www.npmjs.com/package/react-scroll


const Home = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    const request = await fetch("http://localhost:5000/categories")
    const response = await request.json()
    setCategories(response)
  }


    return (
      <>
        <Navbar/>
        <Header/>
        <Container>
      <main className="flex flex-wrap">
      {categories.map((category) => {
        return (
          <Card
            title={category.title}
            image={category.image}
          />
        )
      })}
      </main>
      </Container>
      <Footer/>
      </>
    )
  }
  
  export default Home