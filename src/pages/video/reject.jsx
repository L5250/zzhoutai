import React, { Component } from 'react';
import { Table, Badge, message, Button, Pagination, Spin } from 'antd';
import { get } from '../../util/axios';
import copy from 'copy-to-clipboard';


const { Column } = Table;
export default class Reject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            spinning: true,
            current: 1,
            total:-1

        }
    }
    componentDidMount() {
        this.videoData()
    }

    //视频数据
    videoData = (value, page) => {
        get('/zol-cms/seeker/video/page', { pageNo: page ? page : this.state.current, pageSize: 10, state: 3 }).then(res => {
            console.log(res)
            this.setState({
                data: res.data.result,
                spinning: false,
                total: res.data.total,
            })
        })
    }

    // 复制
    copy = (record) => {
        copy(record.seekerId);
        return message.success("复制成功")
    }
    // 复制2
    copy = (record) => {
        copy(record.videoId);
        return message.success("复制成功")
    }

    // 播放视频
    play = (record) => {
        get("zol-cms/seeker/video/auth", { videoId: record.videoId }).then(res => {
            console.log(res)
        })
    }
    // 分页
    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
        this.videoData("", page)
    };


    render() {
        return (
            <Spin spinning={this.state.spinning}>
                <Table dataSource={this.state.data} rowKey={record => record.videoId}
                    style={{ whiteSpace: "nowrap" }}
                    pagination={false}
                >
                    <Column title="用户信息" dataIndex="seekerId"
                        render={(text, record, index) => (
                            <div>
                                <div>
                                    <span>用户ID：</span>
                                    <span style={{ color: "rgb(33, 150, 243)", cursor: "pointer" }}
                                        onClick={() => this.copy(record)}
                                    >{record.seekerId.slice(0, 10) + "..."}</span>
                                </div>
                                {/* <div style={{color:"rgb(33, 150, 243)",cursor:"pointer"}}>用户ID：{record.seekerId.slice(0,10)+"..."}</div> */}
                                <div>联系方式：{record.infoIntro} </div>
                            </div>
                        )}
                    />
                    <Column title="视频信息" dataIndex="type"
                        render={(text, record) => (
                            <div>
                                <div>
                                    <span>视频ID：</span>
                                    <span style={{ color: "rgb(33, 150, 243)", cursor: "pointer" }}
                                        onClick={() => this.copy(record)}
                                    >{record.videoId?record.videoId.slice(0, 10) + "...":"暂无"}</span>
                                </div>
                                <div>
                                    <span>视频进度：</span>
                                    <Badge status="success" />
                                    <span>上传成功</span>
                                </div>
                                <div>
                                    <span>视频认证：</span>
                                    <Badge status="error" />
                                    <span>已拒绝</span>
                                </div>
                                <div>
                                    <span>视频类型：</span>
                                    <span>{record.type === "intro" ? "自我介绍" : record.type === "skill" ? "技能展示" : "成果/证书 "}</span>
                                </div>
                                <div>
                                    <span>视频上传时间：</span>
                                    <span> {record.gmtCreate.slice(0, 10)} </span>
                                </div>
                            </div>
                        )}
                    />
                    <Column title="视频播放" dataIndex="videoId"
                        render={(text, record) => (
                            <div>
                                <img src={record.cover} alt="视频"
                                    style={{ width: "120px", cursor: "pointer" }}
                                    onClick={() => this.play(record)}
                                />
                            </div>
                        )}
                    />
                    <Column title="操作" dataIndex="infoIntro"
                        render={(text, record) => (
                            <div>
                                <Button size="small" type="primary">通过</Button>
                            </div>
                        )}

                    />
                </Table>
                <Pagination total={this.state.total} current={this.state.current} onChange={this.onChange} style={{ textAlign: "right" }} />
            </Spin>
        )
    }
}
