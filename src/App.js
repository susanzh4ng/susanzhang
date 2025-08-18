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
import Grow from './pages/Grow/Grow'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterSZ from './components/FooterSZ/FooterSZ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/*<NavBar /> */}
        <Routes>
          <Route path="/susanzhang/" element={<LandingPage />} />
          <Route path="/susanzhang/work" element={<ProjectsPage />} />
          <Route path="/susanzhang/work/uiux" element={<UiuxPage />} />
          <Route path="/susanzhang/work/full-stack" element={<FullstackPage />} />
          <Route path="/susanzhang/work/marketing" element={<MarketingPage />} />
          <Route path="/susanzhang/work/pixy" element={<Pixy />} />
          <Route path="/susanzhang/work/utdesign-capstone" element={<UTDesignCapstone />} />
          <Route path="/susanzhang/work/utd-capstone-programs" element={<UTDCapstone />} />
          <Route path="/susanzhang/work/planne" element={<Planne />} />
          <Route path="/susanzhang/work/wehack2024" element={<Wehack />} />
          <Route path="/susanzhang/work/comet-gala2024" element={<CometGala />} />
          <Route path="/susanzhang/work/legalease" element={<Legalease />} />
          <Route path="/susanzhang/work/writeright" element={<WriteRight />} />
          <Route path="/susanzhang/work/grow-with-google" element={<Grow />} />
          <Route path="/susanzhang/about" element={<AboutPage />} />
        </Routes>
        <FooterSZ />
      </BrowserRouter>
    </div>
  );
}

export default App;
