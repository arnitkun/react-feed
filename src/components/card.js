import React, { Component} from 'react';
import {Card, Col, Row} from 'antd';

import 'antd/dist/antd.css';
import '../index.css';

const {Meta} = Card;

class NewsCard extends Component{
  constructor(props){
    super(props)
      
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    console.log("card CLicked!!!")
    if(this.props.detailsCardStatus === false){
      this.props.ToggleCard(true);
      this.props.setCardNumber(this.props.cardNumber)
    } else {
      this.props.ToggleCard(false);
    }
  }

  render(){
      return(

              <Card 
                size="default"
                hoverable
                
                title={this.props.cardInfo.title} bordered={true}
                onClick = {this.handleClick}
                >
                 <div >
                   Source: {this.props.cardInfo.source.name}
                 </div>
                 {<img className="card-image" alt="Loading..." src={this.props.cardInfo.urlToImage} />}
                 
              </Card>
      )
  }
}

export default NewsCard;