import React, { Component } from "react";
import Turtle from "react-turtle";

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
                <Turtle
                    draw={(turtle) => {
                        turtle
                            .rt()
                            .fd(32)
                            .lt(45)
                            .fd(32)
                            .stroke()
                        }}
                />
            </div>
        );
    }
}

export default Display;