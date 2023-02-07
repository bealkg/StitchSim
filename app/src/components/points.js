import React, { Component } from "react";

class Points extends Component {
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
                <p>Select degrees to chose the radial distance between two given points. Select 
                    points to chose the amount of points around the perimeter of the shape.</p>
                    <input name="degrees" type="text"/> degrees
                    <input name="points" type="text"/> points
            </div>
            /*
                - input types are either or / whenever one is selected the other should clear out data
                - degrees can accept decimals, points cannot
                - need formatting for bad input
            */
        );
    }
}

export default Points;