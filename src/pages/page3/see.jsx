import React from 'react';
import { PageHeader, Icon,  Tree  } from 'antd';
import './add.scss';
import { get } from '../../util/axios'
import { connect } from 'react-redux';



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





class See extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultExpandAll:true,
            defaultSelectedKeys:[],
            // expandedKeys: ['0-0-0', '0-0-1'],
            autoExpandParent: true,
            checkedKeys: [],
            // selectedKeys: ["0-0"],
            data: [],
            menus: []
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
        let a = window.location.hash.slice(12);

        get('/zol-cms/role/detail', { roleId: 4}).then(res => {
            console.log(res)
            let arr = JSON.parse(res.data.menus)
            for (let i = 0; i < arr.length; i++) {
                let arr1 = []
                if (arr1.indexOf(arr[i].key) === -1) {
                    arr1.push(arr[i].key)
                }
                this.setState({
                autoExpandParent:arr1

                })
            }

            console.log(arr)

            console.log(arr)

            console.log(res)
            this.setState({
                data: res.data,
                menus: arr,

            })
        });
    }
    render() {
        console.log(this.props.id);
        
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
                            <h3 className="title-word">查看角色</h3>
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
                        <div className="add-tree">
                            <span className="tree-word">权限</span>

                            <Tree
                                checkable
                                onExpand={this.onExpand}
                                // expandedKeys={this.state.expandedKeys}
                                // autoExpandParent={this.state.autoExpandParent}
                                defaultExpandAll = {this.state.defaultExpandAll}
                                defaultSelectedKeys = {this.state.defaultSelectedKeys}
                                onCheck={this.onCheck}
                                checkedKeys={this.state.checkedKeys}
                                // onSelect={this.onSelect}
                                selectedKeys={this.state.selectedKeys}
                                defaultCheckedKeys={this.state.defaultCheckedKeys}
                            >
                                {this.renderTreeNodes(this.state.menus)}
                            </Tree>

                        </div>
   
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return {
        id :state.id
    }
}
export default connect(mapStateToProps,null)(See)