import React, { Component } from 'react';
import { PageHeader, Tabs } from 'antd';
import Check from './check';
import Reject from './reject';
import Pass from './pass';



const { TabPane } = Tabs;
const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: "/video",
        breadcrumbName: '认证管理',
    },
    {
        path: '/video',
        breadcrumbName: '视频认证',
    },
];

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: "1"
        }
    }



    // tab切换
    tabChange = (key) => {
        this.setState({ activeKey: key })
        // console.log(key)
    }


    render() {
        return (
            <div className="video">

                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <img src={require('../../static/images/lo.png')} alt="" ></img>
                            <h3 className="title-word">企业认证</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}
                        footer={
                            <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                                <TabPane tab="审核中" key="1"></TabPane>
                                <TabPane tab="通过" key="2"></TabPane>
                                <TabPane tab="拒绝" key="3"></TabPane>
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
                    {
                        this.state.activeKey === "1" ? <Check /> : null
                    }
                    {
                        this.state.activeKey === "2" ? <Pass /> : null
                    }
                    {
                        this.state.activeKey === "3" ? <Reject /> : null
                    }



                </div>
            </div>
        )
    }
}
