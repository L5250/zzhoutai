import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from '../pages/Home/home';
import Page1 from '../pages/page1/page1.jsx';
import Page2 from '../pages/page2/page2.jsx';
import Routers from '../pages/page3/3router.jsx';
import Page4 from '../pages/page4/page4.jsx';
import Page5 from '../pages/page5/page5.jsx';
import Page6 from '../pages/page6/page6.jsx';
import Login from '../pages/Login/login.jsx';
import Video from '../pages/video/video.jsx';
import Echarts from '../pages/Echarts/echarts.jsx';


export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <Route path='/' exact component={Home}></Route>
                <Route path='/1' component={Page1}></Route>
                <Route path='/2' component={Page2}></Route>
                <Route path='/ff' component={Routers}></Route>
                <Route path='/ww' component={Page4}></Route>
                <Route path = '/zz' component={Page5}></Route>
                <Route path = '/18' component={Page6}></Route>
                <Route path = '/login' component={Login}></Route>
                <Route path ='/video' component={Video}></Route>
                <Route path ='/echarts' component={Echarts}></Route>




            </HashRouter>
        )
    }

}