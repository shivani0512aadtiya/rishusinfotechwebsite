
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Resource from './components/Resource';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <div>
     <NavBar/>
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    {/* <Route path='/services' element={<Services/>}></Route> */}
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/resource' element={<Resource/>}></Route>
     </Routes>
     </div>
     <Footer/>
    </div>
  );
}

export default App;