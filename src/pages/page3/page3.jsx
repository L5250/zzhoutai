import React from 'react';
import { PageHeader, Button, Table, Divider, Modal } from 'antd';
import { get } from '../../util/axios'

const { Column } = Table;

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
            // data: JSON.parse(localStorage.getItem("powers")),
            data: [],
            id:-1
            
        }
    }

    componentDidMount() {
        this.getData();
    }


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


    getData = () => {
        get('/zol-cms/role/page', { pageSize: 60, pageNo: 1 }).then(res => {
            console.log(res)
            this.setState({
                data: res.data.result,
            })
        })
    }
    getId=(index)=>{
        let a = this.state.data[index].id
        this.setState({
            id:a
        })
    }

    render() {
        // console.log(window.location.href)
        // console.log(window.location.hash)

        return (
            <div>
                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <img src={require('../../static/images/lo.png')} alt="" ></img>
                            <h3 className="title-word">角色管理</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}
                        extra={
                            <div>
                                <Button type="primary" href="/#/ff/add" style={{ marginTop: "20px" }}>添加</Button>
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
                    <Table dataSource={this.state.data} rowKey={record => record.id}>

                        <Column title="名称" dataIndex="title" key="id" />
                        <Column
                            title="操作"
                            render={(text, record, index) => (

                                <span>

                                    <a href={'/#/ff/edit?id=' + this.state.id} onClick={()=>this.getId(index)}>编辑</a>
                                    <Divider type="vertical" />
                                    <span style={{ color: "#1890ff", cursor: "pointer" }} onClick={() => this.showDeleteConfirm(index)} >删除</span>
                                    <Divider type="vertical" />
                                    <a href={'/#/ff/see?id=' + this.state.id} onClick={()=>this.getId(index)}>查看</a>
                                </span>
                            )}
                        />
                    </Table>
                </div>
            </div>
        )
    }

}