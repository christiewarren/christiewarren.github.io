import './App.css';
import Nav from './components/Nav.js'
// import ProjectList from './components/ProjectList.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About.js'
import Home from './components/Home.js'
import Search from './components/Search.js'

function App() {
  return (
    <Router>
      <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/sitewide-search' element={<Search/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
