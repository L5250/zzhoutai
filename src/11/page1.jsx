import React from 'react';

export default class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div onClick ={()=>{
                window.location.href='/#/2'
            }}>
                2
            </div>
        )
    }
}