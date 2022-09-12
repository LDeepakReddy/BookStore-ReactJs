import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './SignUp.css'


function SignUp(props) {

    const [text, setText] = useState({
        first_name: '',
        last_name: '',
        phone_no: '',
        email: '',
        password: '',

        role: "user",
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        passwordError: false,
        phoneError: false
    });

    const validation = () => {
        let isError = false;
        const error = text;
        error.firstNameError = text.first_name === '' ? true : false;
        error.lastNameError = text.last_name === '' ? true : false;
        error.phoneError = text.phone_no === '' ? true : false;
        error.emailError = text.email === '' ? true : false;
        error.passwordError = text.password === '' ? true : false;

        setText({
            ...error
        })

        isError = error.firstNameError || error.lastNameError || error.emailError || error.passwordError || error.phoneError
        return isError;
    }


    const next = () => {
        let isValidated = validation();
        let data = {
            "first_name": text.first_name,
            "last_name": text.last_name,
            "email": text.email,
            "password": text.password,
            "phone_no": text.phone_no
        }

    }

    const changeState = (event) => {
        setText(previousValue => {
            return { ...previousValue, [event.target.name]: event.target.value }
        })
    }




    return (
        <div className='mainSignupContainer'>
            <div className='signUpContainer'>
                <div className='first_nameSignUp'>
                    <TextField

                        className="input"
                        id="outlined-basic"
                        label="First Name"

                        name='first_name'
                        error={text.firstNameError}
                        helperText={text.firstNameError == true ? 'FirstName required': ' '}
                        variant="outlined"
                        size="small"
                        onChange={(e) => changeState(e)}
                    />

                </div>

                <div className="last_nameSignUp">
                    <TextField

                        id="outlined-basic"
                        className="input"
                        label="Last Name"
                        name='last_name'
                        error={text.lastNameError}
                        helperText={text.lastNameError == true ? 'LastName required': ' '}
                        variant="outlined"
                        size="small"
                        onChange={(e) => changeState(e)}
                    />
                </div>

                <div className="emailSignUp">
                    <TextField
                        id="outlined-basic"
                        className="input"
                        label="Email"
                        name='email'
                        error={text.emailError}
                        helperText={text.emailError == true ? 'Email is required': ' '}
                        variant="outlined"
                        size="small"
                        onChange={(e) => changeState(e)}
                    />
                </div>

                <div className="passwordSignUp">
                    <TextField

                        id="outlined-basic"
                        className="input"
                        label="Password"
                        name='password'
                        error={text.passwordError}
                        helperText={text.passwordError == true ? 'Password is required': ' '}
                        variant="outlined"
                        size="small"
                        onChange={(e) => changeState(e)}
                    />
                </div>
                <div className="mobileNumberSignUp">
                    <TextField

                        id="outlined-basic"
                        className="input"
                        label="Phone Number"
                        name='phone_no'
                        error={text.phoneError}
                        variant="outlined"
                        size="small"
                        onChange={(e) => changeState(e)}
                    />
                </div>
                <div>
                    <Button style={{ width: '225px', backgroundColor: '#A03037', color: '#FFFFFF' }} onClick={next}>SIGNUP</Button>
                </div>


            </div>

        </div>
    );
}

export default SignUp;