import HeroSection from './component/HeroSection';
import Navbar from './component/Navbar';
import Offer from './component/Offer';
import Footer from './component/footer';

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