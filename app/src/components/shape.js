import React, { Component } from "react";

class Shape extends Component {
    constructor(props) {
        super(props);
        this.handleShChange = this.handleShChange.bind(this);
        this.state = {customop: true};
    }

    handleShChange(event) {
        if (event.target.value === "circle" || event.target.value === "square" ||
            event.target.value === "cross" || event.target.value === "triangle" ||
            event.target.value === "pentagon") {
            this.setState({customop: true});
            this.props.onShChange(event.target.value);
        } else {
            this.setState({customop: false});
            if (event.target.value > 2) {
                this.props.onShChange(event.target.value);
            }
        }
    }

    render() {
        const inputcustom = this.props.cu
        return (
        <div class="container" onChange={this.handleShChange}>
            <h2>Shape</h2>
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
                    <td><label for="custom">
                        <input type="radio" value="custom" name="shape" id="custom"/> Custom &nbsp;
                        <input type="number" name="shape"
                               min="3" step="1"
                               value={inputcustom} disabled={this.state.customop}
                               onChange={this.handleShChange}/>
                    </label></td>
                </tr>
            </table>
        </div>
        );
    }
}

export default Shape;