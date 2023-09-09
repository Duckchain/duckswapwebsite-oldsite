// import { About } from "./component/About"
// import { Duckmap } from "./component/Duckmap"
// import { Ducknomics } from "./component/Ducknomics"
// import { Footer } from "./component/Footer"
// import { Buy } from "./component/HowtoBuy"
// import { JoinUs } from "./component/Joinus"
// import { Utilities } from "./component/Utilities"
// import { BridgeSelect } from "./component/Bridge/Select"
// import { Hero } from "./component/Hero"
// import { NavbarMob } from "./component/NavbarMob"
import { CountDown } from './component/Countdown'

function App() {

  return (
    <>
      <div className="mt-[10rem]">
        <div className="text-center space-y-4">
          <h1 className='text-5xl font-bold'>Coming Soon!!!</h1>
          <p>New website release</p>
          <p>High performance, scalable and low fees layer -2 solution for BNB Chain ⛓️ Decentralization, security for global adoption.</p>
        </div>
        <CountDown />
      </div>
    </>
  )
}

export default App
