import './App.css';
import Nav from './components/Nav.js'
// import ProjectList from './components/ProjectList.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import About from './components/About.js'
import Home from './components/Home.js'
import Search from './components/projects/Search.js'
import NavRedesign from './components/projects/NavRedesign.js'
import Lionplanner from './components/projects/Lionplanner.js'
import Revu from './components/projects/Revu.js'
import FamHistory from './components/projects/FamHistory.js'

function App() {
  return (
    <Router>
      <>
      <div className='nav-wrap'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/about-me" className='nav-link'>About</Link>
        <Link to="/#work" className='nav-link'>Work</Link>
        <Link to="/sitewide-search" className='nav-link-secondary'>Sitewide Search @KiwiCo</Link>
        <Link to="/nav-redesign" className='nav-link-secondary'>Navigation Redesign @KiwiCo</Link>
        <Link to="/lionplanner" className='nav-link-secondary'>LionPlanner</Link>
        <Link to="/revu" className='nav-link-secondary'>Revu</Link>
        <Link to="/family-archive" className='nav-link-secondary'>Family History Archive</Link>
      </div>

      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about-me' element={<About/>} />
          {/* Projects */}
          <Route path='/sitewide-search' element={<Search/>} />
          <Route path='/nav-redesign' element={<NavRedesign/>} />
          <Route path='/lionplanner' element={<Lionplanner/>} />
          <Route path='/revu' element={<Revu/>} />
          <Route path='/family-archive' element={<FamHistory/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
