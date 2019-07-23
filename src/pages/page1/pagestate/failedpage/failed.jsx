import React from 'react';
import { List, Avatar, Button, Modal } from 'antd';
// import './failed.scss'
// import * as data from "./success.json"


// const successdata = require('./failed.json')
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
  }



  render() {

    let { newitem } = this.state;
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
   
                description={<div className="sbox">
                  <div className="sbox-a">
                    <div>{item.mchInfo.name}</div>
                    <div>{item.mchInfo.loginMobile}</div>

                  </div>

                </div>}

              />
              <div>
                <Button type="primary" onClick={() => this.showModal(item)}>查看</Button>
                <Button type="primary">审核</Button>
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
            <span>拒绝</span>

            <img src={newitem.mchInfo.icon} alt=""></img>
            <p>{newitem.mchInfo.name}</p>
            <p>{newitem.mchInfo.mobile}</p>
            <div>
              <span>公司名称：</span>
              <span>{newitem.mchInfo.name}</span>
            </div>
            <div>
              <span>公司信息：</span>
            <span>zan</span>
            </div>
            <div>
              <span>公司资料：</span>
              <span>{newitem.license.urls.map((item1,index)=>{
                return(
                  <img src={item1} alt="" key={index} ></img>
                )
                
              })}</span>
            </div>
            <div>
             
            </div>
          </Modal> : null
        }
      </div>
    )
  }
}



