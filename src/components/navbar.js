import React, {Component} from 'react';
import {Menu} from 'antd'


import 'antd/dist/antd.css';
import '../index.css';

class Navbar extends Component {
    render(){
        return (
            <div className = "navbar">
                <Menu mode="horizontal"  defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </div>
        )
    }
}

export default Navbar;