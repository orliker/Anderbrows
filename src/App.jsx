import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Authority from './components/Authority.jsx'
import Audience from './components/Audience.jsx'
import Curriculum from './components/Curriculum.jsx'
import Transformation from './components/Transformation.jsx'
import Earnings from './components/Earnings.jsx'
import Included from './components/Included.jsx'
import Bonus from './components/Bonus.jsx'
import Investment from './components/Investment.jsx'
import MethodVisual from './components/MethodVisual.jsx'
import Trainers from './components/Trainers.jsx'
import ModelRequirements from './components/ModelRequirements.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Authority />
        <Audience />
        <Curriculum />
        <Transformation />
        <Earnings />
        <Included />
        <Bonus />
        <Investment />
        <MethodVisual />
        <Trainers />
        <ModelRequirements />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
