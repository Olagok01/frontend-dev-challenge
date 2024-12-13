import HeroSection from './component/HeroSection.jsx';
import Navbar from './component/Navbar.jsx';
import Offer from './component/Offer.jsx';
import Footer from './component/Footer.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection/>
      </div>

      <div>
        <Offer/>
      </div>
      
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Footer/>
      </div>
      
    </>
  )
}

export default App