import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './pages/Content';
import reportWebVitals from './reportWebVitals';

// Router App

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Content />} />
    
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
