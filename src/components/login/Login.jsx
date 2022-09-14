import { Password } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/UserService';
import './Login.css'


const userService = new UserService();

function Login(props) {

    const navigate = useNavigate();
    const [text, setText] = useState({
        email: '',
        password: '',
        emailError: false,
        passwordError: false,

    });
    const changeState = (event) => {
        setText(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }
        })
    }

    const validation = () => {
        let isError = false;
        const error = text;
        error.emailError = text.email === '' ? true : false;
        error.passwordError = text.password === '' ? true : false;

        setText({
            ...error
        })

        isError = error.emailError || error.passwordError
        return isError;
    }

    const next = () => {
        let isValidated = validation();
        let data = {

            "email": text.email,
            "password": text.password,

        }
        if (!isValidated) {
            userService.Login(data,)
              .then((res) => {
                localStorage.setItem("token",res.data.token)
                console.log(res)
                  navigate('/dashboard')
              
              }).catch((err) => {
                console.log(err);
              })
          }

    }





    return (
        <div className='maindiv'>


            <div className="loginContainer">
                <div className='emailSignIn'>
                    <TextField
                        id="outlined-basic"
                        className='email-SignIn'
                        label="Email"
                        name='email'
                        error={text.emailError}
                        helperText={text.emailError == true ? 'Email is required' : ' '}
                        onChange={(e) => changeState(e)}
                        variant="outlined"
                        size='small' />
                </div>
                <div className='passwordSignIn'>
                    <TextField
                        id="outlined-basic"
                        type="password"
                        className='password-SignIn'
                        name='password'
                        label="Password"
                        error={text.passwordError}
                        helperText={text.passwordError == true ? 'Password is required' : ' '}

                        onChange={(e) => changeState(e)}
                        variant="outlined"
                        size='small' />
                </div>
                <div class="Forget_password">
                    <a className='forgetlink' href='http://localhost:3000/forgotpassword'>Forgot password?</a>
                </div>

                <Button style={{ width: '225px', backgroundColor: '#A03037', color: '#FFFFFF' }} onClick={next}>Login</Button>
                <div className="or">
                    --------  OR  ----------
                </div>
                <div className='FBbutton'>
                    {/* <Button className='FB'
                >Facebook</Button>
                <Button className='GoogleB'
                >Google</Button> */}
                    <Button style={{
                        width: '120px', height: '40px', backgroundColor: '#4266B2', color: '#FFFFFF', fontSize: '14px', textTransform: 'none'
                    }}>Facebook</Button>
                    <Button style={{
                        width: '120px', height: '40px', backgroundColor: '#555557', color: '#0A0102', fontSize: '14px', textTransform: 'none'
                    }}>Google</Button>
                </div>


            </div>
        </div>
    );
}

export default Login;