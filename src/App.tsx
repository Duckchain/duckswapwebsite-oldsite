import { About } from "./component/About"
import { Duckmap } from "./component/Duckmap"
import { Ducknomics } from "./component/Ducknomics"
import { Footer } from "./component/Footer"
import { Hero } from "./component/Hero"
import { Buy } from "./component/HowtoBuy"
import { JoinUs } from "./component/Joinus"
import { NavbarMob } from "./component/NavbarMob"


function App() {

  return (
    <>
      <Hero />
      <About />
      <Buy />
      <Ducknomics />
      <Duckmap />
      <JoinUs />
      <Footer />
      <NavbarMob />
    </>
  )
}

export default App
