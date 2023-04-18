import React, { Component } from 'react'
import Turtle from './turtle/Turtle.tsx'
import Shape from './shape.js'
import Points from './points.js'
import Function from './function.js'
// import Steps from './steps.js'
import './display.css'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {sh: 'circle', 
                      pts: 0, 
                      fn: 0, 
                      cu: 0, 
                      points: [], 
                      vertices: [], 
                      sides:[[]],
                      fnop: 'circlefn'};
        this.handlePtChange = this.handlePtChange.bind(this);
        this.handleFnChange = this.handleFnChange.bind(this);
        this.handleShChange = this.handleShChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
    } 

    handlePtChange(points) {
        this.setState({pts: points});
        this.setState({fn: 0});
    }

    handleFnChange(func) {
        this.setState({fn: func});
    }

    handleShChange(shape) {
        this.setState({sh: shape});
        this.setState({cu: shape});
        this.setState({pts: 0});
        this.setState({fn: 0});
    }

    handleOpChange(option) {
        this.setState({fnop: option});
        this.setState({fn: 0});
    }

    render() {
        const sh = this.state.sh;
        const pts = this.state.pts;
        const fn  = this.state.fn;
        let cu = this.state.cu;
        let pointarr = this.state.points;
        let vertices = this.state.vertices;
        let sides = this.state.sides;
        let fnop = this.state.fnop;
        return(
            <div class="displaywrapper">
                <div class="shape">
                    <Shape onShChange={this.handleShChange}/>
                </div>
                <div class="points">
                    <Points onPtChange={this.handlePtChange}/>
                </div>
                <div class="function">
                    <Function onFnChange={this.handleFnChange} onOpChange={this.handleOpChange}/>
                </div>
                {/* <div class="steps">
                    <Steps />
                </div> */}
                <div class="turtle">
                    <Turtle
                        height={window.innerHeight * 2 / 3}
                        draw={(turtle) => {
                            turtle.setcolor('#3a5a40').setlinewidth(2)

                            function drawShape(shape, size) {
                                vertices = []
                                turtle.pu()
                                if (shape === "circle") {
                                    turtle.goto(0,-200)
                                    turtle.pd()
                                    turtle.circle(200)
                                } else if (shape === "square" || parseInt(shape, 10) === 4) {
                                    turtle.goto(-180,180)
                                    turtle.pd()
                                    for (let i = 0; i <= 4; i++) { 
                                            turtle.fd(360)
                                            turtle.lt(90)
                                    }
                                } else if (shape === "cross") {
                                    for (let i = 0; i < 4; i++) {
                                        turtle.goto(0,0)
                                        turtle.pd()
                                        turtle.fd(200)
                                        turtle.rt(90)
                                    }
                                } else {
                                    turtle.seth(11)
                                    for (let i = 0; i < size; i++) {
                                        turtle.goto(0,0)
                                        turtle.fd(200)
                                        vertices.push([turtle.getxpos(), turtle.getypos()])
                                        turtle.rt(360/size)
                                    }
                                    turtle.pd()
                                    for (let i = 0; i < size-1; i++) {
                                        turtle.goto(vertices[i][0], vertices[i][1])
                                        turtle.goto(vertices[i+1][0], vertices[i+1][1])
                                    }
                                    turtle.goto(vertices[0][0], vertices[0][1])
                                }
                                turtle.stroke()
                            }

                            function drawDots(shape, points, size) {
                                pointarr = []
                                sides = [[]]
                                turtle.pu()
                                if (shape === "circle") {
                                    for (let i = 0; i < points; i++) {
                                        turtle.goto(0,0)
                                        turtle.forward(200)
                                        turtle.dot()
                                        pointarr.push([turtle.getxpos(), turtle.getypos()])
                                        turtle.lt(360/pts)
                                    }
                                } else if (shape === "square" || parseInt(shape, 10) === 4) {
                                    turtle.goto(-180,180)
                                    for (let i = 0; i < 4; i++) {
                                        for (let j = 0; j < points/4; j++) {
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                            turtle.fd(360/(points/4))
                                        }
                                        turtle.rt(90)
                                    }
                                } else if (shape === "cross") {
                                    let dist = 200/(points/4)
                                    for (let i = 0; i < 4; i++) {
                                        turtle.goto(0,0)
                                        pointarr = []
                                        for (let j = 0; j < points/4; j++) {
                                            turtle.fd(dist)
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                        }
                                        sides[i] = pointarr
                                        turtle.lt(90)
                                    }
                                } else {
                                    let dist = Math.sqrt(Math.pow(vertices[1][0] - vertices[0][0], 2) 
                                                + Math.pow(vertices[1][1] - vertices[0][1], 2))
                                    let ptsperside = points/size
                                    for (let i = 0; i < size; i++) {
                                        turtle.goto(vertices[i][0], vertices[i][1])
                                        turtle.face(vertices[(i+1) % size][0], vertices[(i+1) % size][1])
                                        for (let j = 0; j < ptsperside; j++) {
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                            turtle.fd(dist/ptsperside)
                                        }
                                    }
                                }
                                turtle.stroke()
                            }

                            function connectPts(shape, option, func, size) {
                                if (shape === "cross") {
                                    for (let i = 0; i < 4; i++) {
                                        for (let j = 0; j < (pts/4); j++) {
                                            let k = (pts/4 - func - j) % (pts/4)
                                            if (k < 0) {
                                                k += parseInt((pts/4), 10)
                                            }
                                            turtle.pd()
                                            turtle.transformColor(c => c.rotate(Math.round(360/pts)))
                                            turtle.goto(sides[i][j][0], sides[i][j][1])
                                            turtle.goto(sides[(i + 1) % 4][k][0], sides[(i + 1) % 4][k][1])
                                            turtle.pu()
                                            turtle.stroke()
                                        }
                                    }
                                } else if (option === "circlefn") {
                                    for (let i = 0; i < pts; i++) {
                                        turtle.pd()
                                        turtle.goto(pointarr[i][0], pointarr[i][1])
                                        let j = (i * func) % pts
                                        turtle.goto(pointarr[j][0], pointarr[j][1])
                                        turtle.pu()
                                        turtle.stroke()
                                    } 
                                } else if (option === "squarefn") {
                                    turtle.pu()
                                    turtle.goto(-200,-200)
                                    let j = (parseInt(func, 10) + (pts/size)) % pts
                                    for (let i = 0; i < pts; i++) {
                                        turtle.pd()
                                        turtle.transformColor(c => c.rotate(Math.round(360/pts)))
                                        turtle.goto(pointarr[i][0], pointarr[i][1])
                                        turtle.goto(pointarr[j][0], pointarr[j][1])
                                        turtle.pu()
                                        turtle.stroke()
                                        j = (j + 1) % pts
                                    }
                                }
                            }
          
                            if (sh === "circle") {
                                cu = 1
                            } else if (sh === "square" || sh === "cross") {
                                cu = 4
                            } 
                            drawShape(sh, cu)
                            if (pts > 0 && pts % cu === 0) {
                                drawDots(sh, pts, cu)
                                if (fn > 0) {
                                    connectPts(sh, fnop, fn, cu)
                                }
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