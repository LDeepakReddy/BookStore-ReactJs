import { Button, TextField } from '@mui/material';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../pages/homepage/HomePage';
import UserService from '../../services/UserService';
import Header from '../header/Header';
import './ForgotPassword.css';

const userService = new UserService();
function ForgotPassword(props) {
    const navigate = useNavigate();

    const clickToSignup = () => {
        navigate('/')

    };

    const [text, setText] = useState({
        email: '',
        emailError: false,

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


        setText({
            ...error
        })

        isError = error.emailError
        return isError;
    }

    const reset = () => {
        let isValidated = validation();
        let data = {

            "email": text.email,

        }
        if (!isValidated) {
            userService.forgotPassword(data,)
                .then((res) => {
                    console.log(res)


                }).catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <>
            <Header />
            <div className='centreAlign'>
                <div className="heading_tag">
                    <h3>Forgot Your Password?</h3>
                </div>
                <div class="centrebox">
                    <div class="box_with_paddingg">
                        <div>

                            <div className='paragraph'>
                                <span
                                >Enter your email address and we'll send you a link to reset
                                    your password</span>
                            </div>
                            <div class="email">
                                <TextField
                                    style={{ width: 300 }}
                                    id="outlined-basic"
                                    name='email'
                                    label="Email"
                                    error={text.emailError}
                                    helperText={text.emailError == true ? 'Email is required' : ' '}
                                    onChange={(e) => changeState(e)}
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div className='reset_button'>
                                <Button onClick={reset} style={{ backgroundColor: "#A03037", color: 'white' }}>Reset Password</Button>
                            </div>
                            <div>
                                <Button onClick={clickToSignup}
                                    style={{ width: 300, marginTop: 30, fontSize: 15, fontWeight: 'bold', color: "black" }}
                                >CREATE ACCOUNT</Button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;