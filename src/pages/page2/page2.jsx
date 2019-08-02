import React from 'react';
import { Input, Icon, Modal, PageHeader, Pagination } from 'antd';
import './page2.scss'
import '../../static/css/head.scss';
import { get, post } from '../../util/axios'

const routes = [
  {
    path: '/',
    breadcrumbName: '主页',
  },
  {
    path: "/2",
    breadcrumbName: '实体管理',
  },
  {
    path: '/#/1',
    breadcrumbName: '公司管理',
  },
];

const Search = Input.Search;

export default class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      current: 1,
      pageSize: 10,
      newitem: {},
      newMessage: [],
      index: -1,
      value: "",
      invalue: '',
      data: []
    }

    this.showModal = this.showModal.bind(this)
    this.addMessages = this.addMessages.bind(this)
  }


  componentDidMount() {
    this.getData();
    // this.edit()
  }

  // 信息对话框
  showModal = (item, index) => {
    this.state.data[this.state.index] = this.state.newitem
    console.log(item)
    this.setState({ 
      id: item.id ,
      index: index,
      visible: true,
      newitem: item,

    })

    post('/zol-cms/company/show', { id: item.id }).then(res => {
      console.log(res,"post")
      this.setState({

        newMessage: res.data.items,
      });
    })
    // let arr = []
    // for (let i = 0; i < item.items.length; i++) {
    //   if (arr.indexOf(item.items[i])) {
    //     arr.push(item.items[i])
    //   }
    // }

  };


  // 确定回调
  handleOk = () => {
    
    // let arr = this.state.data[this.state.index].items
    // arr = this.state.newMessage
    // console.log(arr)
    this.setState({
      confirmLoading: true,
    });
    console.log( this.state.newitem)
    post('/zol-cms/company/page', {}, this.state.newitem).then(res => {
      console.log(this.state.newitem,"this.state.newitem")
      console.log(res)
    })
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 100);
  };


  // 取消
  handleCancel = () => {
    this.setState({
      visible: false,
      
    });
  };

  // 分页
  onChange = (page) => {
    this.setState({
      current: page,
    });
  };

  // 搜索
  handleSearch = value => {
    let arr = []
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].title.indexOf(value) >= 0) {
        arr.push(this.state.data[i])
      }
      this.setState({ data: arr })
    }
  }

  // 添加信息

  addMessages = (item1, index1) => {
    console.log(item1)
    let newarr = this.state.newitem.items.concat([{ key: "1", value: "2" }])
    // this.state.newitem.items = newarr
    console.log(this.state.newitem.items)

    this.setState({ newMessage: newarr })
  }

  // 删除信息
  delMessages = (index1) => {
    console.log(index1)
    let arr = this.state.newMessage;
    console.log(arr)
    arr.splice(index1, 1);
    this.setState({ newMessage: arr })
  }

  //  input框value值
  handleChange = (e) => {
    this.setState({ invalue: e.target.value })
  }


  // 获取数据
  getData = () => {
    get('/zol-cms/company/page', { pageSize: 40, pageNo: 1 }).then(res => {
      res = res.data.result
      this.setState({ data: res })
    })
  }

  // 修改数据
  edit = () => {
    post('/zol-cms/company/page', {}, this.state.newMessage).then(res => {
      this.setState({ newMessage: res })
      console.log(res)
    })
  }


  render() {
    const { visible, confirmLoading, data } = this.state;
    return (
      <div className="page2">
        <div className="title">
          <PageHeader title={
            <span className="title-a">
              <img src={require('../../static/images/lo.png')} alt="" className="title-img"></img>
              <h3 className="title-word">公司管理</h3>
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
          }}
        >
          <Search
            placeholder="输入公司名字搜索"
            enterButton="搜索"
            // size="small"
            onSearch={value => this.handleSearch(value)}
            style={{ width: 350, height: 32, marginBottom: 10, marginLeft: 14 }}
          />

          <div className="page2-main">
            {
              data.map((item, index) => {
                if (index >=
                  (this.state.current - 1) * this.state.pageSize && index < this.state.current * this.state.pageSize) {
                  return (
                    <div type="primary" key={index} className="ad" >

                      <div className="page2-box">
                        <div className="mengc">
                          <Icon type="setting" onClick={() => this.showModal(item, index)} className="open-mc" />
                        </div>


                        <div className="page2-boxa">
                          <div className="page2-boxa-a">
                            <div>
                              <div className="box-company">{item.title}</div>
                              <div className="box-time">注册时间：{item.gmtCreate.slice(0, 10)} </div>

                            </div>{
                              item.items.map((item1, index1) => {
                                return (
                                  <div className="page2-boxb" key={index1}>
                                    <div className="page2-boxb-a">{item1.key}</div>
                                    <div className="page2-boxb-b">{item1.value}</div>
                                  </div>
                                )
                              })
                            }

                          </div>
                        </div>
                      </div>
                    </div>
                  )
                } else {
                  return null
                }
              })
            }
            {
              this.state.visible ?
                <Modal
                  title="添加人员"
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                  okText={"确定"}
                  cancelText={"取消"}
                  onClick={this.edit}
                >
                  <div className="page2-input">
                    <span>公司名称：</span>
                    <Input defaultValue={this.state.newitem.title} />

                  </div>
                  <div>
                    {
                      this.state.newMessage && this.state.newMessage.map((item1, index1) => {
                        console.log(this.state.newitem.items)
                        return (
                          <div className="page2-inputa" key={index1}>
                            <span>公司信息：</span>
                            <Input placeholder="实例（法人）" defaultValue={item1.key} onChange={this.handleChange.bind(this)} />
                            <span> - </span>
                            <Input placeholder="实例（某某某）" defaultValue={item1.value} />
                            {
                              index1 > 0 &&
                              <Icon type="close" className="input-close" onClick={() => this.delMessages(index1)} />
                            }
                            <Icon type="plus" className="input-ico" onClick={() => this.addMessages(item1, index1)}
                            />
                          </div>
                        )
                      })
                    }

                  </div>
                </Modal> : null
            }

          </div>
          <Pagination defaultCurrent={1} total={this.state.data.length} pageSize={this.state.pageSize} current={this.state.current} onChange={this.onChange}
            style={{ textAlign: "right" }} />
        </div>
      </div>
    )
  }

}