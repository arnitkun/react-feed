import React, { Component} from 'react';
import {Card, Col, Row} from 'antd';

import 'antd/dist/antd.css';
import '../index.css';

const {Meta} = Card;

class NewsCardRow extends Component{

    render() {
        return (
            <div className="site-card-wrapper">
    <Row gutter={8}>
      <Col span={12}>
      <Card 
      hoverable
      // cover={<img alt="image" src={}/>}
      title={this.props.card_1_info.title} bordered={true}>
                <div >Source: {this.props.card_1_info.source.name}
                </div>
                {<img class="card-image" alt="Loading..." src={this.props.card_1_info.urlToImage}/>}
            </Card>
      </Col>
       {/* <Col span={12}>
         <Card title="Card title" bordered={true}>
         <div >Headline: {this.props.Headline2}
             </div>
           Card content
         </Card>
       </Col> */}
      {/* <Col span={8}>
        <Card title="Card title" bordered={true}>
        <div >Headline: {this.props.Headline3}
            </div>
          Card content
        </Card>
      </Col> */}
    </Row>
  </div>
        )
    }
}

export default NewsCardRow;