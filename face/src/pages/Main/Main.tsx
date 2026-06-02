import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Locations } from "./components/Locations"
import { Menu } from "./components/Menu"
import "./styles.css"

export default function MainPage() {
  return <>
    <Hero />
    <Menu />
    <Locations />
    <Footer />
  </>
}