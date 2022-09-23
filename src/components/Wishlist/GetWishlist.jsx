import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartService from '../../services/CartService';
import image from '../../images/book1.png'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Mycart from '../cart/Mycart';
import Header from '../header/Header';
import './GetWishlist.css'

const cartService = new CartService();

function GetWishlist(props) {


    const [wishlistArray, setwishlistArray] = useState([])



    useEffect(() => {
        getWishList();
    }, [])




    const getWishList = () => {
        cartService.getAllBooksFromWishlist()
            .then((res) => {
                console.log(res.data);
                setwishlistArray(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }

    const removeWishlist = (props) => {
        console.log(props.arrayWishlist.id)
        let data = {

            'id': props.arrayWishlist.id
        }
        cartService.deleteBookFromWishlist(data)
            .then((res) => {
                console.log(res);

            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>

            <div className="wishlistContainer">


                <div className="secondSection-wishlist">
                    <div className="secondSection-myWishlist">My Wishlist</div>


                    <div className="secondSection-displayMyWishlist">
                        <div className="wishlistBookData">
                            <div className="wishListBookData-Image">
                                <img src={image} alt="" className="wishlist-bookImage" />
                            </div>
                            <div className="wishlistBookData-text">
                                <div className="wishlistBookData-text1">
                                    <div className="wishlistBook-title">{props.arrayWishlist.name}</div>
                                    <div className="wishlistBook-author">by {props.arrayWishlist.author}</div>
                                    <div className="wishlistBook-price">Rs. {props.arrayWishlist.Price}</div>
                                </div>
                            </div>
                        </div>
                        <div className="wishlistBookDeleteIcon" onClick={() => removeWishlist(props)}>

                            <DeleteOutlineIcon

                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default GetWishlist;