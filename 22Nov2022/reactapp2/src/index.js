import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Content from './pages/Content';
import About from './pages/About';
import Contact from './pages/Contact';
import Garage from './pages/Garage';
import Colors from './components/colors/colors';
import Search from './components/Search/Search';
import LifeCycle from './components/LifeCyle/LifeCyle';
import Userlist from './users/Userlist';


// Router App

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Content />} />
          <Route path="/About" element={<About />} />
          <Route path="/Garage" element={<Garage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Colors" element={<Colors />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/LifeCycle" element={<LifeCycle />} />
          <Route path="/Userlist" element={<Userlist />} />
    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);


reportWebVitals();
