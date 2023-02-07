import React, { Component } from "react";

class Function extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    } 
    onChangeValue(event) {
        console.log(event.target.value);
    }
    render() {
        return (
            <div class="container" onChange={this.onChangeValue}>
                <p>The number you input will represent the relationship
                    between any two given points. For example, if you input
                    2 as the function, each point n will be connected to 
                    point 2n. 
                </p>
                <input name="function" type="text"/>n % pointTotal
            </div>
        );
    }
}

export default Function;