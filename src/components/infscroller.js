import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty} from 'antd'

import NewsCardRow from './cardRow'

class Inflist extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        detailsVisible:false,
        news:this.props
      };
    
  }

  // componentDidMount(){
  //   this.setState(this.props)
  // }

  componentDidUpdate(prevProps){ 
    
  }

  handleView = () => {
    if(this.state.detailsVisible === false){
      return(
        <div>
        <InfiniteScroll
          dataLength={this.state.news.data.totalResults}
          next={this.getNews}
          hasMore={this.state.news.data.articles.length<this.state.news.data.totalResults}
          loader={<h4>Loading...</h4>}
          endMessage={<h4>No more news. Please refresh or select a source from the navigation bar.</h4>}
        >
          {this.state.news.data.articles.map((article, articlenumber) => (
            // <div style={style} key={index}>
            //   div - #{index}
            // </div>
            // <NewsCardRow card_1_info = {index} Headline2 = {index+1} Headline3 = {index+2}/>
            <NewsCardRow card_1_info = {article} onClick={this.handleViewChange}/>
            
          ))}

          {/* {this.state.news.data.articles.forEach((article, index) => {
            <NewsCardRow card_1_info = {article[index]} onClick={this.handleViewChange}/>
          })} */}
        </InfiniteScroll>
      </div>
      )
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

  // fetchMoreData = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };

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
