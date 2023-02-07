import React, { Component } from "react";

class Toggles extends Component {
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
                <label for="list">
                    <input name="list" type="checkbox"/> Display List
                </label>
                <label for="numbers">
                    <input name="numbers" type="checkbox"/> Show Point Numbers
                </label>
            </div>
        );
    }
}

export default Toggles;