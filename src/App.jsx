import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)



const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-amber-300 text-6xl">welcome to the world of gta and gsap</h1>
      </div>
    </main>
  )
}
export default App