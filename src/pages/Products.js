import { useEffect, useState } from "react"
import Card from "../components/Card"

const  Products= () => {
    const [users, setUsers] = useState([])

  
    return (
      <main className=" flex flex-wrap justify-center">
        <h1>Home page</h1>
        <Card/>
      </main>
    )
  }
  
  export default Products