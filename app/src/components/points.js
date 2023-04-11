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
                <h2>Points</h2>
                <input name="points" type="number" 
                    min="0"
                    step="1"
                    max="360"
                    value={inputpts}
                    onChange={this.handleChange}/> points
            </div>
        );
    }
}

export default Points;