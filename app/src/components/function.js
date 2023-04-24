import React, { Component } from "react";
import { Radio, FormControl, Typography,
         TextField, Zoom, RadioGroup, 
         FormControlLabel } from '@mui/material/'

class Function extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOpChange = this.handleOpChange.bind(this);
        this.state = {circlefn: true, squarefn: false};
    } 

    handleChange(event) {
        this.props.onFnChange(event.target.value);
    }

    handleOpChange(event) {
        this.props.onOpChange(event.target.value);
        if (event.target.value === "circlefn") {
            this.setState({circlefn: true});
            this.setState({squarefn: false});
            let fun = document.getElementById("squarefn");
            fun.value = '0';
        } else if (event.target.value === "squarefn") {
            this.setState({circlefn: false});
            this.setState({squarefn: true});
            let fun = document.getElementById("circlefn");
            fun.value = '0';
        }
    }

    render() {
        const inputfn = this.props.fn
        return (
        <div class="fncontainer" style={{display:'flex', paddingLeft:'10px'}}>
            <FormControl>
                <Typography variant="h2">Function</Typography>
                <RadioGroup defaultValue="circlefn" name="fn-radio-group"
                            onChange={this.handleOpChange} sx={{display: 'flex'}}>
                    <div style={{display:'flex'}}>
                    <FormControlLabel value="circlefn"
                                    control={<Radio checked={this.state.circlefn}/>}/>
                    <Zoom in={this.state.circlefn}>
                        <TextField name="function-input" type="number" size="small"
                                   id="circlefn" value={inputfn} defaultValue="0"
                                   onChange={this.handleChange} label="&times; n % points"/> 
                    </Zoom>
                    </div> 
                    <div style={{display:'flex'}}>
                    <FormControlLabel value="squarefn"
                                    control={<Radio checked={this.state.squarefn}/>}/>
                    <Zoom in={this.state.squarefn}>
                        <TextField name="function-input" type="number" size="small"
                                   id="squarefn" value={inputfn} defaultValue="0"
                                   onChange={this.handleChange} label="+ n % points" /> 
                    </Zoom>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
        );
    }
}

export default Function;