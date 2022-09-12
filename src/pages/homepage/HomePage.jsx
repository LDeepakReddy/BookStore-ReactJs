
import React, { useState } from 'react';
import Login from '../../components/login/Login';
import SignUp from '../../components/signup/SignUp';
import './HomePage.css'
import image from '../../images/2766594.png'
import { Link } from '@mui/material';





function HomePage(props) {

    const [Click, setClick] = useState(true);
    const clickToLogin = () => {
        setClick(false);
    };

    const clickToSignup = () => {
        setClick(true);
    };
    return (

        <div className='homepage'>
            <div className='main'>
                <div className='left-container'>
                    <div className='left'>
                        <img className='image' src={image} alt="images" />
                        <p className='text'>ONLINE BOOK SHOPPING</p>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='right'>
                        <div className='header'>
                            <div className='login' onClick={clickToLogin}>
                                LOGIN
                            </div>
                            <div className='signup' onClick={clickToSignup}>
                                SIGNUP
                            </div>
                            
                        </div>
                        {/* <div className='header'>
                            <nav>
                                <Link to ='./' className='login'onClick={clickToLogin} >
                                    LOGIN 
                                </Link >
                                <Link to ='./' className='signup' onClick={clickToSignup}>
                                    SIGNUP
                                </Link>
                            </nav>


                        </div> */}
                        <div className='pages'>
                            {Click ? <SignUp /> : < Login />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;