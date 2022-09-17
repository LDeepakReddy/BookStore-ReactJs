import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Mycart from '../../components/cart/Mycart';
import Header from '../../components/header/Header';
import CartService from '../../services/CartService';


const cartService = new CartService();


function Cart(props) {

  const [cartArray, setcartArray] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
    getCartList();
  }, [])

  const goToDashBoard = () => {
    navigate('/dashboard')
}

  const getCartList = () => {
    cartService.getAllBooksFromCart()
      .then((res) => {
        console.log(res.data);
        setcartArray(res.data.Cart)
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      <Header />
      <span onClick={goToDashBoard} className='homecart'>Home / Cart</span>
      
        {cartArray.length > 0 && cartArray.map((cart, index) => (
          <Mycart key={index} arrayCart={cart} getcart={getCartList} />

        ))}

        {/* <Mycart /> */}
     


    </div>
  );
}

export default Cart;