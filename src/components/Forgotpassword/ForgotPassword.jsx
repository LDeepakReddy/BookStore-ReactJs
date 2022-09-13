import { Button, TextField } from '@mui/material';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from '../../pages/homepage/HomePage';
import Header from '../header/Header';
import './ForgotPassword.css';
function ForgotPassword(props) {
    const navigate = useNavigate();

    const clickToSignup = () => {
        navigate('/')

    };

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
                                    label="Email"
                                    variant="outlined"
                                    size="small"
                                />
                            </div>
                            <div className='reset_button'>
                                <Button style={{ backgroundColor: "#A03037", color: 'white' }}>Reset Password</Button>
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