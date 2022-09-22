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
import AddressService from '../../services/AddressService';
import OrderService from '../../services/OrderService';


const orderService=new OrderService()
const cartService = new CartService()
const addressService = new AddressService()



function Mycart(props) {


    const [cartArray, setcartArray] = useState([])
    const [cartId, setCartId] = useState(props.id)

    const navigate = useNavigate();




    const [customerDetails, setCustomerDetails] = useState(false)
    const [orderSummery, setOrderSummery] = useState(false)



    const [customerInputs, setcustomerInputs] = useState({
        name: "DeepakReddy",
        phoneNumber: "9182510123",
        pincode: "",
        state: "",
        address: "",
        city: "",
        landmark: "",
        addressType: "",
    })


    const changeState = (event) => {
        setcustomerInputs(previousValues => {
            return { ...previousValues, [event.target.name]: event.target.value }
        })
    }

    const saveAddress = () => {
        let data = {
            "address_type": customerInputs.address_type,
            "address": customerInputs.address,
            "city": customerInputs.city,
            "landmark": customerInputs.landmark,
            "state": customerInputs.city,
            "pincode": customerInputs.pincode,

        }
        addressService.addAddress(data)
            .then((res) => {
                console.log(res);
                setOrderSummery(true)
            }).catch((err) => {
                console.log(err);
            })
    }


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
        console.log(props.arrayCart.id)
        let data = {

            'id': props.arrayCart.id
        }
        cartService.deleteBookFromCart(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    const increment = (props) => {
        // console.log(props.arrayCart.id)
        let data = {
            'id': props.arrayCart.id
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

            'id': props.arrayCart.id
        }

        cartService.decrementCartQuanitity(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })

    }

    const checkout = (props) => {
        console.log(props.id)
        let data = {

            'address_id': 1,
            'name': props.arrayCart.name,
            'quantity': props.arrayCart.book_quantity
        }
        orderService.placeOrder(data)
            .then((res) => {
                console.log(res)
                navigate('/ordersuccess')

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
                    <AddCircleOutlineRoundedIcon onClick={() => increment(props)} className='add' />

                    <span onClick={() => removeCart(props)}>Remove</span>
                </div>



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
                                name='address'
                                onChange={changeState}
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '475px' }}
                                className='textfield-address'
                                size='small'
                                variant="outlined"
                            />

                        </div>
                        <TextField
                            id="outlined-basic"
                            label="City"
                            name='city'
                            onChange={changeState}
                            className='textfields'
                            style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                            size='small'
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Landmark"
                            name='landmark'
                            onChange={changeState}

                            className='textfields'
                            size='small'
                            variant="outlined"
                        />
                        <div>
                            <TextField
                                id="outlined-basic"
                                label="State"
                                name='state'
                                onChange={changeState}
                                className='textfields'
                                style={{ paddingBottom: '20px', paddingRight: '10px', width: '240px' }}
                                size='small'
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-basic"
                                label="PinCode"
                                name='pincode'
                                onChange={changeState}
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
                                    <FormControlLabel className='radiofont' name='address_type'
                                        onChange={changeState} value="Home" control={<Radio />} label="Home" />

                                    <FormControlLabel className='radiofont' name='address_type'
                                        onChange={changeState} value="Work" control={<Radio />} label="Work" />

                                    <FormControlLabel className='radiofont' name='address_type'
                                        onChange={changeState} value="Other" control={<Radio />} label="Other" />
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



                            <div className="continuebutton" onClick={() => checkout(props)} >
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