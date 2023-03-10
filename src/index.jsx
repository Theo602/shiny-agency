import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey';
import Results from './pages/Results/Results';
import Freelances from './pages/Freelances/Freelances';
import Header from './components/Header';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    <Router>
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
