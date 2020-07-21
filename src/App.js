import React, {Component} from 'react';

import './App.css';

import Navbar from './components/navbar'
import Inflist from './components/infscroller'

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    this.getNews();
  }

  handleSource = (source="engadget") => {
    console.log("source changed! Source = " + source);
    this.parseUrl(source)
  }

  parseUrl = (param) =>{

    let url = 'https://newsapi.org/v2/top-headlines?country=in&pagesize=40&apiKey=8bcdc13d04f144d38b2e837242ebff7d' 
    if(param != ""){
      url = 'https://newsapi.org/v2/everything?sources='+param+'&pagesize=40&apiKey=8bcdc13d04f144d38b2e837242ebff7d'
    }
    console.log("url parsed! New url = " + url)
    this.updateNews(url)
  }

  getNews = () => {
    console.log("Getting top news")
    var topurl = 'https://newsapi.org/v2/top-headlines?country=in&pagesize=40&apiKey=8bcdc13d04f144d38b2e837242ebff7d'
   
    let data = fetch(topurl);
    data.then(res => {
      return res.json();
    }).then(n => {
      this.setState({news:n})
    })
    
  }

  updateNews = (url) => {
    let data = fetch(url);
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
      <Navbar onSourceChange = {this.handleSource}/>
        <Inflist data={this.state.news}/>
      </div>
    );
  }
}
}

export default App;
