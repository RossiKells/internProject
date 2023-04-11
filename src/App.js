import { motion, useScroll } from 'framer-motion'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Stem from './additionalcomp/Stem';
import ITconsult from './additionalcomp/ITconsult';
import Container from './container/Container';
import SoftwareDev from './additionalcomp/SoftwareDev';
import Placement from './additionalcomp/Placement';
import JavaSyllabus from './additionalcomp/JavaSyllabus';
import Lms from './additionalcomp/Lms';
import Ourteam from './additionalcomp/Ourteam';
import DigitalMarketingSyllabus from './additionalcomp/DigitalMarketingSyllabus';
import DBMSsyllabus from './additionalcomp/DBMSsyllabus';
import ASPSyllabus from './additionalcomp/ASPSyllabus';
import Flutter from './additionalcomp/Flutter';
import DjangoSyllabus from './additionalcomp/DjangoSyllabus';

// import SmallNavbar from './components/smallNavbar/smallNavbar';

function App() {
  const { scrollYProgress } = useScroll()
  return (

    
      <div className="App">
        <motion.div className='progressBar'
          style={{ scaleX: scrollYProgress }}></motion.div>
      <Router>
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/stem' element={<Stem />} />
          <Route path='/team' element={<Ourteam />} />
          <Route path='/ITconsultation' element={<ITconsult />} />
          <Route path='/softwaredevelopment' element={<SoftwareDev/>}/>
          <Route path='/placement' element={<Placement/>} />
          <Route path='/Javasyllabus' element={<JavaSyllabus/>} />
          <Route path='/DigitalMarketing-syllabus' element={<DigitalMarketingSyllabus/>}></Route>
          <Route path='/DBMS-syllabus' element={<DBMSsyllabus/>} />
          <Route path='/ASP-syllabus' element={<ASPSyllabus/>} />
          <Route path='/flutter-syllabus' element={<Flutter/>} />
          <Route path='/django-syllabus' element={<DjangoSyllabus/>} />



         
          <Route path='/lms' element={<Lms/>} />
          


        </Routes>


        </Router>



      </div>
    

  );
}

export default App;
