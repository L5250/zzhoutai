import React from 'react';

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div clssName="a">
                1
                <a className="aa" href = "#/1">21</a>
            </div>
        )
    }
}