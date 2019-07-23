/* eslint-disable no-undef */
import React from 'react';
import Left from './Left/left.jsx';
import Head from './Header/header.jsx'
import Router from '../router/router.jsx';
// import { post } from "../util/axios"
import "../util/security"
import './App.scss';

import { Layout, Menu, Icon } from 'antd';
// import Title from 'antd/lib/skeleton/Title';

const data = [{
  key: "sub1",
  first: "认证管理",
  second: [{ name: "企业认证", href: "/#/1" }, { name: "视频认证", href: "/#/1a" }],
  icon: "mail"
}, {
  key: "sub2",
  first: "实体管理",
  second: [{ name: "公司管理", href: "/#/2" }, { name: "视频认证", href: "/#/2a" }],
  icon: "appstore"
}, {
  key: "sub3",
  first: "职业管理",
  second: [{ name: "职位管理", href: "/#/6" }, { name: "职位发布", href: "/#/6a" }],
  icon: "mail"
}, {
  key: "sub4",
  first: "板块管理",
  second: [{ name: "板块管理", href: "/#/7" }, { name: "页面管理", href: "/#/7a" }],
  icon: "mail"
}, {
  key: "sub5",
  first: "数据字典",
  second: [{ name: "中介擅长管理", href: "/#/8" }, { name: "职业分类管理", href: "/#/8a" }, { name: "职位卡管理", href: "/#/8b" }, { name: "特殊账号管理", href: "/#/8c" }, { name: "职位关注管理", href: "/#/8d" }],
  icon: "mail"
}, {
  key: "sub6",
  first: "邀请管理",
  second: [{ name: "推销员管理", href: "/#/9" }],
  icon: "mail"
}, {
  key: "sub7",
  first: "投诉管理",
  second: [{ name: "申诉管理", href: "/#/10" }, { name: "举报管理", href: "/#/10a" }],
  icon: "mail"
}, {
  key: "sub8",
  first: "财务管理",
  second: [{ name: "欠款管理", href: "/#/11" }, { name: "押金管理", href: "/#/11a" }, { name: "流水管理", href: "/#/11b" }, { name: "流水统计", href: "/#/11c" }],
  icon: "mail"
}, {
  key: "sub9",
  first: "版本管理",
  second: [{ name: "版本管理", href: "/#/12" }],
  icon: "mail"
}, {
  key: "sub10",
  first: "素材管理",
  second: [{ name: "素材管理", href: "/#/13" }],
  icon: "mail"
}, {
  key: "sub11",
  first: "日志管理",
  second: [{ name: "日志管理", href: "/#/14" }],
  icon: "mail"
}, {
  key: "sub12",
  first: "消息中心",
  second: [{ name: "客服中心", href: "/#/15" }],
  icon: "mail"
}, {
  key: "sub13",
  first: "重建索引",
  second: [{ name: "重建索引", href: "/#/16" }],
  icon: "mail"
}, {
  key: "sub14",
  first: "开屏管理",
  second: [{ name: "开屏配置", href: "/#/17" }],
  icon: "mail"
}, {
  key: "sub15",
  first: "归毂管理",
  second: [{ name: "新闻配置", href: "/#/18" }],
  icon: "mail"
}, {
  key: "sub16",
  first: "招聘管理",
  second: [{ name: "新闻配置", href: "/#/19" }, { name: "试卷管理", href: "/#/19a" }, { name: "题目管理", href: "/#/19/z" }],
  icon: "mail"
}, {
  key: "sub17",
  first: "推广管理",
  second: [{ name: "推广管理", href: "/#/rr" }],
  icon: "mail"
}, {
  key: "sub18",
  first: "设置",
  second: [{ name: "账号管理", href: "/#/ww" }, { name: "角色管理", href: "/#/ff" }],
  icon: "mail"
}]


const { Header, Sider, Footer } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      activityKey:"1",
      isLogin:false,
    }
  }

  // componentDidMount(){
  //   localStorage.removeItem("userInfo")
  //   this.setState({
  //     isLogin:false
  //   })
  //   post("/zol-cms/login/key").then(res => {
  //     // console.log(res)
  //     if(res.code === 0&&res.data.exponent){
  //       let password = "com.guigug.zol_123456@"+new Date().getTime()
  //       var publicKey = RSAUtils.getKeyPair(res.data.exponent, '', res.data.modulus)

  //       password = RSAUtils.encryptedString(publicKey, password)
  //       post("/zol-cms/login/password",{account:"root",password}).then(res => {
  //         localStorage.setItem("userInfo",JSON.stringify(res.data))
  //         this.setState({
  //           isLogin:true
  //         })
  //       })
  //     }
  //   }) 
  // }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    // if(this.state.isLogin === false){
    //   return null
    // }
    return (
      <Layout style={{height:"100%"}}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}  style={{overflow:"auto"}}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={[]}>

            <Left collapsed={this.state.collapsed}  />

          </Menu>

        </Sider>
        <Layout style={{height:"100%"}}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Head />
          </Header>

          <Router data={data} />
          <Footer style={{ textAlign: 'center' }}>Copyright ©2018 职卓 2018</Footer>
        </Layout>
      </Layout>
    );
  }
}