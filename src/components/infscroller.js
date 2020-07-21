import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty} from 'antd'

import NewsCardRow from './cardRow'

class Inflist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        detailsVisible:false,
        news:{}
      };
  }
 
  componentDidMount(){
    this.getNews();
  }

  componentDidUpdate(prevProps){
    if(this.props.source !== prevProps.source) {
      this.parseUrl(this.props.source)
    }
  }
  parseUrl = (param) =>{
    console.log("source in parse:" + param)
    let url = 'https://newsapi.org/v2/top-headlines?country=in&pagesize=40&apiKey=8bcdc13d04f144d38b2e837242ebff7d' 
    if(param != ""){
      url = 'https://newsapi.org/v2/everything?sources='+this.props.source+'&pagesize=40&apiKey=8bcdc13d04f144d38b2e837242ebff7d'
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

  handleView = () => {
    if(this.state.detailsVisible === false){
      if(!this.state.news.articles){
        return(<div>{<h4>Loading...</h4>}</div>)
      } else {
        return(
          <div>
          <InfiniteScroll
            dataLength={this.state.news.totalResults}
            next={this.getNews}
            hasMore={this.state.news.articles.length<this.state.news.totalResults}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>No more news. Please refresh or select a source from the navigation bar.</h4>}
          >
            {this.state.news.articles.map((article, articlenumber) => (
  
              <NewsCardRow card_1_info = {article} onClick={this.handleViewChange}/>
              
            ))}
          </InfiniteScroll>
        </div>
        )
      }
    } else{
      return(
        <div>
            <Empty
                  image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                  imageStyle={{
                   height: 60,
                  }}
                  description={
                    <span>
                     Details page
                      </span>
                  }
  >
    
  </Empty>,
        </div>
      )
    }
  }

  handleViewChange = () => {
    console.log("clicked!")
    if(this.state.detailsVisible == false){
      this.setState( {detailsVisible: true})
    } else {
      this.setState( {detailsVisible:false})
    }
  }

  handleGetNews = () => {
      var allurl = 'https://newsapi.org/v2/everything?sources=engadget&apiKey=8bcdc13d04f144d38b2e837242ebff7d'
     
      let data = fetch(allurl);
      data.then(res => {
        return res.json();
      }).then(n => {

        let newNews = Object.assign({},this.state.news,  n)

        this.setState({news:newNews})
      })
      
  };

  

  render() {
    return (
      this.handleView()
    );
  }
}

export default Inflist;
