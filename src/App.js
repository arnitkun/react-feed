import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar'
import NewsCardRow from './components/cardRow'
// import List from './components/list'
import Inflist from './components/infscroller'

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      {/* <NewsCard /> 
      <NewsCard />
      <NewsCard /> */}
      <Inflist />
    </div>
  );
}

export default App;
