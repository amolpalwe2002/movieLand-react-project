
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("superman");

  return (
    <>
     <Header search={search} setSearch={setSearch}/>
     <Main search={search} setSearch={setSearch} />
     <Footer />

    </>
  )
} 

export default App
