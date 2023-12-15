import { useState } from 'react'

import './App.css'
import Home from "./components/home";
import Posts from "./components/posts";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
     <Posts/>
    </>
  )
}

export default App
