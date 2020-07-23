import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty} from 'antd'

import NewsCardRow from './cardRow'


const apikey = 'a0acf24072e74fa3908b5b09b9e5bded'
class Inflist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        detailsVisible:false,
        articleSelected:null,
        news:{},
        page:1
      };
  }
 
  componentDidMount(){
    this.getNews();
  }

  ToggleDetailsCard = (cardStatus) => {
    this.setState({
      detailsVisible:cardStatus,
    })
  }

  setCardNumber = (cardNumber) => {
    this.setState({
      articleSelected:cardNumber
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.source !== prevProps.source) {
      this.parseUrl(this.props.source, this.state.page)
      }
  }

  parseUrl = (param, page) =>{
    console.log("source in parse:" + param + " page number:" + page)
    let url = 'https://newsapi.org/v2/top-headlines?country=in&pagesize=40&apiKey='+apikey 
    if(param != ""){
      url = 'https://newsapi.org/v2/everything?sources='+this.props.source+'&pagesize=40&page='+page+'&apiKey='+apikey
    }
    console.log("url parsed! New url = " + url)
    this.changeNewsSource(url)
  }

  getNews = () => {
    console.log("Getting top news")
    
    let topurl = 'https://newsapi.org/v2/top-headlines?country=in&pagesize=40&apiKey='+apikey
   
    let data = fetch(topurl);
    data.then(res => {
      return res.json();
    }).then(n => {
      this.setState({articles: n.articles,
                      totalResults: n.totalResults,
                      detailsVisible:false
                      })
    })
  }

  isMoreNews = (page) => {
    let totalpages = this.state.totalResults/this.state.articles.length;
    console.log("page: "+page+" totalpages: "+totalpages)
    console.log(page<totalpages)
    // this.setState({totalpages:totalpages})
    if(page < totalpages){
      return true;
    }else{
      return false;
    }
  }

  changeNewsSource = (url) => {
    let data = fetch(url);
    data.then(res => {
      return res.json();
    }).then(n => {
      let newNews = n.articles
      this.setState({articles:newNews,
                    page:1,
                  totalResults: n.totalResults,
                detailsVisible:false
              })
    })
  }

  getMoreNews = (param, page) => {
    console.log("getting more data!!!!!")
    let nextPage = page + 1
    let url = 'https://newsapi.org/v2/everything?sources='+param+'&pagesize=40&page='+nextPage+'&apiKey='+apikey
    let data = fetch(url);
    data.then(res => {
      return res.json();
    }).then(n => {
      let newNews = JSON.parse(JSON.stringify(this.state.articles))
      Array.prototype.push.apply(newNews, n.articles)
      this.setState({articles:newNews,
                    page:nextPage})
    })

    
  }

  

  handleView = () => {
    if(this.state.detailsVisible === false){
      if(!this.state.articles){
        return(<div>{<h4>Loading...</h4>}</div>)
      } else {
        return(
          <div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            scrollThreshold={100}
            next={()=>this.getMoreNews(this.props.source, this.state.page)}
            hasMore={()=>this.isMoreNews(this.state.page)}
            loader={<h4>Loading...</h4>}
            endMessage={<h4>No more news. Please refresh or select a source from the navigation bar.</h4>}
          >
            {this.state.articles.map((article, articleNumber) => (
  
              <NewsCardRow card_1_info = {article} cardNumber = {articleNumber} 
              setCardNumber = {this.setCardNumber} ToggleCard={this.ToggleDetailsCard} detailsCardStatus={this.state.detailsVisible}/>
              
            ))}
          </InfiniteScroll>
        </div>
        )
      }
    } else{
      return(
        <div>
            <Empty
                  image={this.state.articles[this.state.articleSelected].urlToImage}
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

  
  

  render() {
    return (
      this.handleView()
    );
  }
}

export default Inflist;
