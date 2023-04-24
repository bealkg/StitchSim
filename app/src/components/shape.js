import React, { Component } from "react";
import { Radio, RadioGroup, FormControl,
         FormControlLabel, TextField, 
         Zoom, Typography } from '@mui/material/'

class Shape extends Component {
    constructor(props) {
        super(props);
        this.handleShChange = this.handleShChange.bind(this);
        this.state = {customop: false};
    }

    handleShChange(event) {
        if (event.target.value === "circle" || event.target.value === "square" ||
            event.target.value === "cross" || event.target.value === "triangle" ||
            event.target.value === "pentagon") {
            this.setState({customop: false});
            this.props.onShChange(event.target.value);
            let num = document.getElementById("custom-number");
            num.value = '0';
        } else {
            this.setState({customop: true});
            if (event.target.value > 2 & event.target.value < 100) {
                this.props.onShChange(event.target.value);
            } else {
                event.target.value = '3';
                this.props.onShChange(event.target.value);
            }
        }
        let pts = document.getElementById("points-input");
        pts.value = '0';
        let funcs = document.getElementsByName("function-input");
        for (let f of funcs) {
            f.value = '0';
        }
    }

    render() {
        const inputcustom = this.props.cu
        return (
        <div class="container" onChange={this.handleShChange} style={{display:'flex', paddingLeft:'10px'}}>
            <FormControl>
                <Typography variant="h2">Shape</Typography>
                <RadioGroup defaultValue="circle" name="shape-radio-group"
                            sx={{display:'flex'}}>
                    <FormControlLabel value="circle" label="Circle" 
                                        control={<Radio/>}/>
                    <FormControlLabel value="cross" label="Cross" 
                                        control={<Radio/>}/>
                    <div style={{display:'flex'}}>
                    <FormControlLabel value="custom" label="Custom"
                                        control={<Radio/>}/>
                    <Zoom in={this.state.customop} >
                        <TextField id="custom-number" type="number" size="small"
                                   value={inputcustom} defaultValue="3"/> 
                    </Zoom>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
        );
    }
}

export default Shape;