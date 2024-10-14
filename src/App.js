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
import CometGala from './pages/CometGala/CometGala';
import Legalease from './pages/Legalease/Legalease';
import WriteRight from './pages/WriteRight/WriteRight';
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterSZ from './components/FooterSZ/FooterSZ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*<NavBar /> */}
        <Routes>
          <Route path="/susanzhang/" element={<LandingPage />} />
          <Route path="/susanzhang/projects" element={<ProjectsPage />} />
          <Route path="/susanzhang/projects/uiux" element={<UiuxPage />} />
          <Route path="/susanzhang/projects/full-stack" element={<FullstackPage />} />
          <Route path="/susanzhang/projects/marketing" element={<MarketingPage />} />
          <Route path="/susanzhang/projects/pixy" element={<Pixy />} />
          <Route path="/susanzhang/projects/utdesign-capstone" element={<UTDesignCapstone />} />
          <Route path="/susanzhang/projects/utd-capstone-programs" element={<UTDCapstone />} />
          <Route path="/susanzhang/projects/planne" element={<Planne />} />
          <Route path="/susanzhang/projects/wehack2024" element={<Wehack />} />
          <Route path="/susanzhang/projects/comet-gala2024" element={<CometGala />} />
          <Route path="/susanzhang/projects/legalease" element={<Legalease />} />
          <Route path="/susanzhang/projects/writeright" element={<WriteRight />} />
          <Route path="/susanzhang/about" element={<AboutPage />} />
        </Routes>
        <FooterSZ />
      </BrowserRouter>
    </div>
  );
}

export default App;
