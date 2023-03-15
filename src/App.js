import {motion,useScroll} from 'framer-motion'
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Aboutus from './components/Aboutus/Aboutus';
// import SmallNavbar from './components/smallNavbar/smallNavbar';

function App() {
  const {scrollYProgress}=useScroll()
  return (
    <div className="App">
      <motion.div className='progressBar'
      style={{scaleX:scrollYProgress}}></motion.div>
      <Navbar/>
      {/* <SmallNavbar/> */}
      <Hero/>
      <Aboutus/>
      <Services/>
      <Clients/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default App;
