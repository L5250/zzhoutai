import React from 'react';
import { PageHeader, Icon, Input, Tree, Button ,message} from 'antd';
import './add.scss';
import { get, post } from '../../util/axios'



// const setdata = require('./data.json')


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
        path: '/ff',
        breadcrumbName: '角色管理',
    }, {
        path: '/#/ff/add',
        breadcrumbName: '添加角色',
    },
];


export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            checkedKeys: [],
            // selectedKeys: ["0-0"],
            data: [],
            menus: [],

            roleCreate: {},
            invalue: "",
            id:-1
        }
    }

    componentDidMount() {
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

    // 请求数据
    getData = () => {
        let a = window.location.hash.slice(13);
        // this.state.id = a
        console.log(a)
        get('/zol-cms/role/detail', { roleId: a }).then(res => {
            let arr = JSON.parse(res.data.menus)
            console.log(res)
            this.setState({
                data: res.data,
                menus: arr,
                invalue: res.data.title,
                id:a
            })
        });
    }
    // 获取value
    valueChange = (e) => {
        this.setState({
            invalue: e.target.value
        })
    }


    // 修改数据
    edit = () => {
        if(this.state.invalue === ''){
            return message.warring('请输入名称')
        }else{
            let arr = { id: Number(this.state.id), menus: JSON.stringify(this.state.menus), title: this.state.invalue }
        post('/zol-cms/role/update', {}, arr).then(res => {
            console.log(res)
        });
        window.location.href = './#/ff';
        }
        
        
    }


    render() {
        // console.log(window.location.hash)
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
                            <h3 className="title-word">编辑角色</h3>
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
                            <Input style={{ width: 250 }} defaultValue={this.state.invalue} value={this.state.invalue} onChange={this.valueChange} />
                        </div>
                        <div className="add-tree">
                            <span className="tree-word">权限</span>

                            <Tree
                                checkable
                                onExpand={this.onExpand}
                                // expandedKeys={this.state.expandedKeys}
                                // autoExpandParent={this.state.autoExpandParent}
                                onCheck={this.onCheck}
                                checkedKeys={this.state.checkedKeys}
                                // onSelect={this.onSelect}
                                selectedKeys={this.state.selectedKeys}
                                defaultCheckedKeys={this.state.defaultCheckedKeys}
                            >
                                {this.renderTreeNodes(this.state.menus)}
                            </Tree>

                        </div>
                        <div className="add-but">
                            <Button href="/#/ff">返回</Button>
                            <Button type="primary" onClick={this.edit} >保存</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}