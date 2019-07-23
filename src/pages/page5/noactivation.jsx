import React from 'react';
import { Table, Input, Tooltip, Modal, Button, Timeline,Badge,Spin  } from 'antd';
import { post } from '../../util/axios'
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
            spinning:true

        }
    }

    componentDidMount() {
        this.getData()
    }


    // 获取数据
    getData = () => {
        post('/zol-cms/entity/seeker/page/unactivated', { pageSize: 20, pageNo: 1 }).then(res => {
            this.setState({ 
                data: res.data.result,
                spinning:false
             })
            console.log(this.state.data)

        })
    }
    // 查看流水
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    // 查看登录时间
    showModalX = () => {
        this.setState({
            visibleX: true,
        });
    };

    handleOkX = e => {
        // console.log(e);
        this.setState({
            visibleX: false,
        });
    };

    handleCancelX = e => {
        console.log(e);
        this.setState({
            visibleX: false,
        });
    };


    // 加载中
    spin=()=>{
        this.setState({})
    }
    render() {
        return (
            <Spin spinning={this.state.spinning}>
            <div>
                <Search
                    placeholder="输入手机号码！！！hurry up！！"
                    enterButton="搜索"
                    size="large"
                    onSearch={value => console.log(value)}
                />
                <Table dataSource={this.state.data} rowKey={record => record.info.accountId} >
                    <Column title="基本信息" dataIndex="accountId"
                        render={(text, record) => (
                            // console.log(record)
                            <div style={{ maxWidth: "225px" }}>
                                <img src={record.info.icon} alt="" style={{ width: 32, height: 32, borderRadius: "50%" }}></img>
                                <div className="user">
                                    <span>用户ID：</span>
                                    <Tooltip title={record.info.accountId}>
                                        <span className="useid" style={{ cursor: "pointer", color: "rgb(33,150,243)" }}>{record.info.accountId.slice(0, 10) + "..."}  </span>
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
                        render={(text, record,index) => (
                            <div>
                                <div>资料完善度：{this.state.data.quality === 0 ? "暂无" : this.state.data.quality}</div>
                                <div>用户好评：{record.info.active === true ? "激活" : "未激活"}</div>
                                <div>
                                    <span>是否激活：</span>
                                    <Badge status="error" />
                                    <span>激活</span>
                                </div>
                                {/* <div>最近登录：{record.recent.slice(0, 10)}</div> */}
                            </div>
                        )}
                    />
                    <Column title="操作"
                        render={(index) => (
                            <div className="caozuo">
                                <div>
                                    <Button type="primary" size="small" onClick={()=>this.showModal(index)}>查看流水</Button>
                                </div>
                                <div>
                                    <Button type="primary" size="small" onClick={()=>this.showModalX(index)}>查询登录时间</Button>
                                </div>
                            </div>
                        )}
                    />
                </Table>
                <Modal
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

                </Modal>
                <Modal
                    title="查询登录时间"
                    visibleX={this.state.visibleX}
                    onOk={this.handleOkX}
                    onCancel={this.handleCancelX}
                >
                    <Timeline>
                        <Timeline.Item>222</Timeline.Item>
                    </Timeline>

                </Modal>
            </div>
            </Spin>
        )
    }

}