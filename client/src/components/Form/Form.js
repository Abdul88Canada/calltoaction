import React from "react";
import { TextField, Button, Typography, Paper, useForkRef } from "@material-ui/core";

import useStyles from './styles';

const Form = () => {

    const classes = useStyles();

    const clear = () => {
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6">
                    Add an Item
                </Typography>
                <TextField name="name" variant="outlined" label="name" fullWidth  value='' onChange={(e) => {}}/>
                <TextField name="type" variant="outlined" label="type" fullWidth value='' onChange={(e) => {}}/>
                <TextField name="quantity" variant="outlined" label="quantity" fullWidth value='' onChange={(e) => {}}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;