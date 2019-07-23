import React from 'react';
import { Table, Input, Tooltip, Modal, Button, Timeline, Badge, Spin, message, Pagination } from 'antd';
import { post } from '../../util/axios';
import copy from 'copy-to-clipboard';
import './page5.scss'


const { Column } = Table;

const { Search } = Input
export default class Activation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible: false,
            visibleX: false,
            spinning: true,
            value: undefined,
            current: 1,
            total: -1,
            // pageSize:10,
            // pageNo:1,
            loginTime: ''
        }
    }

    componentDidMount() {
        this.getData()
    }


    // 获取数据
    getData = (value, page) => {
        post('/zol-cms/entity/seeker/page/activated',
            {
                pageSize: 10,
                pageNo: page ? page : this.state.current,
                mobile: value === "" ? undefined : value
            }).then(res => {
                this.setState({
                    data: res.data.result,
                    total: res.data.total,
                    spinning: false
                })
            })
    }
    // 查看流水
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    // 查看登录时间
    showModalX = (index) => {
        let time = this.state.data[index].recent.slice(0, 10)
        // console.log(index)
        // console.log(this.state.data[index].recent)
        this.setState({
            visibleX: true,
            loginTime: time
        });
    };

    handleOkX = e => {
        // console.log(e);
        this.setState({
            visibleX: false,
        });
    };

    handleCancelX = e => {
        this.setState({
            visibleX: false,
        });
    };

    // 搜索
    search = (value) => {
        this.setState({ value: value })
    }

    // 分页
    onChange = page => {
        // console.log(page);
        this.setState({
            current: page,
        });
        this.getData("", page)
    };

    // 复制
    copy = (record) => {
        copy(record.info.accountId);
        return message.success("复制成功")
    }



    render() {
        // console.log(this.state.data)
        // console.log(this.state.data.recent)

        return (
            <Spin spinning={this.state.spinning}>
                <Search
                    placeholder="输入手机号码！！！hurry up！！"
                    enterButton="搜索"
                    size="large"
                    onSearch={value => this.getData(value)}
                />
                <Table dataSource={this.state.data} rowKey={record => record.info.accountId}
                    pagination={false}
                >
                    <Column title="基本信息" dataIndex="accountId"
                        render={(text, record) => (
                            // console.log(record)
                            <div style={{ maxWidth: "225px" }}>
                                <img src={record.info.icon} alt="" style={{ width: 32, height: 32, borderRadius: "50%" }}></img>
                                <div className="user">
                                    <span>用户ID：</span>
                                    <Tooltip title={record.info.accountId}>
                                        <span className="useid"
                                            style={{ cursor: "pointer", color: "rgb(33,150,243)" }}
                                            onClick={() => this.copy(record)}
                                        >{record.info.accountId.slice(0, 10) + "..."}</span>
                                    </Tooltip>
                                </div>
                                {record.info.age && <div>年龄：{record.info.age + "岁"}</div>}

                                {record.info.edu && <div>教育经历：{record.info.edu}</div>}

                                <div className="usenum">联系方式：{record.info.mobile}</div>
                                {record.info.intro && <div>简介：{record.info.intro.length > 10 ? record.info.intro.slice(0, 10) + "..." : record.info.intro}  </div>}



                            </div>
                        )}
                    />
                    <Column title="投递数量" dataIndex="deliverCount"
                        render={(text, record) => (
                            <div>{text === 0 ? "暂无投递" : text}</div>
                        )}
                    />
                    <Column title="其他信息" dataIndex="info"
                        render={(text, record) => (
                            <div>
                                <div>资料完善度：{this.state.data.quality === 0 ? "暂无" : this.state.data.quality}</div>
                                <div>用户好评：{record.info.active === true ? "激活" : "未激活"}</div>
                                <div>
                                    <span>是否激活：</span>
                                    <Badge status="success" />
                                    <span>激活</span>
                                </div>
                                <div>最近登录：{record.recent.slice(0, 10)}</div>                                
                            </div>
                        )}
                    />
                    <Column title="操作"
                        render={(text, record, index) => (
                            <div className="caozuo">
                                <div>
                                    <Button type="primary" size="small" onClick={() => { this.showModal(index) }}>查看流水</Button>
                                </div>
                                <div>
                                    <Button type="primary" size="small" onClick={() => { this.showModalX(index) }}>查询登录时间</Button>
                                </div>
                            </div>
                        )}
                    />
                </Table>
                {this.state.visible ? <Modal
                    title="查看流水"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Table>
                        <Column title="用户姓名" dataIndex="" ></Column>
                        <Column title="总金额" dataIndex="" ></Column>
                        <Column title="原因" dataIndex="" ></Column>
                        <Column title="状态" dataIndex="" ></Column>
                        <Column title="创建时间" dataIndex="" ></Column>
                    </Table>

                </Modal> : null}
                {
                    this.state.visibleX ? <Modal
                        title="查询登录时间"
                        visible={this.state.visibleX}
                        onOk={this.handleOkX}
                        onCancel={this.handleCancelX}
                    >
                        <Timeline>
                            <Timeline.Item>{this.state.loginTime}</Timeline.Item>

                        </Timeline>

                    </Modal> : null
                }
                <Pagination total={this.state.total} current={this.state.current} onChange={this.onChange} style={{ textAlign: "right" }} />
            </Spin>
        )
    }

}