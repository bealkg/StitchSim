import React, { Component } from "react";

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
            </div>
        );
    }
}

export default Display;