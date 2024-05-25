import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Project from './containers/project';
import Skills from './containers/skills';
import Progress from './containers/progress';
import GEIW from './containers/geiw';
import Contact from './containers/contact';
import Navbar from './components/navBar';
import Stage from './containers/intership_offer';
import Particle from './utils.js/particles';

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname==="/";
  return (
    <div className="App">
      {/* particles js*/}
      {
        renderParticleJsInHomePage &&
        <Particle id="particles" init={handleInit}/>
      }
      

      {/* navbar*/}
      <Navbar />

      {/* main page content  */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/intership_offer' element={<Stage/>}/>
        <Route path='/progress' element={<Progress/>}/>
        <Route path='/geiw' element={<GEIW/>}/>
      </Routes>
      </div>

    </div>
  );
}

export default App;
