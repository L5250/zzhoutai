import React from 'react';
import { PageHeader, Icon, Input, Tree, Button, message } from 'antd';
import './add.scss';
import { get, post } from '../../util/axios'
import { connect } from 'react-redux'


// const powers = require('./quanxian.json').data.result



const { TreeNode } = Tree;

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
        path: '/add',
        breadcrumbName: '角色管理',
    }, {
        breadcrumbName: '添加角色',
    },
];



export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            // checkedKeys: ["0-0", '0-1', "0-2", "0-3", "0-4", '0-5', "0-6", "0-7", "0-8", '0-9', "0-10", "0-11", "0-12", '0-13', "0-14", "0-15", "0-16", '0-17'],
            checkedKeys: [],
            selectedKeys: [],
            invalue: '',
            data: [],
        }
    }



    componentWillMount() {
        this.getData()
    }



    onExpand = expandedKeys => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        });
    };

    onCheck = checkedKeys => {
        console.log('onCheck', checkedKeys);
        this.setState({ checkedKeys });
    };

    getValue = (e) => {
        this.setState({ invalue: e.target.value });
    }

    // 获取数据
    getData = () => {
        get('/zol-cms/role/page').then(res => {
            res = res.data.result
            let data = JSON.parse(res[0].menus)
            let arr = [];
            arr.push(data.key)
            this.setState({
                data: JSON.parse(res[0].menus),
            })
        })
    }

    // 添加信息
    addPerson = () => {

        if (this.state.invalue === '') {
            return message.warning('请输入名字');
        } else {

            let arr = [{ id: 20, menus: JSON.stringify(this.state.data), title: this.state.invalue }];
            console.log(arr)
            post('/zol-cms/role/create', {}, arr).then(res => {
                console.log(res)
            })
            window.location.href = "./#/ff";

        }

    }



    renderTreeNodes = data =>
        data.map(item => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} />;
        });
    render() {
        return (
            <div>
                <div className="title">
                    <PageHeader title={
                        <span className="title-a">
                            <Icon type="rollback"
                                onClick={() => {
                                    window.location.href = "/#/ff"
                                }}
                                style={{
                                    fontSize: 27,
                                    fontWeight: 700,
                                    color: "#488eff",
                                    cursor: "pointer",
                                    transition: "opacity .1s ease-in-out"
                                }} />
                            <h3 className="title-word">添加角色</h3>
                        </span>}
                        breadcrumb={{ routes }} className="title-ico"
                        style={{ padding: 0, fontSize: "20px" }}

                    />
                </div>

                <div
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}>
                    <div className="add-main">
                        <div className="add-input">
                            <div className="input-word">名称</div>
                            <Input style={{ width: 250 }} defaultValue={this.state.invalue} onChange={this.getValue.bind(this)} />
                        </div>
                        <div className="add-tree">
                            <span className="tree-word">权限</span>

                            <Tree
                                checkable
                                onExpand={this.onExpand}
                                expandedKeys={this.state.expandedKeys}
                                autoExpandParent={this.state.autoExpandParent}
                                onCheck={this.onCheck}
                                checkedKeys={this.state.checkedKeys}
                                onSelect={this.onSelect}
                                selectedKeys={this.state.selectedKeys}
                            >
                                {this.renderTreeNodes(this.state.data)}
                            </Tree>
                        </div>
                        <div className="add-but">
                            <Button href="/#/ff">返回</Button>
                            <Button type="primary" onClick={this.addPerson.bind(this)}>保存</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}