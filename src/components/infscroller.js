import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Ellipsis from '@bit/joshk.react-spinners-css.ellipsis';
import {Card, Col, Row} from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';
import '../index.css';

import NewsCard from './card'
import DetailsCard from './DetailedCard'


const apikey = '61061b00b0f84d02960a12e70accdc16'
class Inflist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        detailsVisible:false,
        articleSelected:null,
        news:{},
        page:1,
        key: this.props.random_key
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
    console.log("setting card number: " + cardNumber)
    this.setState({
      articleSelected:cardNumber
    })
  }

  componentDidUpdate(prevProps){
    if(this.state.key != this.props.random_key){
      this.setState({key: this.props.random_key,
        detailsVisible: false})
    }
    if(this.props.source !== prevProps.source) {
      
      this.parseUrl(this.props.source, this.state.page)
      }
  }

  parseUrl = (param) =>{
    console.log("source in parse:" + param + " page number:" + 1)
    let url = 'https://newsapi.org/v2/top-headlines?country=in&language=en&pagesize=40&apiKey='+apikey 
    if(param != ""){
      url = 'https://newsapi.org/v2/everything?sources='+this.props.source+'&language=en&pagesize=20&page='+1+'&apiKey='+apikey
    }
    console.log("url parsed! New url = " + url)
    this.changeNewsSource(url)
  }

  getNews = () => {
    console.log("Getting top news")
    
    let topurl = 'https://newsapi.org/v2/top-headlines?country=in&language=en&pagesize=40&apiKey='+apikey
   
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

  isMoreNews = () => {
    let page = (this.state.page)
    let totalpages = this.state.totalResults/this.state.articles.length;
    
    console.log("page: "+page+" totalpages: "+totalpages)
    console.log(page<totalpages)
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

  getMoreNews = () => {
      let param = this.props.source;
      let page = this.state.page
    console.log("getting more data!!!!!")
    let nextPage = page + 1
    // console.log("source:" + param)
    var url = ''
    if(param=="" || param == " "){
       url = 'https://newsapi.org/v2/top-headlines?&language=en&pagesize=20&page='+nextPage+'&apiKey='+apikey
    } else {
       url = 'https://newsapi.org/v2/everything?sources='+param+'&language=en&pagesize=20&page='+nextPage+'&apiKey='+apikey
    }
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
        return(<div><Ellipsis color="#be97e8" /></div>)
      } else {
        var items = []
        for(let i = 0; i < this.state.articles.length; i+=3){
          items.push(
            <div className="site-card-wrapper">
            <Row gutter={8} display="flex" >
              <Col span={8} display="flex">
                <div className="card">
                  {this.state.articles[i] && <NewsCard 
                    hoverable
                    type="flex"
                    cardInfo= {this.state.articles[i]}
                    cardNumber={i}
                    ToggleCard = {this.ToggleDetailsCard}
                    setCardNumber = {this.setCardNumber}
                    detailsCardStatus= {false}
                    > 
                  </NewsCard>}
                </div>
              </Col>

              <Col span={8} display="flex">
                <div className="card">
                  {this.state.articles[i+1] && <NewsCard 
                    hoverable
                    type="flex"
                    cardInfo= {this.state.articles[i+1]}
                    cardNumber={i+1}
                    ToggleCard = {this.ToggleDetailsCard}
                    setCardNumber = {this.setCardNumber}
                    detailsCardStatus= {false}
                    >
                  </NewsCard>}
                </div>
              </Col>

              { this.state.articles[i+2] && <Col span={8} display="flex">
                <div className="card">
                  <NewsCard 
                    hoverable
                    type="flex"
                    cardInfo= {this.state.articles[i+2]}
                    cardNumber={i+2}
                    ToggleCard = {this.ToggleDetailsCard}
                    setCardNumber = {this.setCardNumber}
                    detailsCardStatus= {false}
                    >
                  </NewsCard>
                </div>
              </Col>}

          </Row>
        </div>
          )

        }
        
        return(
          <div className="infinite-scroll-component">
            
          <InfiniteScroll
            pageStart={0}
            loadMore={this.getMoreNews}
            hasMore={this.isMoreNews}
            loader={<div className="loader" key={0}> Loading...</div>}
            >
              {items}


          </InfiniteScroll>
        </div>
        )
      }
    } else{
      return(
        <div>
            <DetailsCard data={this.state.articles[this.state.articleSelected]}/>
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
