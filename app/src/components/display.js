import React, { Component } from "react";
import Turtle from './turtle/Turtle.tsx'
import Shape from './shape.js'
import Points from './points.js'
import Function from './function.js'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {sh: 'circle', pts: '', fn: '', cu: '6', points: [], vertices: []};
        this.handleShChange = this.handleShChange.bind(this);
        this.handlePtChange = this.handlePtChange.bind(this);
        this.handleFnChange = this.handleFnChange.bind(this);
        this.handleCuChange = this.handleCuChange.bind(this);
    } 
    
    handleShChange(shape) {
        this.setState({sh: shape});
    } 

    handlePtChange(points) {
        this.setState({pts: points});
    }

    handleFnChange(func) {
        this.setState({fn: func});
    }

    handleCuChange(custom) {
        this.setState({cu: custom});
    }

    render() {
        const sh = this.state.sh;
        const pts = this.state.pts;
        const fn  = this.state.fn;
        const cu = this.state.cu;
        let pointarr = this.state.points;
        let vertices = this.state.vertices;
        return(
            <div class="displaywrapper">
                <div class="shape">
                    <Shape onShChange={this.handleShChange}/>
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
                            function drawCircle() {
                                turtle
                                    .pu()
                                    .goto(0,-180)
                                    .pd()
                                    .circle(180)
                                    .stroke()
                            }

                            function drawSquare() {
                                turtle.pu()
                                turtle.goto(-180,180)
                                turtle.pd()
                                for (let i = 0; i <= 4; i++) {
                                    turtle 
                                        .fd(360)
                                        .lt(90)
                                        .stroke()
                                }
                            }

                            function drawCross() {
                                for (let i = 0; i < 4; i++) {
                                    turtle.goto(0,0)
                                    turtle.fd(180)
                                    turtle.rt(90)
                                }
                                turtle.stroke()
                            }

                            function drawShape(x) {
                                turtle.pu()
                                turtle.seth(11)
                                for (let i = 0; i < x; i++) {
                                    turtle.goto(0,0)
                                    turtle.fd(180)
                                    vertices.push([turtle.getxpos(), turtle.getypos()])
                                    turtle.rt(360/x)
                                }
                                turtle.pd()
                                for (let i = 0; i < x-1; i++) {
                                    turtle.goto(vertices[i][0], vertices[i][1])
                                    turtle.goto(vertices[i+1][0], vertices[i+1][1])
                                    turtle.stroke()
                                }
                                turtle.goto(vertices[0][0], vertices[0][1])
                                turtle.stroke()
                            }

                            function drawCircleDots(points) {
                                for (let i = 0; i < points; i++) {
                                        turtle.pu()
                                        turtle.goto(0,0)
                                        turtle.forward(180)
                                        turtle.dot()
                                        pointarr.push([turtle.getxpos(), turtle.getypos()])
                                        turtle.lt(360/pts)
                                        turtle.stroke()
                                }
                                return 
                            }

                            // function drawShapeDots(points) {

                            // }

                            function drawSquareDots(points) {
                                if (points % 4 === 0) {
                                    turtle.pu()
                                    turtle.goto(-180,180)
                                    for (let i = 0; i < 4; i++) {
                                        for (let j = 0; j < points/4; j++) {
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                            turtle.fd(360/(points/4))
                                        }
                                        turtle.rt(90)
                                        turtle.stroke()
                                    }
                                }
                            }

                            function connectCircPts(func) {
                                for (let i = 0; i < pts; i++) {
                                    turtle.pd()
                                    turtle.goto(pointarr[i][0], pointarr[i][1])
                                    let j = (i * func) % pts
                                    turtle.goto(pointarr[j][0], pointarr[j][1])
                                    turtle.pu()
                                    turtle.stroke()
                                } 
                            }

                            // function connectSqPts(func) {
                            //     for (let i = 0; i < pts; i++) {
                            //         turtle.pd()
                            //         turtle.goto(pointarr[i][0], pointarr[i][1])
                            //         let j = (i + func + (pts/4)) % pts
                            //         turtle.goto(pointarr[j][0], pointarr[j][1])
                            //         turtle.pu()
                            //         turtle.stroke()
                            //     }
                            // }

                            if (sh === "circle") {
                                drawCircle(1)
                                pointarr = []
                                if (pts > 0) {
                                    drawCircleDots(pts)
                                    if (fn > 0) {
                                        connectCircPts(fn)
                                    }
                                }
                            } else if (sh === "square") {
                                drawSquare(1)
                                pointarr = []
                                if (pts > 0) {
                                    drawSquareDots(pts)
                                    if (fn > 0) {
                                        connectCircPts(fn)
                                    }
                                }
                            } else if (sh === "cross") {
                                drawCross(1)
                            } else if (sh === "triangle") {
                                vertices = []
                                drawShape(3)
                            } else if (sh === "pentagon") {
                                vertices = []
                                drawShape(5)
                            } else if (sh === "custom") {
                                vertices = []
                                drawShape(cu)
                            }
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