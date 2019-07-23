import React from 'react';
import { PageHeader, Tabs } from 'antd';
import Activation from './activation';
import NoActivation from './noactivation'

const { TabPane } = Tabs;

const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: "/zz",
        breadcrumbName: '实体管理',
    },
    {
        path: '/ff',
        breadcrumbName: '用户管理',
    },
];

export default class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actkey: "1"
        }
    }

    tabChange = (key) => {
        this.setState({
            actkey: key
        })
    }

    render() {
        return (
            <div>
                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <img src={require('../../static/images/lo.png')} alt="" ></img>
                            <h3 className="title-word">用户管理</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}
                        footer={
                            <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                                <TabPane tab="已激活" key="1"></TabPane>
                                <TabPane tab="未激活" key="2"></TabPane>
                            </Tabs>
                        }
                    />
                </div>

                <div
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}>

                    {this.state.actkey === "1" ? <Activation /> : null}
                    {this.state.actkey === "2" ? <NoActivation /> : null}



                </div>
            </div>
        )
    }

}