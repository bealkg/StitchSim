import React, { Component } from "react";
import Turtle from './turtle/Turtle.tsx'
let points = [];
let x = 147;
let y = 3;

class Display extends Component {
    constructor() {
        super();
        this.state = {
        name: "React"
        };
    } 
    
    render() {
        return(
            <div class="turtle">
                <Turtle
                    height={window.innerHeight * 2 / 3}
                    // width={window.innerWidth / 3}
                    draw={(turtle) => {
                        turtle.jump(0, -180)
                        turtle.dot()
                        turtle.circle(180)
                        for (let i = 0; i < x; i++) {
                            turtle.jump(0,0)
                            turtle.fd(180)
                            turtle.dot()
                            points.push([turtle.getxpos(), turtle.getypos()])
                            turtle.lt(360/x)
                        }
                        turtle.stroke()
                        turtle.setlinewidth(1)
                        return function walk(i) {
                            turtle.pd()
                            turtle.goto(points[i][0], points[i][1])
                            let j = i * y % x
                            turtle.goto(points[j][0], points[j][1])
                            turtle.pu()
                            turtle.stroke()
                            return i < x;
                        };           
                    }}
		        />
            </div>
        )
    }
}

export default Display;