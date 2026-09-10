import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
     <header>
      <Navbar></Navbar>
     </header>
     <main>
      <HeroSection></HeroSection>
     </main>
    </div>
  )
}

export default App
