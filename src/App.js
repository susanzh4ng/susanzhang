import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage';
import UiuxPage from './pages/UiuxPage/UiuxPage';
import FullstackPage from './pages/FullstackPage/FullstackPage';
import MarketingPage from './pages/MarketingPage/MarketingPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
/*import NavBar from './components/NavBar/NavBar';*/
import Pixy from './pages/Pixy/Pixy';
import UTDesignCapstone from './pages/UTDesignCapstone/UTDesignCapstone';
import UTDCapstone from './pages/UTDCapstone/UTDCapstone';
import Planne from './pages/Planne/Planne';
import Wehack from './pages/Wehack/Wehack'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterSZ from './components/FooterSZ/FooterSZ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*<NavBar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/uiux" element={<UiuxPage />} />
          <Route path="/projects/full-stack" element={<FullstackPage />} />
          <Route path="/projects/marketing" element={<MarketingPage />} />
          <Route path="/projects/pixy" element={<Pixy />} />
          <Route path="/projects/utdesign-capstone" element={<UTDesignCapstone />} />
          <Route path="/projects/utd-capstone-programs" element={<UTDCapstone />} />
          <Route path="/projects/planne" element={<Planne />} />
          <Route path="/projects/wehack2024" element={<Wehack />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <FooterSZ />
      </BrowserRouter>
    </div>
  );
}

export default App;
