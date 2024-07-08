import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/home';
import css from './utils/global.css';

var container = document.getElementById('root'); function 
Titulo() { 
return ( 
    <Home></Home>
) 
} 
ReactDOM.createRoot(container).render(<Titulo />); 
