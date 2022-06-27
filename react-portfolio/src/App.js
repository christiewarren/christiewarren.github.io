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
      <Link to="/">Home</Link>
      <Link to="/about-me">About</Link>
      <Link to="/#work">About</Link>
      <Link to="/sitewide-search">Sitewide Search @KiwiCo</Link>
      <Link to="/nav-redesign">Navigation Redesign @KiwiCo</Link>
      <Link to="/lionplanner">LionPlanner</Link>
      <Link to="/revu">Revu</Link>
      <Link to="/family-history">Family History Archive</Link>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about-me' element={<About/>} />
          {/* Projects */}
          <Route path='/sitewide-search' element={<Search/>} />
          <Route path='/nav-redesign' element={<NavRedesign/>} />
          <Route path='/lionplanner' element={<Lionplanner/>} />
          <Route path='/revu' element={<Revu/>} />
          <Route path='/family-history' element={<FamHistory/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
