import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import Header from './components/Header';
import Error from './components/Error';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }  

    ::before,
    ::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }



`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/freelances' element={<Freelances />} />
            <Route path='/survey/:questionNumber' element={<Survey />} />
            <Route path='/results' element={<Results />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </Router>
    
  </React.StrictMode>
);
