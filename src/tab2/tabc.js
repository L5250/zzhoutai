import React from 'react';

export default class TabC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newIndex: 0
        }
    }

    handleClick(index) {
        this.setState({ newIndex: index })
    }



    render() {
        const boxData = ['a', 'b', 'c', 3];
        const headData = [1, 2, 3, 4, 5, 6];



        return (
            <div className="main">
                <div>{
                    headData.map((item, index) => {
                        return (
                            <div className={this.state.newIndex === index ? "active head" : "head"}
                                onClick={() => { this.handleClick(index) }}>
                                {item}
                            </div>
                        )
                    })
                }

                </div>
                <div>{
                    boxData.map((item, index) => {
                        return (
                            <div className={this.state.newIndex === index ? "box show" : "box"}
                                onClick={() => { this.handleClcik(index) }}>
                                {item}
                            </div>
                        )
                    })
                }

                </div>
            </div>
        )

        // return (
        //     <div className="main">
        //         <div>
        //             {
        //                 box.map((item, index) => {
        //                     return (
        //                         <div className = {}>
        //                         {item}
        //                         </div>
        //                     )
        //                 })



        //         <div>
        //             <div className={this.state.newIndex === 0 ? "head active" : "head"}
        //                 onClick={() => { this.handleClick(0) }}>1

        //         </div>
        //             <div className={this.state.newIndex === 1 ? "head active" : "head"}
        //                 onClick={() => { this.handleClick(1) }}>2

        //         </div>
        //             <div className={this.state.newIndex === 2 ? "head active" : "head"}
        //                 onClick={() => { this.handleClick(2) }}>3

        //         </div>
        //         </div>

        //         <div>
        //             <div className="">
        //                 <div className={this.state.newIndex === 0 ? "box show" : "box"}
        //                     onClick={() => this.handleClick(0)}
        //                 >a
        //         </div>
        //                 <div className={this.state.newIndex === 1 ? "box show" : "box"}
        //                     onClick={() => this.handleClick(1)}
        //                 >b
        //         </div>
        //                 <div className={this.state.newIndex === 2 ? "box show" : "box"}
        //                     onClick={() => this.handleClick(2)}
        //                 >c
        //         </div>

        //             </div>
        //         </div>

        //     </div>
        // )



    }
}
