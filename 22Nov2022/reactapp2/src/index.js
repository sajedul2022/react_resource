import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './pages/Content';
import About from './pages/About';
import Contact from './pages/Contact';
import Garage from './pages/Garage';
import reportWebVitals from './reportWebVitals';

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
