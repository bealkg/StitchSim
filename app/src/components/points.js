import React, { Component } from "react";

class Points extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onPtChange(event.target.value);
    }

    render() {
        const inputpts = this.props.pts;
        return (
            <div class="ptcontainer" onChange={this.onChangeValue}>
                <p>Select the amount of points around the perimeter of the shape.</p>
                    <input name="points" type="text" 
                        value={inputpts}
                        onChange={this.handleChange}/> points
            </div>
        );
    }
}

export default Points;