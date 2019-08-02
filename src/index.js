// 后台系统index
import React from 'react';
import ReactDOM from 'react-dom';
// import Apptext from './components/Apptext.jsx'
import App from './components/App';
import Login from './pages/Login/login.jsx'
import 'antd/dist/antd.css';
import {Provider} from 'react-redux'
import store from './redux/index'
// import { Cookie } from './util/Cookie';
// Cookie.getCookie(document.cookie)

ReactDOM.render(
    <Provider store={store}>
        <div style={{ height: "100%" }}>
        {
            document.cookie ? <App /> : <Login />
        }
    </div>
    </Provider>
    
    , document.getElementById('root'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './store/index';
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './store/redecer'
// //创建store
// const store = createStore(reducer);
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, 
//     document.getElementById('root'));

