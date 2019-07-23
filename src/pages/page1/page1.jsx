/* eslint-disable no-undef */
import React from 'react';
import Success from './pagestate/successpage/success.jsx';
import Apply from './pagestate/applypage/apply.jsx';
import Failed from './pagestate/failedpage/failed.jsx'
import '../../static/css/head.scss';
import './page1.scss'
import { PageHeader, Tabs ,Spin} from 'antd';

import { get } from "../../util/axios"
import "../../util/security"

const { TabPane } = Tabs;


const routes = [
  {
    path: '/',
    breadcrumbName: '主页',
  },
  {
    path: "/1",
    breadcrumbName: '认证管理',
  },
  {
    path: '/#/1',
    breadcrumbName: '企业认证',
  },
];

const pagetab = [
  { name: "申请中" },
  { name: "通过" },
  { name: "拒绝" }]

export default class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "1",
      pagetab: pagetab,
      data:{},
      spinning:true
    }
  }

  componentDidMount(){
    this.getList(
      this.setState({spinning:false})
    );

  };

  
  getList = () =>{
    let state = this.state.activeKey === "1"?"APPLY":this.state.activeKey === "2"?"SUCCESS":"REJECT";
    // eslint-disable-next-line no-whitespace-before-property
    get('/zol-cms/license/paging',{state,pageNo:1,pageSize:60}) .then(res =>{
      console.log(res)
      res = res.data
      console.log(res)

      this.setState({data:res.result})
    })
  }

  // tab切换

  tabChange = (key) => {
    this.setState({ activeKey: key },this.getList)
    // console.log(key)
  }

  render() {
    let { activeKey } = this.state;
    // console.log(activeKey === "1",activeKey === "2",activeKey === "3")
    return (
      <div className="page1">

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
                {
                  pagetab.map((item, index) => {
                    return (
                      <TabPane tab={item.name} key={(index + 1).toString()}  ></TabPane>
                    )
                  })
                }
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
          <Spin spinning={this.state.spinning}>
          {activeKey === "1"?<Apply data={this.state.data}  />:null}
          {activeKey === "2"?<Success data={this.state.data}  />:null}
          {activeKey === "3"?<Failed data={this.state.data}  />:null}
         </Spin>
        </div>
      </div>
    )
  }
}







