import React, { Component} from 'react';
import {Card, Col, Row} from 'antd';

import 'antd/dist/antd.css';
import '../index.css';


var s = "bing"
var Headline = "some shit"
var content = "more shit"
class NewsCardRow extends Component{

    render() {
        return (
            <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
      <Card title="Card title" bordered={true}>
                <div >Headline: {this.props.Headline1}
                </div>
                Card content
            </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
        <div >Headline: {this.props.Headline2}
            </div>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={true}>
        <div >Headline: {this.props.Headline3}
            </div>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
        )
    }
}

export default NewsCardRow;