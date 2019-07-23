import React from 'react';
import './header.scss';
import { post } from '../../util/axios'
import { Menu, Dropdown, Icon } from 'antd';
import { Cookie } from '../../util/Cookie'


function logout() {
    post('/zol-cms/logout/').then(res => {
        Cookie.delCookie("user")
        window.location.href = '/login';
        // window.location.replace(window.location) 
    });
}

const menu = (
    <Menu>
        <Menu.Item>
            <h3>用户中心</h3>
        </Menu.Item>
        <Menu.Item>
            <span>
                你好-L
            </span>
        </Menu.Item>
        <Menu.Item>
            <span onClick={logout} >退出登录</span>
        </Menu.Item>
    </Menu>

);
export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="header">
                <div className="head-icon">
                    <Icon type="arrows-alt" className="icon" />
                </div>

                <Dropdown overlay={menu} className="header-a">
                    <span className="ant-dropdown-link" >
                        账号
                        </span>
                </Dropdown>
            </div>
        )
    }
}

