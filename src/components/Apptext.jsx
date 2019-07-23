import React from 'react';
import App from './App';
import Login from '../pages/Login/login'

export default class Apptext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                {
                    document.cookie ? <App/>:<Login/>
                }
            </div>
        )
    }

}