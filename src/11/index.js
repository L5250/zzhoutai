import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import BaseLayout from './router'
import Head from './head';
import Foot from './foot'


ReactDOM.render(
    <div>
    <Head/>
    <BaseLayout/>
    <Foot/>
    </div>,
    document.getElementById('root')
);