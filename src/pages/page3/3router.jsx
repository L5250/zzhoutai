import React from 'react';
import {  Route } from 'react-router-dom';

import Page3 from './page3.jsx';
import Add from './add.jsx';
import Edit from './edit.jsx';
import See from './see.jsx'

// const data = [
//     {
//         key: "0-0",
//         title: "认证管理",
//         children: [{ title: "企业认证", href: "/#/1", key: "0-0-0" }, { title: "视频认证", href: "/#/1a", key: "0-0-1" }],
//         icon: "mail"
//     }, {
//         key: "0-1",
//         title: "实体管理",
//         children: [{ title: "公司管理", href: "/#/2", key: "0-1-0" }, { title: "视频认证", href: "/#/2a", key: "0-1-1" }],
//         icon: "appstore"
//     }, {
//         key: "0-2",
//         title: "职业管理",
//         children: [{ title: "职位管理", href: "/#/6", key: "0-2-0" }, { title: "职位发布", href: "/#/6a", key: "0-2-1" }],
//         icon: "mail"
//     }, {
//         key: "0-3",
//         title: "板块管理",
//         children: [{ title: "板块管理", href: "/#/7", key: "0-3-0" }, { title: "页面管理", href: "/#/7a", key: "0-3-1" }],
//         icon: "mail"
//     }, {
//         key: "0-4",
//         title: "数据字典",
//         children: [{ title: "中介擅长管理", href: "/#/8", key: "0-4-0" }, { title: "职业分类管理", href: "/#/8a", key: "0-4-1" }, { title: "职位卡管理", href: "/#/8b", key: "0-4-2" }, { title: "特殊账号管理", href: "/#/8c", key: "0-4-3" }, { title: "职位关注管理", href: "/#/8d", key: "0-4-4" }],
//         icon: "mail"
//     }, {
//         key: "0-5",
//         title: "邀请管理",
//         children: [{ title: "推销员管理", href: "/#/9", key: "0-5-0" }],
//         icon: "mail"
//     }, {
//         key: "0-6",
//         title: "投诉管理",
//         children: [{ title: "申诉管理", href: "/#/10", key: "0-6-0" }, { title: "举报管理", href: "/#/10a", key: "0-6-1" }],
//         icon: "mail"
//     }, {
//         key: "0-7",
//         title: "财务管理",
//         children: [{ title: "欠款管理", href: "/#/11", key: "0-7-0" }, { title: "押金管理", href: "/#/11a", key: "0-7-1" }, { title: "流水管理", href: "/#/11b", key: "0-7-2" }, { title: "流水统计", href: "/#/11c", key: "0-7-3" }],
//         icon: "mail"
//     }, {
//         key: "0-8",
//         title: "版本管理",
//         children: [{ title: "版本管理", href: "/#/12", key: "0-8-0" }],
//         icon: "mail"
//     }, {
//         key: "0-9",
//         title: "素材管理",
//         children: [{ title: "素材管理", href: "/#/13", key: "0-9-0" }],
//         icon: "mail"
//     }, {
//         key: "0-10",
//         title: "日志管理",
//         children: [{ title: "日志管理", href: "/#/14", key: "0-10-0" }],
//         icon: "mail"
//     }, {
//         key: "0-11",
//         title: "消息中心",
//         children: [{ title: "客服中心", href: "/#/15", key: "0-11-0" }],
//         icon: "mail"
//     }, {
//         key: "0-12",
//         title: "重建索引",
//         children: [{ title: "重建索引", href: "/#/16", key: "0-12-0" }],
//         icon: "mail"
//     }, {
//         key: "0-13",
//         title: "开屏管理",
//         children: [{ title: "开屏配置", href: "/#/17", key: "0-13-0" }],
//         icon: "mail"
//     }, {
//         key: "0-14",
//         title: "归毂管理",
//         children: [{ title: "新闻配置", href: "/#/18", key: "0-14-0" }],
//         icon: "mail"
//     }, {
//         key: "0-15",
//         title: "招聘管理",
//         children: [{ title: "新闻配置", href: "/#/19", key: "0-15-0" }, { title: "试卷管理", href: "/#/19a", key: "0-15-1" }, { title: "题目管理", href: "/#/19/z", key: "0-15-2" }],
//         icon: "mail"
//     }, {
//         key: "0-16",
//         title: "推广管理",
//         children: [{ title: "推广管理", href: "/#/rr", key: "0-16-0" }],
//         icon: "mail"
//     }, {
//         key: "0-17",
//         title: "设置",
//         children: [{ title: "账号管理", href: "/#/ww", key: "0-17-0" }, { title: "角色管理", href: "/#/ff", key: "0-17-1" }],
//         icon: "mail"
//     }]


export default class Routers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Route path='/ff' exact component={Page3} />
                <Route path='/ff/add' component={Add}  />
                <Route path='/ff/edit' component={Edit} />
                <Route path='/ff/see' component={See} />
            </div>
        )
    }

}