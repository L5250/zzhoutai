import React from 'react';
import { List, Avatar, Button, Modal } from 'antd';
import './success.scss'
// import * as data from "./success.json"


// const successdata = require('./success.json')
// console.log(successdata)

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newitem: []
    }

    this.getItemData = this.getItemData.bind(this)
  }

  showModal = item => {
    this.setState({
      visible: true,
      newitem: item
    });
    console.log(item, ">>>>>>>>>>")
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
    this.setState({ newitem: item })
    console.log(item, ">>>>>>>>>>")
  }



  render() {

    let { newitem } = this.state;

    // console.log(this.state.newitem)
    // console.log(successdata)
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
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item >
              <List.Item.Meta

                avatar={<Avatar src={item.mchInfo.icon} />}
                // title={<div>{item.mchInfo.name}</div>}
                // description={item.mchInfo.loginMobile}
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
                    <span>{item.license.company&&item.license.company.items.map((item1, index) => {
                      return (
                        <span  key={index}>
                          <span>{item1.key} </span>
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
            // title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            closable={false}
            okText={"确定"}
            footer={
              <div>注册时间：{newitem.license.company.gmtModified.slice(0,10)}</div>
            }
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
                  <span  key={index}>
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



