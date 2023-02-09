
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer1 from './Footer1/Footer1';
import Footer2 from './Footer2/Footer2';
import Navbar1 from './Navbar1/Navbar1';
import Navbar2 from './Navbar2/Navbar2';

function App() {
  return (
    <div className="App">
     <Navbar1/>
     <Navbar2/>
     <Outlet/>
     <Footer1/>
     <Footer2/>
      </div>
  );
}

export default App;
