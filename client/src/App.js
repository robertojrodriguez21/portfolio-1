import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [navLinksActivated, setNavLinksActivated] = useState(false)

  const navLinksToggle = () => {
    navLinksActivated ? setNavLinksActivated(false) : setNavLinksActivated(true)
  }

  return !navLinksActivated ? (
    <div className="App">
      <nav>
        <Nav
          navLinksActivated={navLinksActivated}
          navLinksToggle={navLinksToggle}
        />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  ) : (
    <div className="App">
      <nav>
        <Nav
          navLinksActivated={navLinksActivated}
          navLinksToggle={navLinksToggle}
        />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
