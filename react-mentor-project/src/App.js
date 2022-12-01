import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';



function App() {
  return (
    <>
      <Header/>
      <br></br><br></br><br></br>
    
     
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
