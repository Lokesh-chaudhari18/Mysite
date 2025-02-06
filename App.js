import logo from './assets/hero-img.png';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';



function App() {
  return (
    <>

    <Header/>
    

    <BrowserRouter>
      <Routes>
        <Route path= "/Home" element={<Home/>}></Route>
        <Route path= "/About" element={<About/>}></Route>
        <Route path= "/Services" element={<Services/>}></Route>
        <Route path= "/Portfolio" element={<Portfolio/>}></Route>
        <Route path= "/Team" element={<Team/>}></Route>
        <Route path= "/Pricing" element={<Pricing/>}></Route>
        <Route path= "/Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>

  
   
    
    </>

  );
}



export default App;
