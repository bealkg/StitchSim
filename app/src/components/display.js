import React, { Component } from "react";
// import Turtle from "react-turtle";
// import Turt from "./turt.py"

class Display extends Component {
    constructor() {
        super();
        this.state = {
        name: "React"
        };
    } 
    render() {
        return (
            <div class="turtle" onChange={this.onChangeValue}>
                {/* <Turtle
                    animated={true}
                    pixelated={true}
                    draw={turtle => {
                        turtle.setcolor('#588157').setlinewidth(2)
                        return function walk() {
                        turtle
                        .clear()
                        .penup()
                        .goto(0,-150)
                        .pendown()
                        .circle(150)
                        .dot()
                        .penup()
                        .stroke()
                    };
                    }}
                /> */}
                <iframe 
                    title="screen"
                    src="https://trinket.io/embed/python/8f51c9b84a?outputOnly=true&runOption=run&start=result" 
                    width="60%" 
                    height="100%" 
                    frameborder="0" 
                    marginwidth="0" 
                    marginheight="0">
                </iframe>

                {/* <iframe src="https://trinket.io/embed/python/8f51c9b84a?outputOnly=true&runOption=run&start=result" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe> */}

            </div>
        );
    }
}

export default Display;