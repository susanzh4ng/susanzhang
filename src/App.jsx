import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Pages/Landing/Landing.jsx';
import About from './Pages/About/About.jsx';
import Work from './Pages/Work.jsx';
import UTDesignCapstone from './Pages/UTDesignCapstone/UTDesignCapstone.jsx';
import OrgPortal from './Pages/OrgPortal/OrgPortal.jsx';
import Paycom from './Pages/Paycom/Paycom.jsx';
import CapitalOne from './Pages/CapitalOne/CapitalOne.jsx';
import './App.css'


function App() {


  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/susanzhang" replace />} />
            <Route path="/susanzhang" element={<Landing />} />
            <Route path="/susanzhang/work" element={<Work />} />
            <Route path="/susanzhang/about" element={<About />} />
            <Route path="/susanzhang/work/paycom" element={<Paycom />} />
            <Route path="/susanzhang/work/orgportal" element={<OrgPortal />} />
            <Route path="/susanzhang/work/utdesign-capstone" element={<UTDesignCapstone />} />
            <Route path="/susanzhang/work/capitalone" element={<CapitalOne />} />
            {/*<Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
  )
}


export default App