
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartService from '../../services/CartService';
import GetWishlist from '../../components/Wishlist/GetWishlist';
import Header from '../../components/header/Header';

const cartService = new CartService();

function Wishlist(props) {


    const [wishlistArray, setwishlistArray] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        getWishList();
    }, [])

    const goToDashBoard = () => {
        navigate('/dashboard')
    }


    const getWishList = () => {
        cartService.getAllBooksFromWishlist()
            .then((res) => {
                console.log(res.data);
                setwishlistArray(res.data.wishlist)
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>

            <Header />
            <span onClick={goToDashBoard} className='homecart'>Home / Wishlist</span>


            {wishlistArray.length > 0 && wishlistArray.map((wishlist, index) => (
                <GetWishlist key={index} arrayWishlist={wishlist} getwishlist={getWishList} />

            ))}
        </div>
    );
}

export default Wishlist;