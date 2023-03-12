import { Navbar } from "./components/navbar/Navbar"
import { Benefits } from "./scenes/benefits/Benefits"
import { Home } from "./scenes/home/Home"



function App() {


  return (
    <div className="app min-h-screen relative min-h-[300vh]">
      <header className="pb-24 md:pb-40">
        <Navbar />
      </header>

      <main className="mb-4">

        {/* Article */}
        <Home />

        {/* Article */}
        <Benefits />
      </main>


    </div>
  )
}

export default App
