import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing/Landing.jsx';
import About from './Pages/About/About.jsx';
import UTDesignCapstone from './Pages/UTDesignCapstone/UTDesignCapstone.jsx';
import './App.css'


function App() {


  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/susanzhang/work/utdesign-capstone" element={<UTDesignCapstone />} />
            {/*<Route path="/work/paycom" element={<Paycom />} 
            


            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </BrowserRouter>
  )
}


export default App