import React, {Component} from 'react';
import {Menu} from 'antd'


import 'antd/dist/antd.css';
import '../index.css';

class Navbar extends Component {
    constructor(){
        super()
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(source) {
        if(source === ""){
            this.props.onSourceChange("");
        } else {
            this.props.onSourceChange(source);
        }
        
    }
    render(){
        return (
            <div className = "navbar">
                <Menu mode="horizontal"  defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick = {() => {this.handleChange("")}}>Top News</Menu.Item>
                <Menu.Item key="2"  onClick = {() => {this.handleChange("engadget")}}>nav 2</Menu.Item>
                <Menu.Item key="3" onClick = {this.handleChange}>nav 3</Menu.Item>
                <Menu.Item key="4" onClick = {this.handleChange}>nav 4</Menu.Item>
                <Menu.Item key="5" onClick = {this.handleChange}>nav 5</Menu.Item>
                <Menu.Item key="6" onClick = {this.handleChange}>nav 6</Menu.Item>
                <Menu.Item key="7" onClick = {this.handleChange}>nav 7</Menu.Item>
                <Menu.Item key="8" onClick = {this.handleChange}>nav 8</Menu.Item>
                <Menu.Item key="9" onClick = {this.handleChange}>nav 9</Menu.Item>
                <Menu.Item key="10" onClick = {this.handleChange}>nav 10</Menu.Item>
                </Menu>
                </div>
        )
    }
}

export default Navbar;