import React from 'react';
import ReactDOM from 'react-dom';
import './tabc.css';
import TabC from './tabc';

class Tab extends React.Component {
    render() {
        return (
            <TabC/>
        )
    }
}

ReactDOM.render(<Tab />, document.getElementById('root'));
