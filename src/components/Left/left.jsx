import React from 'react';
import './left.scss'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;



export default class Left extends React.Component {


    rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8', 'sub9', 'sub10', 'sub11',
        'sub12', 'sub13', 'sub14', 'sub15', 'sub16', 'sub17', 'sub18', 'sub19'];

    state = {
        openKeys: [''],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };



    render() {
        return (
            <div id="header">
                <div className="login">
                    <img className="login-img" src={require("../../static/images/zol2x.png")} alt="log"></img>
                    <span className={this.props.collapsed ? 'hide' : 'a'}>职卓</span>
                </div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                // style={{ width: 200 }}
                >
                    {/* {
                        this.props.data.map((item, index) => {
                            return (
                                <SubMenu key={item.key}
                                    title={
                                        <span>
                                            <Icon type={item.icon} />
                                            <span>{item.first}</span>
                                        </span>}>
                                    {
                                        item.second.map((item1, index1) => {
                                            return (
                                                <Menu.Item key={item.key+index1}>
                                                    <a href={item1.href}>{item1.name}</a>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    } */}




                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>认证管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <a href="/#/1">企业认证</a>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <a href="/#/video">视频认证</a>
                        </Menu.Item>

                    </SubMenu>


                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>实体管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="3">
                            <a href="/#/2">公司管理</a>
                        </Menu.Item>
                        <Menu.Item key="4">中介管理</Menu.Item>
                        <Menu.Item key="5">商户管理</Menu.Item>
                        <Menu.Item key="6">
                            <a href='/#/zz'>用户管理</a>
                        </Menu.Item>

                    </SubMenu>


                    <SubMenu
                        key="sub3"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>职业管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="7">职位管理</Menu.Item>
                        <Menu.Item key="8">职位发布</Menu.Item>

                    </SubMenu>


                    <SubMenu key="sub04"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>板块管理</span>
                            </span>
                        }>
                        <Menu.Item key="9">
                            <a href="/#/echarts">Echarts图表</a>
                        </Menu.Item>
                        <Menu.Item key="10">页面管理</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub05"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>数据字典</span>
                            </span>
                        }>
                        <Menu.Item key="11">
                            <a href="/#/groups" alt="">React动画</a>
                        </Menu.Item>
                        <Menu.Item key="12">职业分类管理</Menu.Item>
                        <Menu.Item key="13">职位卡管理</Menu.Item>
                        <Menu.Item key="14">特殊账号管理</Menu.Item>
                        <Menu.Item key="15">职位关注管理</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub06"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>邀请管理</span>
                            </span>
                        }>
                        <Menu.Item key="16">推销员管理</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub07"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>投诉管理</span>
                            </span>
                        }>
                        <Menu.Item key="17">申诉管理</Menu.Item>
                        <Menu.Item key="18">举报管理</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub08"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>财务管理</span>
                            </span>
                        }>
                        <Menu.Item key="19">欠款管理</Menu.Item>
                        <Menu.Item key="20">押金管理</Menu.Item>
                        <Menu.Item key="21">流水管理</Menu.Item>
                        <Menu.Item key="22">流水统计</Menu.Item>
                    </SubMenu>


                    <SubMenu key="sub09"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>版本管理</span>
                            </span>
                        }>
                        <Menu.Item key="23">版本管理</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub10"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>素材管理</span>
                            </span>
                        }>
                        <Menu.Item key="24">素材管理</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub11"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>日志管理</span>
                            </span>
                        }>
                        <Menu.Item key="25">日志管理</Menu.Item>

                    </SubMenu>


                    <SubMenu key="sub12"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>消息中心</span>
                            </span>
                        }>
                        <Menu.Item key="26">客服中心</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub13"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>重建索引</span>
                            </span>
                        }>
                        <Menu.Item key="27">重建索引</Menu.Item>

                    </SubMenu>

                    <SubMenu key="sub14"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>开屏管理</span>
                            </span>
                        }>
                        <Menu.Item key="28">开屏配置</Menu.Item>

                    </SubMenu>


                    <SubMenu key="sub15"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>归毂管理</span>
                            </span>
                        }>
                        <Menu.Item key="29">
                            <a href="/#/18">新闻配置</a>
                        </Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub16"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>招聘管理</span>
                            </span>
                        }>
                        <Menu.Item key="30">成绩列表</Menu.Item>
                        <Menu.Item key="31">试卷管理</Menu.Item>
                        <Menu.Item key="32">题目管理</Menu.Item>


                    </SubMenu>
                    <SubMenu key="sub17"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>推广管理</span>
                            </span>
                        }>
                        <Menu.Item key="33">推广管理</Menu.Item>

                    </SubMenu>
                    <SubMenu key="sub18"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>设置</span>
                            </span>
                        }>
                        <Menu.Item key="34">
                            <a href="/#/ww">账号管理</a>
                        </Menu.Item>
                        <Menu.Item key="35">
                            <a href="/#/ff">角色管理</a>
                        </Menu.Item>


                    </SubMenu>

                </Menu>
            </div>

        );
    }
}