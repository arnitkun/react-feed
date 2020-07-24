import React, { Component} from 'react';
import {Card, Col, Row} from 'antd';

import 'antd/dist/antd.css';
import '../index.css';

const {Meta} = Card;

class NewsCardRow extends Component{
  constructor(props){
    super(props)
      
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    if(this.props.detailsCardStatus === false){
      this.props.ToggleCard(true);
      this.props.setCardNumber(this.props.cardNumber)
    } else {
      this.props.ToggleCard(false);
    }
  }

    render() {
        return (
            <div className="site-card-wrapper">
              <Row gutter={8} >
                <Col span={12} >
                  <div className="card">
                    <Card 
                      hoverable
                      type="flex"
                      title={this.props.card_1_info.title} bordered={true}
                      >
                      <div >
                        Source: {this.props.card_1_info.source.name}
                      </div>
                      {<img className="card-image" alt="Loading..." src={this.props.card_1_info.urlToImage} onClick = {this.handleClick}/>}
                      card number:{this.props.cardNumber1}
                    </Card>
                  </div>
                </Col>

                <Col span={12} >
                  <div className="card">
                    <Card 
                      hoverable
                      title={this.props.card_2_info.title} bordered={true}
                      >
                      <div type="flex">
                        Source: {this.props.card_2_info.source.name}
                        {<img className="card-image"  alt="Loading..." src={this.props.card_2_info.urlToImage} onClick = {this.handleClick}/>}
                      card number:{this.props.cardNumber2}
                      </div>
                      
                    </Card>
                  </div>
                </Col>

                {/* <Col span={8}>
                  <div className="card" >
                    <Card 
                      hoverable
                      title="test"
                      title = {this.props.card_3_info.title == null? "" :this.props.card_3_info.title} bordered={true}
                      >
                      <div >
                      Source: {this.props.card_3_info.source.name}
                      </div>
                      {<img className="card-image" alt="Loading..." src={this.props.card_3_info.urlToImage} onClick = {this.handleClick}/>}
                      card number:{this.props.cardNumber3}
                    </Card>
                  </div>
                </Col> */}
       
    </Row>
  </div>
        ) 
        
      
    }
}

export default NewsCardRow;