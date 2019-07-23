import React from 'react';
import { List, Avatar, Button, Modal } from 'antd';
// import './apply.scss'
// import * as data from "./success.json"


// const successdata = require('./apply.json')
// console.log(successdata)

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newitem: [],
      spinning:true
    }

    this.getItemData = this.getItemData.bind(this)
  }

  showModal = item => {
    this.setState({
      visible: true,
      newitem: item
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };


  getItemData = (item) => {
    this.setState({ newitem: item ,spinning:false})
  }



  render() {

    let { newitem } = this.state;

    // console.log(this.state.newitem)
    return (
      <div>
        <List
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 10,
          }}
          itemLayout="horizontal"
          // dataSource={successdata.data.result}
          renderItem={item => (
            <List.Item >
              <List.Item.Meta

                avatar={<Avatar src={item.mchInfo.icon} />}
   
                description={<div className="sbox">
                  <div className="sbox-a">
                    <div>{item.mchInfo.name}</div>
                    <div>{item.mchInfo.loginMobile}</div>

                  </div>
                  <div className="sbox-b">
                    <div>公司名称</div>
                    <div>{item.mchInfo.name}</div>
                  </div>
                  <div className="sbox-c">
                    <div>公司信息</div>
                    <span>{item.license.company.items.map((item1, index) => {
                      return (
                        <span>
                          <span>{item1.key}</span>
                          <span>{item1.value}</span>
                        </span>
                      )
                    })}</span></div>

                </div>}

              />
              <div>
                <Button type="primary" onClick={() => this.showModal(item)}>查看</Button>

              </div>
            </List.Item>
          )}
        />
        {
          this.state.visible ? <Modal
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <span>成功</span>

            <img src={newitem.mchInfo.icon} alt=""></img>
            <p>{newitem.mchInfo.name}</p>
            <p>{newitem.mchInfo.mobile}</p>
            <div>
              <span>公司名称：</span>
              <span>{newitem.mchInfo.name}</span>
            </div>
            <div>
              <span>公司信息：</span>
              <span>{newitem.license.company.items.map((item1, index) => {
                return (
                  <span>
                    <span>{item1.key}</span>
                    <span>(</span>
                    <span>{item1.value}</span>
                    <span>)</span>
                  </span>
                )
              })}</span>
            </div>
            <div>
              <span>公司资料：</span>
              <span>{newitem.mchInfo.name}</span>
            </div>
            <div>
              <span>注册时间：</span>
              <span>{newitem.license.company.gmtModified.slice(0,10)}</span>
            </div>
          </Modal> : null
        }
      </div>
    )
  }
}



