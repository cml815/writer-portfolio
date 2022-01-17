import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
// import { SideNav } from './components/sideNav'
import './global.css';
import './App.css';

function App() {
  return (
    <>
    <div className="Container">
      <div className="Container-text">
      <h1>Connected</h1>
      <h2>I'm Caroline Leopold and I help audiences grasp health, research and technology.</h2>
      </div>
      <div className="Container-btn">
        <Link to="/projects">
        <button className="btn-cta">Portfolio</button>
        </Link>
      </div>
    </div> 
    </>
  );
}

export default App;

