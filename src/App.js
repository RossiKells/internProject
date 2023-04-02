import { motion, useScroll } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Stem from './additionalcomp/Stem';
import ITconsult from './additionalcomp/ITconsult';
import Container from './container/Container';
import SoftwareDev from './additionalcomp/SoftwareDev';
import Placement from './additionalcomp/Placement';
import Syllabus from './additionalcomp/Syllabus';

// import SmallNavbar from './components/smallNavbar/smallNavbar';

function App() {
  const { scrollYProgress } = useScroll()
  return (

    
      <div className="App">
        <motion.div className='progressBar'
          style={{ scaleX: scrollYProgress }}></motion.div>
      <Router>
        <Routes>
          <Route path='/stem' element={<Stem />} />




          <Route path='/' element={<Container />} />
          <Route path='/ITconsultation' element={<ITconsult />} />
          <Route path='/softwaredevelopment' element={<SoftwareDev/>}/>
          <Route path='/placement' element={<Placement />} />
          <Route path='/syllabus' element={<Syllabus />} />

        </Routes>


        </Router>



      </div>
    

  );
}

export default App;
