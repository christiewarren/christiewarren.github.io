// import Nav from './components/Nav.js'
import ProjectList from './ProjectList.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About.js'

export default function Home() {
  return (
      <>
      <section id="welcome">
        <div className="welcome-text">
            <h2>Thoughtful, clean UX design. <span style={{textDecoration: 'line-through'}}>No&nbsp;frills.</span> *</h2>
            <h3>* Frills in moderation. Who doesn't love a good frill?</h3>
        </div>
      </section>
      <ProjectList />
      </>
  );
}
