import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import AboutMe from '../About Me/AboutMe';
import Projects from '../Projects/Projects';
import '../../styles/App.css';
import ContactMe from '../Contact Me/ContactMe';

function App() {
  return (
    <div className="app-container">
      <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/ContactMe" element={<ContactMe/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
