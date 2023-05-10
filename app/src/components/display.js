import React, { Component } from 'react'
import Turtle from './turtle/Turtle.tsx'
import Shape from './shape.js'
import Points from './points.js'
import Function from './function.js'
import './display.css'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {pts: 0, fn: 0, 
                      cu: 1, points: [], vertices: [], 
                      sides:[[]], fnop: "circlefn", shop: "edges"};
        this.handlePtChange = this.handlePtChange.bind(this);
        this.handleFnChange = this.handleFnChange.bind(this);
        this.handleShChange = this.handleShChange.bind(this);
        this.handleCuChange = this.handleCuChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
    } 

    handlePtChange(points) {
        if (points * this.state.cu < 201) {
            this.setState({pts: points});
        } else {
            let pts = document.getElementById("points-input");
            pts.value = "0";
            this.setState({pts: 0})
        }
    }

    handleFnChange(func) {
        this.setState({fn: func});
    }

    handleShChange(shape) {
        this.setState({shop: shape});
        this.setState({fn: 0});
        this.setState({pts: 0});
        this.setState({cu: 1});
    }

    handleCuChange(custom) {
        if (custom < 3) {
            custom = 1;
        }
        if (this.state.pts * this.state.cu > 200) {
            let pts = document.getElementById("points-input");
            pts.value = "0";
            this.setState({pts: 0})
        }
        this.setState({cu: custom});
        this.setState({fn: 0});
    }

    handleOpChange(option) {
        this.setState({fnop: option});
        this.setState({fn: 0});
    }

    render() {
        const pts = this.state.pts;
        const fn  = this.state.fn;
        let cu = this.state.cu;
        let pointarr = this.state.points;
        let vertices = this.state.vertices;
        let sides = this.state.sides;
        let fnop = this.state.fnop;
        const shop = this.state.shop;

        return(
            <div class="displaywrapper">
                <div class="inputwrapper">
                <div class="shape">
                    <Shape onShChange={this.handleShChange} onCuChange={this.handleCuChange}/>
                </div>
                <div class="points">
                    <Points onPtChange={this.handlePtChange}/>
                </div>
                <div class="function">
                    <Function onFnChange={this.handleFnChange} onOpChange={this.handleOpChange}/>
                </div>
                </div>
                <div class="turtle">
                    <Turtle
                        height={450}
                        draw={(turtle) => {
                            turtle.setcolor('#3a5a40').setlinewidth(2)

                            function drawShape(shape, size) {
                                vertices = []
                                turtle.pu()
                                if (parseInt(size, 10) < 3) {
                                    turtle.goto(0,-200)
                                    turtle.pd()
                                    turtle.circle(200)
                                } else if (shape === "spokes") {
                                    for (let i = 0; i < size; i++) {
                                        turtle.goto(0,0)
                                        turtle.pd()
                                        turtle.fd(200)
                                        turtle.rt(360/size)
                                    }
                                } else if (shape === "edges" && parseInt(size, 10) === 4) {
                                    turtle.goto(-180,180)
                                    turtle.pd()
                                    for (let i = 0; i <= 4; i++) { 
                                            turtle.fd(360)
                                            turtle.lt(90)
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
                                if (parseInt(size, 10) < 3) {
                                    for (let i = 0; i < points; i++) {
                                        turtle.goto(0,0)
                                        turtle.forward(200)
                                        turtle.dot()
                                        pointarr.push([turtle.getxpos(), turtle.getypos()])
                                        turtle.lt(360/pts)
                                    }
                                } else if (shape === "edges" && parseInt(size, 10) === 4) {
                                    turtle.goto(-180,180)
                                    for (let i = 0; i < 4; i++) {
                                        for (let j = 0; j < points; j++) {
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                            turtle.fd(360/(points))
                                        }
                                        turtle.rt(90)
                                    }
                                } else if (shape === "spokes") {
                                    let dist = 200/(points)
                                    for (let i = 0; i < size; i++) {
                                        turtle.goto(0,0)
                                        pointarr = []
                                        for (let j = 0; j < points; j++) {
                                            turtle.fd(dist)
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                        }
                                        sides[i] = pointarr
                                        turtle.lt(360/size)
                                    }
                                } else {
                                    let dist = Math.sqrt(Math.pow(vertices[1][0] - vertices[0][0], 2) 
                                                + Math.pow(vertices[1][1] - vertices[0][1], 2))
                                    for (let i = 0; i < size; i++) {
                                        turtle.goto(vertices[i][0], vertices[i][1])
                                        turtle.face(vertices[(i+1) % size][0], vertices[(i+1) % size][1])
                                        for (let j = 0; j < points; j++) {
                                            turtle.dot()
                                            pointarr.push([turtle.getxpos(), turtle.getypos()])
                                            turtle.fd(dist/points)
                                        }
                                    }
                                }
                                turtle.stroke()
                            }

                            function connectPts(shape, option, func, size, points) {
                                if (size < 3) {
                                    size = 1
                                    shape = "edges"
                                }
                                if (shape === "spokes") {
                                    for (let i = 0; i < size; i++) {
                                        for (let j = 0; j < points; j++) {
                                            let k = (points - func - j) % (points)
                                            if (k < 0) {
                                                k += parseInt(points, 10)
                                            }
                                            turtle.pd()
                                            turtle.goto(sides[i][j][0], sides[i][j][1])
                                            turtle.goto(sides[(i + 1) % size][k][0], sides[(i + 1) % size][k][1])
                                            turtle.pu()
                                            turtle.stroke()
                                        }
                                    }
                                } else if (option === "circlefn") {
                                        for (let j = 0; j < (points * size); j++) {
                                            turtle.pd()
                                            turtle.goto(pointarr[j][0], pointarr[j][1])
                                            let k = (j * func) % (points * size)
                                            turtle.goto(pointarr[k][0], pointarr[k][1])
                                            turtle.pu()
                                            turtle.stroke()
                                        } 
                                } else if (option === "squarefn") {
                                    turtle.pu()
                                    turtle.goto(-200,-200)
                                    let j = (parseInt(func, 10) + parseInt(points, 10)) % (pts * size)
                                    for (let i = 0; i < (points * size); i++) {
                                        turtle.pd()
                                        turtle.goto(pointarr[i][0], pointarr[i][1])
                                        turtle.goto(pointarr[j][0], pointarr[j][1])
                                        turtle.pu()
                                        turtle.stroke()
                                        j = (j + 1) % (points * size)
                                    }
                                }
                            }
                            drawShape(shop, cu)
                            drawDots(shop, pts, cu)
                            if (fn > 0) {
                                connectPts(shop, fnop, fn, cu, pts)
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Display;
