import React from 'react';
import './page4.scss'
import { PageHeader, Button, Table, Divider, Modal, Radio, Input } from 'antd';
import { get, post } from '../../util/axios';

const { Column } = Table;

// {
//     nickname: "l",
//     account: "12342",
//     mobile: "66-66666",
//     role: "超级管理员",
//     key: "1"
// }

const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: "/ff",
        breadcrumbName: '设置',
    },
    {
        path: '/ff',
        breadcrumbName: '角色管理',
    },
];

const { confirm } = Modal;

export default class Page3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
            visible1: false,
            value: 1,
            hdata: [],
            index: -1,
            inValue: "",
            inValue1: "",

            title: '',
            account: '',
            mobile: '',
            password: '',

            id: -1,
        }
    }

    componentDidMount() {
        this.getData()
    }
    // 删除功能
    showDeleteConfirm = (record, index) => {
        console.log(record + ">>>>>>>>>>>>")
        console.log(index)

        confirm({
            title: '提示框',
            content: '确认删除该角色？',
            okText: '确定',
            cancelText: '取消',

            onOk: () => {
                // console.log(index);
                let arr = this.state.data
                arr.splice(record, 1)
                // console.log(arr)
                // console.log("ok")
                this.setState({ data: arr })
            },
            onCancel: () => {
                console.log('Cancel');
            },
        });

    }

    // 添加按钮对话框
    showModal1 = () => {
        this.setState({
            visible1: true,
        });
        // console.log(text)
    };

    // 添加账号确定
    handleOk1 = e => {
        let arr = {
            account: this.state.account,
            id: 17, mobile: this.state.mobile,
            password: this.state.password,
            roleId: this.state.value * 4,
            title: this.state.title
        }
        console.log(arr)
        post('/zol-cms/manager/create', {}, arr).then(res => {

        })
        this.setState({
            visible1: false,
        });
    }

    // 添加账号取消

    handleCancel1 = e => {
        this.setState({
            visible1: false,
        });
    };

    // 编辑账号对话框

    showModal = (text, index) => {

        this.setState({
            visible: true,
            hdata: text,
            index: index,
            id: this.state.data[index].id
        });
        // console.log(text)
    };
    // 编辑账号确定
    handleOk = e => {
        let arr = { id: this.state.id, mobile: this.state.inValue1, roleId: this.state.value * 4, title: this.state.inValue }
        console.log(arr)
        post('/zol-cms/manager/updateInfo', {}, arr).then(res => {

        })
        this.setState({
            visible: false,
        });
        // for (let i = 0; i < data.length; i++) {
        //     if (this.state.inValue !== '') {
        //         data[this.state.index].nickname = this.state.inValue
        //         // arr = arr.splice(this.state.index,1,{nickname:this.state.inValue,mobile:this.state.inValue1})
        //     } if (this.state.inValue1 !== '') {
        //         data[this.state.index].mobile = this.state.inValue1
        //     }
        // }
        // console.log(this.state.value)
        // console.log(this.state.data)
        // this.setState({
        //     visible: false,
        // });
    };
    // 编辑账号取消
    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    // 角色分配单选按钮
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });

    };
    // 编辑账号value值
    handleChange = (e) => {

        this.setState({ inValue: e.target.value })
    }
    handleChange1 = (e) => {
        this.setState({ inValue1: e.target.value })
    }

    // 添加账号value值
    title = (e) => {
        this.setState({ title: e.target.value })
    }
    account = (e) => {
        this.setState({ account: e.target.value })
    }
    mobile = (e) => {
        this.setState({ mobile: e.target.value })
    }
    password = (e) => {
        this.setState({ password: e.target.value })
    }



    //获取数据
    getData = () => {
        get('/zol-cms/manager/page', { pageNo: 1, pageSize: 60 }).then(res => {
            console.log(res)
            this.setState({
                data: res.data.result,
            })
        })
    }

    render() {

        return (
            <div>
                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <img src={require('../../static/images/lo.png')} alt="" className="title-img"></img>
                            <h3 className="title-word">角色管理</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}
                        extra={
                            <div>
                                <Button type="primary" style={{ marginTop: "20px" }} onClick={this.showModal1} >添加</Button>
                                {
                                    this.state.visible1 ?
                                        <Modal
                                            title="添加账号"
                                            visible={this.state.visible1}
                                            onOk={this.handleOk1}
                                            onCancel={this.handleCancel1}
                                            okText="确定"
                                            cancelText="取消"
                                        >
                                            <div className="inp-1">
                                                <span>昵称</span>
                                                <Input onChange={this.title} />
                                            </div>
                                            <div className="inp-1">
                                                <span>账号</span>
                                                <Input onChange={this.account} />
                                            </div>
                                            <div className="inp-1">
                                                <span>手机</span>
                                                <Input onChange={this.mobile} />
                                            </div>
                                            <div className="inp-1">
                                                <span>密码</span>
                                                <Input type="password" onChange={this.password} />
                                            </div>
                                            <div className="inp-1">
                                                <span>确认密码</span>
                                                <Input type="password" onChange={this.passwordX} />
                                            </div>
                                            <Radio.Group onChange={this.onChange} value={this.state.value} className="radio">
                                                <span className="radio-a">角色分配</span>
                                                <Radio value={1}>超级管理员</Radio>
                                                <Radio value={2}>财务</Radio>
                                                <Radio value={3}>运营</Radio>
                                                <Radio value={4}>客服</Radio>
                                            </Radio.Group>
                                        </Modal> : null
                                }

                            </div>
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
                    <Table dataSource={this.state.data} rowKey={record => record.id} >

                        <Column title="昵称" dataIndex="title" />
                        <Column title="账号" dataIndex="account" />
                        <Column title="手机" dataIndex="mobile" />
                        <Column title="角色" dataIndex="roleName" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record, index) => (
                                <span>
                                    <span style={{ color: "#1890ff", cursor: "pointer" }} onClick={() => this.showModal(text, index, record)}>编辑</span>
                                    <Divider type="vertical" />
                                    <span style={{ color: "#1890ff", cursor: "pointer" }} onClick={() => this.showDeleteConfirm(index)} >删除</span>
                                </span>
                            )}
                        />

                    </Table>
                    {
                        this.state.visible ? <Modal
                            title="编辑账号"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            okText="确定"
                            cancelText="取消"
                        >
                            <div className="inp-1">
                                <span>昵称</span>
                                <Input placeholder="" defaultValue={this.state.hdata.title} onChange={this.handleChange} />
                            </div>
                            <div className="inp-2">
                                <span>手机</span>
                                <Input placeholder="" defaultValue={this.state.hdata.mobile} onChange={this.handleChange1} />
                            </div>
                            <Radio.Group onChange={this.onChange} value={this.state.value} className="radio">
                                <span className="radio-a">角色分配</span>
                                <Radio value={1}>超级管理员</Radio>
                                <Radio value={2}>财务</Radio>
                                <Radio value={3}>运营</Radio>
                                <Radio value={4}>客服</Radio>
                            </Radio.Group>
                        </Modal> : null
                    }

                </div>
            </div>
        )
    }

}
