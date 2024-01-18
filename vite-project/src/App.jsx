  import React from 'react';
  import './App.css';
  import '../public/styles.css';
  import Navbar from './Components/Navbar';
  import Footer from './Components/Footer'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Index from './Pages/Index';
  import AboutPage from './Pages/AboutPage';
  import Menu from './Components/Menu';
import HeroProjects from './Components/HeroProjects';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';


  function App() {

    const[isMenu,setIsMenu]=React.useState(true)

    function toggleFunction(){
      setIsMenu(!isMenu)
    }

    console.log(isMenu)

    return (
      <div>
        
        <Navbar clickHandle={toggleFunction} MenuStaus={isMenu} />
        <Router>
          <Routes>
             <Route path="/" element={isMenu ? <Index MenuStaus={isMenu} /> : <Menu MenuStaus={isMenu} clickHandle={toggleFunction} />} />
            
            <Route path="/about" element={isMenu? <AboutPage/>:<Menu MenuStaus={isMenu} clickHandle={toggleFunction} />} />

            <Route path="/projects" element={isMenu? <ProjectsPage/>:<Menu MenuStaus={isMenu} clickHandle={toggleFunction} />} />

            <Route path="/contact" element={isMenu? <ContactPage/>:<Menu MenuStaus={isMenu} clickHandle={toggleFunction} />} />
            
          </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }

export default App;
