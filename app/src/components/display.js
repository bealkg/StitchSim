import React, { Component } from "react";
import Turtle from './turtle/Turtle.tsx'
import Points from './points.js'

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {pts: ''};
        this.handlePtChange = this.handlePtChange.bind(this);
        // this.shape = shape;
        // this.pts = Points.state.inputpts;
        this.func = 0;
        this.points = [];
    } 

    handlePtChange(points) {
        this.setState({pts: points});
    }
    
    render() {
        const pts = this.state.pts;
        return(
            <div class="turtle">
                <Points onPtChange={this.handlePtChange}/>
                <Turtle
                    height={window.innerHeight * 2 / 3}
                    draw={(turtle) => {
                        turtle.jump(0, -180)
                        // turtle.dot()
                        turtle.circle(180)
                        for (let i = 0; i < pts; i++) {
                            turtle.jump(0,0)
                            turtle.fd(180)
                            turtle.dot()
                            this.points.push([turtle.getxpos(), turtle.getypos()])
                            turtle.lt(360/pts)
                        }
                        if (pts > 0) {
                            turtle.jump(180,0)
                            turtle.dot()
                        }
                        turtle.stroke()
                        turtle.setlinewidth(1)
                        // for (let i = 0; i < pts; i++) {
                        //     turtle.pd()
                        //     turtle.goto(this.points[i][0], this.points[i][1])
                        //     let j = i * this.func % pts
                        //     turtle.goto(this.points[j][0], this.points[j][1])
                        //     turtle.pu()
                        //     turtle.stroke()
                        // }
                        // return function walk(i) {
                        //     turtle.pd()
                        //     turtle.goto(this.points[i][0], this.points[i][1])
                        //     let j = i * this.func % this.pts
                        //     turtle.goto(this.points[j][0], this.points[j][1])
                        //     turtle.pu()
                        //     turtle.stroke()
                        //     return i < this.pts;
                        // };           
                    }}
		        />
            </div>
        )
    }
}

export default Display;
