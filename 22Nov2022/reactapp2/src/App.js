import './App.css';
import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Navbar from './nabvar/Navbar';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <>
      <Header brand="Sajedul Tech" slogan=" All IT Based platform" />

      <Navbar />

      <div class="container mt-5">
        <div class="row">

          <Sidebar />

          <Outlet />

        </div>
      </div>

      <Footer copyright="All Right Reserve. Sajedul Tech 2022"  />

    </>
  );
}

export default App;

