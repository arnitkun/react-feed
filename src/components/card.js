import React, { Component} from 'react';
import {Card, Col, Row} from 'antd';
import moment from 'moment'
import googleNewsPlaceHolder from './images/google-news.jpg'

import 'antd/dist/antd.css';
import '../index.css';

const {Meta} = Card;

class NewsCard extends Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /**
   * Sets the status of detailed card and the card number to be shown
   */
  handleClick = () => {
    
    if(this.props.detailsCardStatus === false){
      this.props.ToggleCard(true);
      this.props.setCardNumber(this.props.cardNumber)
    } else {
      this.props.ToggleCard(false);
    }
  }

  /**
   * Converts date to required format
   * @param {date} d date in UTC format
   */
  getElapsedTime = (d) => {
    const format = "YYYY-MM-DD HH:mm:ss"
    let elapsedtime = moment.utc(d).format(format)
    let resp = moment(elapsedtime).fromNow()
    return(resp)
  }

  render(){
      return(

              <Card 
                size="default"
                className="custom-card"
                hoverable
                title={this.props.cardInfo.title} bordered={true}
                onClick = {this.handleClick}
                >
                 <div className="news-content">
                   {this.props.cardInfo.source.name} | {this.getElapsedTime(this.props.cardInfo.publishedAt)}
                 </div>
                 {this.props.cardInfo.urlToImage ? 
                  <img className="card-image" alt="Loading..." src={this.props.cardInfo.urlToImage} /> :
                  <img className="placeholder" src={googleNewsPlaceHolder}/>}
                 
              </Card>
      )
  }
}

export default NewsCard;