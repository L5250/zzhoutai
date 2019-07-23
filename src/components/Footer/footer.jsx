import React from 'react';
import {Icon} from 'antd'

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="footer">
                <span>Copyright </span>
                <Icon type="copyright" />
                <span>职卓 2018</span>
            </div>
        )
    }
}