
import './App.css'
import Business from './components/Business'
import Compliment from './components/Compliment'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Promise from './components/Promise'
import Service from './components/Service'
import SlideImage from './components/SlideImage'

function App() {
  

  return (
   <div className='bg-[#D4AF37]'>
    <Navbar />
    <SlideImage />
    <Service />
    <Business />
    <Compliment />
    <Promise />
    <Footer />
   </div>
  )
}

export default App
