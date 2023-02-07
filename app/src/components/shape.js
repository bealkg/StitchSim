import React, { Component } from "react";

class Shape extends Component {
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
            <p>Select the shape you would like to use.</p>
            <table align="center">
                <tr> 
                    <label for="circle">
                        <input type="radio" value="circle" name="shape" id="circle" defaultChecked/> Circle
                    </label>
                    <label for="square">
                        <input type="radio" value="square" name="shape" id="square"/> Square
                    </label>
                </tr><tr>
                    <label for="cross">
                        <input type="radio" value="cross" name="shape" id="cross"/> Cross
                    </label>
                    <label for="triangle">
                        <input type="radio" value="triangle" name="shape" id="triangle"/> Triangle
                    </label>
                </tr><tr>
                    <label for="pentagon">
                        <input type="radio" value="pentagon" name="shape" id="pentagon"/> Pentagon
                    </label>
                    <label for="custom">
                        <input type="radio" value="custom" name="shape" id="custom"/> Custom
                    </label>                    
                </tr>
            </table>
        </div>
        );
    }
}

export default Shape;