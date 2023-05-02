import React, { Component } from "react";
import { FormControl, TextField, Typography } from '@mui/material/';

class Points extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value > 0 & event.target.value < 201) {
            this.props.onPtChange(event.target.value);
        } else {
            event.target.value = '0';
        }
    }

    render() {
        const inputpts = this.props.pts;
        return (
            <div class="ptcontainer" onChange={this.onChangeValue} style={{display:'flex', paddingLeft:'10px'}}>
                <FormControl>
                <Typography variant="h2">Points per Edge</Typography>
                <TextField id="points-input" type="number" size="small"
                            value={inputpts} defaultValue="0" onChange={this.handleChange}
                            />
                </FormControl>
            </div>
        );
    }
}

export default Points;