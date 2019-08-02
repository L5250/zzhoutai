import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './groups.scss'

export default class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: ["happy", "good", "love", "peace", "respect", "breaking", "popping", "hip-hop", "urben", "locking"]
        }
    }

    componentDidMount() {
        this.text()
        this.text1()
        this.text2()
        this.text3()
        // this.text4()
    }
    //ES6语法

    //解构赋值
    text = () => {
        let [a, b, c, d] = [1, 2, 3]
        console.log(a, b, c, d);
        console.log(a + c)
        console.log(a + d);
    }
    //对象拓展运算符（...运算符)
    text1 = () => {
        let arr = ["a","b","c"]
        let arr1 = [...arr]
        console.log(arr1)
        arr1.push("x")
        console.log(arr)
        console.log(arr1);
        
    }
//合并对象Object.assign
text2=()=>{
    let a ={a:2}
    let b={c:23}
    let c={dd:"ff"}
    let d = Object.assign(a,b,c)
    console.log(d);
    
}


//promise

text3=()=>{
    
}


    render() {
        return (
            <div>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    in={this.state.show} // 如果this.state.show从false变为true，则动画入场，反之out出场
                                    timeout={1000} //动画执行1秒
                                    classNames='fade' //自定义的class名
                                    // unMountOnExit //可选，当动画出场后在页面上移除包裹的dom节点
                                    onEntered={(el) => {
                                        el.style.color = 'blue'   //可选，动画入场之后的回调，el指被包裹的dom，让div内的字体颜色等于蓝色
                                    }}
                                // onExited={() => {
                                //     xxxxx   //同理，动画出场之后的回调，也可以在这里来个setState啥的操作
                                // }}

                                >
                                    <div style={{ fontSize: "20px", textAlign: "center" }}> {item} </div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>

                <button onClick={this.handleAddItem}>toggle</button>
            </div>
        )
    }

    handleToggole = () => {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handleAddItem = () => {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
