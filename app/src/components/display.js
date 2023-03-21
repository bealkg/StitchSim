import React, { Component } from "react";
import Turtle from './turtle/Turtle.tsx'
import Shape from './shape.js'
import Points from './points.js'
import Function from './function.js'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {pts: '', fn: ''};
        this.handlePtChange = this.handlePtChange.bind(this);
        this.handleFnChange = this.handleFnChange.bind(this);
        this.points = [];
    } 

    handlePtChange(points) {
        this.setState({pts: points});
    }

    handleFnChange(func) {
        this.setState({fn: func});
    }
    
    render() {
        const pts = this.state.pts;
        // const fn  = this.state.fn;
        return(
            <div class="displaywrapper">
                <div class="shape">
                    <Shape />
                </div>
                <div class="points">
                    <Points onPtChange={this.handlePtChange}/>
                </div>
                <div class="function">
                    <Function onFnChange={this.handleFnChange}/>
                </div>
                <div class="turtle">
                    <Turtle
                        height={window.innerHeight * 2 / 3}
                        draw={(turtle) => {
                            // turtle.setlinewidth(2)
                            function drawCircle() {
                                turtle
                                    .pu()
                                    .goto(0,-180)
                                    .pd()
                                    .circle(180)
                                    .stroke()
                                return
                            }

                            function drawCircleDots(i) {
                                turtle
                                    .pu()
                                    .goto(0,0)
                                    .forward(180)
                                    .dot()
                                    .lt(360/pts)
                                    .stroke()
            
                                return i < pts
                            }

                            drawCircle(1)
                            this.points = []
                            drawCircleDots(pts)

                            // this.points = []
                            // turtle.jump(0, -180)
                            // turtle.circle(180)
                            // turtle.jump(-180,180)
                            // for (let i = 0; i <= 4; i++) {
                            //     turtle.fd(360)
                            //     turtle.lt(90)
                            // }
                            // if (pts % 4 === 0) {
                            //     for (let i = 0; i < 4; i++) {
                            //         for (let j = 0; j < pts/4; j++) {
                            //             turtle.dot()
                            //             this.points.push([turtle.getxpos(), turtle.getypos()])
                            //             turtle.fd(360/(pts/4))
                            //         }
                            //         turtle.lt(90)
                            //     }
                            // }
                            // for (let i = 0; i < pts; i++) {
                            //     turtle.jump(0,0)
                            //     turtle.fd(180)
                            //     turtle.dot()
                            //     this.points.push([turtle.getxpos(), turtle.getypos()])
                            //     turtle.lt(360/pts)
                            // }
                            // if (pts > 0) {
                            //     turtle.jump(180,0)
                            //     turtle.dot()
                            // }
                            // turtle.stroke()
                            // turtle.setlinewidth(1)
                            // if (fn > 0) {
                            //     for (let i = 0; i < pts; i++) {
                            //         turtle.pd()
                            //         turtle.goto(this.points[i][0], this.points[i][1])
                            //         let j = i * fn % pts
                            //         turtle.goto(this.points[j][0], this.points[j][1])
                            //         turtle.pu()
                            //         turtle.stroke()
                            //     }
                            // }          
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Display;


// will use later for animating
// return function walk(i) {
//     turtle.pd()
//     turtle.goto(this.points[i][0], this.points[i][1])
//     let j = i * this.func % this.pts
//     turtle.goto(this.points[j][0], this.points[j][1])
//     turtle.pu()
//     turtle.stroke()
//     return i < this.pts;
// }; 