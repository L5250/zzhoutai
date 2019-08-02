import React from 'react';
import './title.scss';
import { PageHeader, Tabs } from 'antd';

const { TabPane } = Tabs;


const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: "",
        breadcrumbName:' this.props.data.first',
    },
    {
        path: 'this.item1.href',
        breadcrumbName: 'this.props.data.second.name',
    },
];

export default class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }


// handleClick=(key)=>{

// }


    render() {
        return (
            <div className="title">
                <PageHeader title={
                    <span className="title-a">
                        <img src={require('../../static/images/lo.png')} alt="" className="title-img" ></img>
                        <h3 className="title-word">{this.props.data.first}</h3>
                    </span>}
                    breadcrumb={{ routes }} className="title-ico"
                    style={{ padding: 0, fontSize: "20px" }}

                    
                    footer={
                        
                        <Tabs defaultActiveKey="1" onChange={this.props.tabChange} >

 
                        {
                            this.props.pagetab.map((item,index)=>{
                                return(
                                    
                                        <TabPane tab={item.name} key={index+1} ></TabPane>
                                    
                                )

                            })
                        }
                            {/* <TabPane tab="Details" key="1" onClick={this.props.tabChange()} ></TabPane>
                            <TabPane tab="Rule" key="2" ></TabPane>
                            <TabPane tab="ww" key="3" ></TabPane> */}

                        </Tabs>
                    }
                />
            </div>
        )
    }
}


