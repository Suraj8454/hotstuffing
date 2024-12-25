
import About from './about/About';
import './App.css';
import ComponentMain from './component/ComponentMain';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Navbar from './component/pages/navbar/Navbar';
import ContactUs from './contactus/ContactUs';
import OurService from './ourService/OurService';
import FOOter from './component/pages/newfooter/FOOter';


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ComponentMain />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/ourservice' element={<OurService />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
