import React from 'react';
import { PageHeader, Tabs,Button } from 'antd';
import News1 from './news/news1.jsx';
import News2 from './news/news2.jsx';
import News3 from './news/news3.jsx';



const { TabPane } = Tabs;

const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: "/18",
        breadcrumbName: '新闻管理',
    },
    {
        path: '/18',
        breadcrumbName: '新闻配置',
    },
];

export default class Page6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    tabChange = (key) => {
        console.log(key)
    }


    render() {
        return (
            <div>
                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <img src={require('../../static/images/lo.png')} alt="" className="title-img"></img>
                            <h3 className="title-word">新闻配置</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}
                        extra={
                            <Button href="/#/addnews">添加</Button>
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
                    <Tabs defaultActiveKey="1" onChange={this.tabChange}>
                        <TabPane tab="归毂新闻" key="1">
                            <News1 />
                        </TabPane>
                        <TabPane tab="求职攻略" key="2">
                            <News2 />
                        </TabPane>
                        <TabPane tab="职场成长" key="3">
                            <News3 />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}