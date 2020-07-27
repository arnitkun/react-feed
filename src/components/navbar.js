
import React, {Component} from 'react';
import {Menu} from 'antd'
import {Icon} from '@ant-design/compatible'
import { CaretDownFilled } from '@ant-design/icons'


import 'antd/dist/antd.css';
import '../index.css';
const fetch = require('node-fetch')

class Navbar extends Component {
    
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(source) {
        if(source === ""){
            this.props.onSourceChange("");
        } else {
            this.props.onSourceChange(source);
        }
    }

    
    handleReset() {
        this.props.handleClose();
    }


    getSources = () => {
        var source = 'https://newsapi.org/v2/sources?country=in&apiKey=8bcdc13d04f144d38b2e837242ebff7d'

        var data = fetch(source)
        var sourceArray = []
            data.then(response => {
                return response.json()
                }).then(res=>{
                        res.sources.map( source => {
                            sourceArray.push(source)
                        })
                        this.handleSetSource(sourceArray)
                })

    }

    handleSetSource = (newsArr) => {
        this.setState({
            sources:newsArr
        })
    }

    
    render(){
        return (
            <div className = "navbar" position="fixed">
                <Menu mode="horizontal"  defaultSelectedKeys={['1']}>
                <Menu.Item onClick={this.handleReset}>  
                    <Icon type="arrow-left" />
                </Menu.Item>
                <Menu.Item key="1" onClick = {() => {this.handleChange("")}}>Top News</Menu.Item>
                <Menu.Item key="2"  onClick = {() => {this.handleChange("google-news-in")}}>Google News (India)</Menu.Item>
                <Menu.Item key="3" onClick = {() => {this.handleChange("the-hindu")}}>The Hindu</Menu.Item>
                <Menu.Item key="4" onClick = {() => {this.handleChange("the-times-of-india")}}>The Times of India</Menu.Item>
                </Menu>
                </div>
        )
    }
}

export default Navbar;