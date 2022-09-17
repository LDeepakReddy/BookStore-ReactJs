import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import image from '../../images/book1.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import './Mycart.css'

import CartService from '../../services/CartService';
import { useNavigate } from 'react-router-dom';

function Mycart(props) {
    const [cartArray, setcartArray] = useState([])
    const [cartId, setCartId] = useState(props.id)

    const navigate = useNavigate();

    const cartService = new CartService()


    const [customerDetails, setCustomerDetails] = useState(false)
    const [orderSummery, setOrderSummery] = useState(false)

    const customerDetailsOpen = () => {
        setCustomerDetails(true);
    }

    const ordersummery = () => {
        setOrderSummery(true);
    }

    const goToDashBoard = () => {
        navigate('/dashboard')
    }

    useEffect(() => {
        getCartList();
    }, [])

    const getCartList = () => {
        cartService.getAllBooksFromCart()
            .then((response) => {
                // console.log(response.data);
                setcartArray(response.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    const removeCart = (props) => {
        console.log(props.id)
        let data = {

            'id': props.id
        }
        cartService.deleteBookFromCart(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    const increment = (props) => {
        console.log(props.id)
        let data = {
            'id': props.id
        }

        cartService.incrementCartQuanitity(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })

    }

    const decrement = (props) => {
        let data = {

            'id': props.book.id
        }

        cartService.decrementCartQuanitity(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })

    }

    return (

        <>



            <div className='cartcontainer'>
                <div className="cart-heading">
                    <span className='mycartheading'>Mycart</span>

                    <div className='location'><LocationOnOutlinedIcon className='locationicon' /> <button className='locationbutton' >Use Current Location</button></div>
                </div>

                {/* {cartArray.length >0 && cartArray.map((cart, index) =>(
                    <div key={index}> */}

                <div className='cartDetails'>
                    <img className='cartimage' src={image}></img>
                    <div className='bookdetails'>
                        <span className='bookname'>{props.arrayCart.name}</span>
                        <span className='author'>by {props.arrayCart.author}</span>
                        <span className='price'> Rs. {props.arrayCart.Price}</span>
                    </div>


                </div>


                <div className='cartQuantity'>
                    <RemoveCircleOutlineRoundedIcon onClick={() => decrement(props)} className='add' />
                    <span className='cartnumber'>{props.arrayCart.book_quantity}</span>
                    <AddCircleOutlineRoundedIcon onClick={() => increment(props.id)} className='add' />

                    <span onClick={() => removeCart(props)}>Remove</span>
                </div>
                {/* 
                    </div>
              ) )} */}


                <div className="placeorderbutton">
                    <Button onClick={customerDetailsOpen} style={{
                        width: '150px',
                        height: '35px',
                        backgroundColor: '#3371B5',
                        color: '#FFFFFF',
                        fontSize: '13px',

                    }}>PLACE ORDER</Button>
                </div>

            </div>

            {customerDetails ?
                <div className='addresscontainer'>
                    <div className='addressbuttons'>
                        <span>Customer Details</span>
                        <button className='addaddressbutton'>Add New Address</button>
                    </div>


                    <div className='addressinput'>
                        <div className='fullnameAndMobile'>
                            <TextField className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                id="outlined-basic" label="Full Name" size='small' variant="outlined" />

                            <TextField className='textfields' id="outlined-basic" label="Mobile" size='small' variant="outlined" />
                        </div>

                        <div >
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '475px' }}
                                className='textfield-address'
                                size='small'
                                variant="outlined"
                            />

                        </div>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            className='textfields'
                            style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                            size='small'
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Landmark"

                            className='textfields'
                            size='small'
                            variant="outlined"
                        />
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="State"
                                className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                size='small'
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-basic"
                                label="PinCode"
                                className='textfields'
                                size='small'
                                variant="outlined"
                            />
                        </div>
                        <div className='addresstypefield'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">AddressType</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel className='radiofont' value="Home" control={<Radio />} label="Home" />
                                    <FormControlLabel className='radiofont' value="Work" control={<Radio />} label="Work" />
                                    <FormControlLabel className='radiofont' value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="continuebutton" >
                            <Button onClick={ordersummery} style={{
                                width: '150px',
                                height: '35px',
                                backgroundColor: '#3371B5',
                                color: '#FFFFFF',
                                fontSize: '13px',
                                textTransform: 'none'
                            }}>CONTINUE</Button>
                        </div>

                    </div>
                </div>
                :
                <div className="customertext">
                    <span className='customerAddress'>Address Details</span>
                </div>
            }
            {
                orderSummery ?
                    <div >
                        <div className='ordercontainer'>
                            <div >
                                <span className='addressbuttons'>Order Summary</span>
                            </div>


                            <div className='cartDetails'>
                                <img className='cartimage' src={image}></img>
                                <div className='bookdetails'>
                                    <span className='bookname'>{props.arrayCart.name}</span>
                                    <span className='author'>by{props.arrayCart.author}</span>
                                    <span className='price'> Rs.{props.arrayCart.Price}</span>
                                </div>


                            </div>



                            <div className="continuebutton">
                                <Button className="continuebutton" style={{
                                    width: '150px',
                                    height: '35px',
                                    backgroundColor: '#3371B5',
                                    color: '#FFFFFF',
                                    fontSize: '14px',
                                    marginTop: '5px',

                                }}>CHECKOUT</Button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="customertext">
                        <span className='customerAddress'>Order Summary</span>
                    </div>
            }








        </>

    );
}

export default Mycart;