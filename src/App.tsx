import { About } from "./component/About"
import { Duckmap } from "./component/Duckmap"
import { Ducknomics } from "./component/Ducknomics"
import { Footer } from "./component/Footer"
import { Hero } from "./component/Hero"
import { Buy } from "./component/HowtoBuy"
import { JoinUs } from "./component/Joinus"
import { NavbarMob } from "./component/NavbarMob"
import { Utilities } from "./component/Utilities"
import { BridgeSelect } from "./component/Bridge/Select"

function App() {

  return (
    <>
      <Hero />
      <About />
      <Buy />
      <Ducknomics />
      <Utilities />
      <BridgeSelect />
      <Duckmap />
      <JoinUs />
      <Footer />
      <NavbarMob />
    </>
  )
}

export default App
