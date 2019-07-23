import React from 'react';
import { Table, Switch ,Button} from 'antd';
import { get } from '../../../util/axios';



const { Column } = Table;

export default class News1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        get('/zol-cms/official/page', { pageSize: 20 }, { pageNo: 1 }, { location: '' }, { shows: true }).then(res => {
            console.log(res)
            // this.setState({data:res.data.result})
        })
    }

    switchChange=()=>{
        console.log(`switch to {$checked}`)
    }


    render() {
        return (
            <div>
                <Table dataSource={this.state.data}>
                    <Column title="标题" dataIndex="firstName" key="firstName" />
                    <Column title="是否展示" dataIndex="firstName" key="firstName" 
                        render={(text,record)=>(
                            <Switch defaultChecked onChange={this.switchChange} />
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record) => (
                            <div>
                                <Button>编辑</Button>
                                <Button>置顶</Button>
                                <Button>置底</Button>
                                <Button>上移</Button>
                                <Button>下移</Button>
                                <Button>删除</Button>
                            </div>
                        )}
                    />
                </Table>
            </div>
        )
    }
}