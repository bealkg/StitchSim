import React, { Component } from "react";

class Function extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(event) {
        this.props.onFnChange(event.target.value);
    }

    render() {
        const inputfn = this.props.fn
        return (
            <div class="fncontainer">
                <p>The number you input will represent the relationship
                    between any two given points. For example, if you input
                    2 as the function, each point n will be connected to 
                    point 2n. 
                </p>
                <input name="function" type="text"
                    value={inputfn}
                    onChange={this.handleChange}/> n % pointTotal
            </div>
        );
    }
}

export default Function;