import React from 'react'
import './App.scss';
import Home from './container/Home/Home';


const App = () => {

  return (
    <div className="App">
        <h1>Beer Beer</h1>
        <Home className="home" />

    </div>
  );
};

export default App