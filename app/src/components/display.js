import React, { Component } from "react";
import Turtle from './turtle/Turtle.tsx'
let points = [];

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
                    style={{
                        height: 400,
                        width: 400,
                    }}
                    height={400}
                    width={400}
                    draw={(turtle) => {
                        turtle.setlinewidth(1)
                        drawCircle(72)
                        connectPoints(2)

                        function drawCircle(x) {
                            turtle.jump(0,-180)
                            turtle.circle(180, 0, 0)
                            for (let i = 0; i < x; ++i) {
                                turtle.jump(0,0)
                                turtle.fd(180)
                                turtle.dot()
                                points.push([turtle.getxpos(), turtle.getypos()])
                                turtle.lt(360/x)
                            }
                            turtle.stroke()
                            return
                        }

                        function connectPoints(y) {
                            for (let i = 0; i < points.length; ++i) {
                                turtle.pd()
                                turtle.goto(points[i][0], points[i][1])
                                let j = (i*y) % points.length 
                                turtle.goto(points[j][0], points[j][1])
                                turtle.stroke()
                                turtle.pu()
                            } 
                            return
                        }
                    }}
		        />
            </div>
        )
    }
}

export default Display;