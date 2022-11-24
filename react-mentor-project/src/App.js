import './App.css';
import { Outlet } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import About from './about/About';


function App() {
  return (
    <>
      <Header/>
      {/* <Home/>
      <About/> */}
      <Outlet />





      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>



      <Footer/>
    </>

      
      
  );
}

export default App;
