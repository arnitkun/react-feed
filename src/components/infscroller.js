import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import NewsCardRow from './cardRow'

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Inflist extends React.Component {
  state = {
    items: Array.from({ length: 20 })
  };

  componentDidMount(){
    this.setState(this.props)
  }
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
    console.log(this.props)
  };

  render() {
    return (
      <div>

        <InfiniteScroll
          dataLength={this.props.data.totalResults}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.props.data.articles.map((article, articlenumber) => (
            // <div style={style} key={index}>
            //   div - #{index}
            // </div>
            // <NewsCardRow card_1_info = {index} Headline2 = {index+1} Headline3 = {index+2}/>
            <NewsCardRow card_1_info = {article}/>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Inflist;
