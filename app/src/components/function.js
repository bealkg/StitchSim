import React, { Component } from "react";

class Function extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
        this.state = {circlefn: false, squarefn: true};
    } 

    handleChange(event) {
        this.props.onFnChange(event.target.value);
    }

    handleOpChange(event) {
        this.props.onOpChange(event.target.value);
        if (event.target.value === "circlefn") {
            this.setState({circlefn: false});
            this.setState({squarefn: true});
        } else if (event.target.value === "squarefn") {
            this.setState({circlefn: true});
            this.setState({squarefn: false});
        }
    }

    render() {
        const inputfn = this.props.fn
        return (
            <div class="fncontainer">
                <h2>Function</h2>
                <table align="center">
                    <tr align="left">
                        <label for="circlefn">
                            <input type="radio" value="circlefn" 
                                   name="func" id="circlefn" 
                                   onChange={this.handleOpChange} defaultChecked/> &nbsp;
                            <input name="function" type="number" id="circlefn"
                                   min="0" step="1" value={inputfn}
                                   disabled={this.state.circlefn}
                                   onChange={this.handleChange}/> &times; n % points
                        </label>
                    </tr><tr align="left">
                        <label for="squarefn">
                            <input type="radio" value="squarefn" 
                                   name="func" id="squarefn" 
                                   onChange={this.handleOpChange}/> &nbsp;
                            <input name="function" type="number" id="squarefn"
                                   min="0" step="1" value={inputfn}
                                   disabled={this.state.squarefn}
                                   onChange={this.handleChange}/> + n % points
                        </label>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Function;