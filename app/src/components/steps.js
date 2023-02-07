import React, { Component } from "react";

class Steps extends Component {
    constructor() {
        super();
        this.state = {
        name: "React"
        };
    }
    render() {
        return ( 
        <div class="container">
            <p>List of steps.</p>
        </div>
        );
    }
}

export default Steps;