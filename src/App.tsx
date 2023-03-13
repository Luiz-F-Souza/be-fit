import { Navbar } from "./components/navbar/Navbar"
import { Benefits } from "./scenes/benefits/Benefits"
import { ContactUs } from "./scenes/contact-us/ContactUs"
import { Footer } from "./scenes/footer/Footer"
import { Home } from "./scenes/home/Home"
import { OurClasses } from "./scenes/our-classes/OurClasses"



function App() {


  return (
    <div className="app min-h-screen relative">
      <header className="pb-24 md:pb-40">
        <Navbar />
      </header>

      <main className="mb-4 overflow-x-hidden">

        {/* Article */}
        <Home />

        {/* Article */}
        <Benefits />

        {/* Article */}
        <OurClasses />

        {/* Article */}
        <ContactUs />
      </main>

      <Footer />

    </div>
  )
}

export default App
