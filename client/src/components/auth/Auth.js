import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import Input from './Input';
import useStyles from './styles';
import Icon from './icon';

function Auth() {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false);
    }

    const googleSuccess = (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: 'AUTH', data: {result, token}});
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    const googleError = () => {
        console.log('Google Sign in Failed');
    }

  return (
    <Container component="main" maxWidth='xs'>
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name='firstName' label='First Name' onChange={handleChange} autoFocus half />
                                <Input name='firstName' label='First Name' onChange={handleChange} half />
                            </>
                        )
                    }
                    <Input name='email' label='Email' onChange={handleChange} type='email'/>
                    <Input name='password' label='Password' onChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" onChange={handleChange} type="password"/>}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color='primary' className={classes.submit}>{isSignup ? 'SignUp' : 'SignIn'}</Button>
                <GoogleLogin
                    clientId="671811721523-mf8d240qmad1pq8v7t6716d0flgrq9is.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy="single_host_origin"
                />
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? 'Already have an account? Signin' : 'Don\'t have an account? Signin'}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  );
}

export default Auth;