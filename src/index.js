import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo_img from './core/header/logo';
import Home from './components/Home/home';
import Auth from './components/Auth/auth';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Logo_img />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/authenticate' element={<Auth />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
