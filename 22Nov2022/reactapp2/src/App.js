import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Navbar from './nabvar/Navbar';
import Content from './content/Content';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <>
      <Header brand="Sajedul Tech" slogan="One platform" />

      <Navbar />

      <div class="container mt-5">
        <div class="row">

          <Sidebar />

          <Content />

        </div>
      </div>

      <Footer copyright="All Right Reserve. Sajedul Tech 2022"  />

    </>
  );
}

export default App;

