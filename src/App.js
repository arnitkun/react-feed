import React, {Component} from 'react';

import './App.css';

import Navbar from './components/navbar'
import Inflist from './components/infscroller'

class App extends Component{
  constructor(){
    super()
    this.state = {
      source:""
    }
  }


  handleSource = (newSource="engadget") => {
    console.log("source changed! Source = " + newSource);
    this.setState({source: newSource})
  }

  
  render(){
    
    return (
    <div className="App">
      <Navbar onSourceChange = {this.handleSource}/>
        <Inflist source={this.state.source}/>
      </div>
    );
}
}

export default App;
