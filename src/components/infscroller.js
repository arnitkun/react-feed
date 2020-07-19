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

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  render() {
    return (
      <div>

        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.items.map((i, index) => (
            // <div style={style} key={index}>
            //   div - #{index}
            // </div>
            <NewsCardRow Headline1 = {index} Headline2 = {index+1} Headline3 = {index+2}/>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Inflist;
