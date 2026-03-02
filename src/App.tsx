import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

// Pages
import Home from './pages/Home'
import Events from './pages/Events'
import Sponsors from './pages/Sponsors'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import About from './pages/About'
import Schedule from './pages/Schedule'
import DayEvents from './pages/DayEvents'
import Passes from './pages/Passes'

function App() {
  return (
    <Router>
      <div className="App">
        <LoadingScreen />

        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/events/:dayId" element={<DayEvents />} />
            <Route path="/passes" element={<Passes />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App