import React from 'react';
import { Link } from "react-router-dom";

import './App.css';
function App() {
  return (
   <div>
     <h2>Components</h2>
        <Link to="/search">Search</Link> | 
        <Link to="/multipleSelect">MultipleSelect</Link>
        <Link to="/basicDatePicker">BasicDatePicker</Link>
    </div>
    );
}

export default App;
