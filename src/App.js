import React, {Component} from 'react';

import './App.css';

import Navbar from './components/navbar'
import Inflist from './components/infscroller'

class App extends Component{
  constructor(){
    super()
    this.state = {
      source:"",
      key: Math.random()      
    }
  }

  handleClose = () => {
    console.log("closing card!")
    this.setState({key: Math.random()})
}

  handleSource = (newSource="engadget") => {
    console.log("source changed! Source = " + newSource);
    this.setState({source: newSource})
  }

  
  render(){
    
    return (
    <div className="App">
      <div className="navbar">
      <Navbar onSourceChange = {this.handleSource} handleClose={this.handleClose}/>
      </div>
      <div>
      <Inflist source={this.state.source} random_key={this.state.key}/>
      </div>
        
      </div>
    );
}
}

export default App;
