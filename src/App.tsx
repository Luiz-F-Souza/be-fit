import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./scenes/home/Home"



function App() {


  return (
    <div className="app min-h-screen relative">
      <header className="pb-24 md:pb-40">
        <Navbar />
      </header>

      <article>
        <Home />
      </article>
    </div>
  )
}

export default App
