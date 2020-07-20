import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Modal,Empty} from 'antd'

import NewsCardRow from './cardRow'

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

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
    if(this.state.detailsVisible == false){
      this.state.detailsVisible = true
    } else {
      this.state.detailsVisible = false
    }
  }

  // fetchMoreData = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };

  getNews = () => {
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
