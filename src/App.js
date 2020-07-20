import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar'
import NewsCardRow from './components/cardRow'
// import List from './components/list'
import Inflist from './components/infscroller'

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.getNews();
  }

  getNews = () => {
    var topurl = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8bcdc13d04f144d38b2e837242ebff7d';
   
    let data = fetch(topurl);
    data.then(res => {
      return res.json();
    }).then(n => {
      this.setState({news:n})
    })
    
  }
  render(){
    if(!this.state.news) {
      return(<h4>Loading...</h4>)
    } else {
    return (
    <div className="App">
      <Navbar/>
        <Inflist data={this.state.news}/>
      </div>
    );
  }
}
}

export default App;
