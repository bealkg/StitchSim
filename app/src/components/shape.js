import React, { Component } from "react";
import { Radio, RadioGroup, FormControl,
         FormControlLabel, TextField, 
         Zoom, Typography } from '@mui/material/'

class Shape extends Component {
    constructor(props) {
        super(props);
        this.handleShChange = this.handleShChange.bind(this);
        this.handleCuChange = this.handleCuChange.bind(this);
        this.state = {edgeop: false, spokeop: false};
    }

    handleCuChange(event) {
        if (event.target.value < 3 | event.target.value > 50) {
            event.target.value = "3"
        }
        this.props.onCuChange(event.target.value);
    }

    handleShChange(event) {
        if (event.target.value === "edges") {
            this.setState({edgeop: true});
            this.setState({spokeop: false});
            this.props.onShChange(event.target.value);
            let num = document.getElementById("spokes");
            num.value = '3';
            num = document.getElementById("edges");
            this.props.onCuChange(num.value);
        } else if (event.target.value === "spokes") {
            this.setState({edgeop: false});
            this.setState({spokeop: true});
            this.props.onShChange(event.target.value);
            let num = document.getElementById("edges");
            num.value = '3';
            num = document.getElementById("spokes");
            this.props.onCuChange(num.value);
            
        } else {
            this.setState({edgeop: false});
            this.setState({spokeop: false});
            this.props.onShChange("edges")
            this.props.onCuChange(1)
            let num = document.getElementById("spokes");
            num.value = '3';
            num = document.getElementById("edges");
            num.value = '3';
        }
        let pts = document.getElementById("points-input");
        pts.value = ' ';
        let func = document.getElementById("circlefn");
        func.value = ' ';
        func = document.getElementById("squarefn");
        func.value = ' ';
    }

    render() {
        const inputcustom = this.props.cu
        return (
        <div class="container" style={{display:'flex', paddingLeft:'10px'}}>
            <FormControl>
                <Typography variant="h2">Shape</Typography>
                <RadioGroup defaultValue="circle" onChange={this.handleShChange}
                            sx={{display:'flex'}}>
                    <FormControlLabel value="circle" label="Circle"
                                        control={<Radio/>}/>

                    <div style={{display:'flex'}}>
                    <FormControlLabel value="edges" label="Edges"
                                        control={<Radio/>}/>
                    <Zoom in={this.state.edgeop}>
                        <TextField id="edges" type="number" size="small"
                                   value={inputcustom} defaultValue="3"
                                   onChange={this.handleCuChange}/> 
                    </Zoom>
                    </div>
                    <div style={{display:'flex'}}>
                    <FormControlLabel value="spokes" label="Spokes"
                                        control={<Radio/>}/>
                    <Zoom in={this.state.spokeop}>
                        <TextField id="spokes" type="number" size="small"
                                   value={inputcustom} defaultValue="3"
                                   onChange={this.handleCuChange}/> 
                    </Zoom>
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
        );
    }
}

export default Shape;