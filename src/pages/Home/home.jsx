import React from 'react';
import './home.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    height: "500px"

                }}>
                <div className="home">
                    <img src={require('../../static/images/zol2x.png')} alt=""></img>
                    <span>职卓后台管理系统</span>
                </div>
            </div>
        )
    }

}