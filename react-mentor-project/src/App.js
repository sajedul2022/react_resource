import './App.css';
import { Outlet } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';



function App() {
  return (
    <>
      <Header/>
     
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
