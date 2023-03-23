import React, { Component } from "react";

class Shape extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onShChange(event.target.value);
    }

    render() {
        return (
        <div class="container" onChange={this.handleChange}>
            <p>Select the shape you would like to use.</p>
            <table align="center">
                <tr align="left"> 
                    <td><label for="circle">
                        <input type="radio" value="circle" name="shape" id="circle" defaultChecked/> Circle 
                    </label></td>
                    <td><label for="square">
                        <input type="radio" value="square" name="shape" id="square"/> Square
                    </label></td>
                </tr><tr align="left">
                    <td><label for="cross">
                        <input type="radio" value="cross" name="shape" id="cross"/> Cross 
                    </label></td>
                    <td><label for="triangle">
                        <input type="radio" value="triangle" name="shape" id="triangle"/> Triangle
                    </label></td>
                </tr><tr align="left">
                    <td><label for="pentagon">
                        <input type="radio" value="pentagon" name="shape" id="pentagon"/> Pentagon 
                    </label></td>
                    <td><label for="custom">
                        <input type="radio" value="custom" name="shape" id="custom"/> Custom
                    </label></td>                    
                </tr>
            </table>
        </div>
        );
    }
}

export default Shape;