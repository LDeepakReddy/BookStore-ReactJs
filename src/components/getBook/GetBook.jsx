import React, { useState } from 'react';
import './GetBook.css'
import bookImg from '../../images/book1.png';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Header from '../header/Header';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function GetBook(props) {
    const navigate = useNavigate();
    const [bookId, setBookId] = useState(props.selectedBook.id);

    const clickHome = () => {
        navigate('/dashboard')

    };

    return (
        <>
            <div className='top'>
                <span onClick={clickHome}  className='top-home'> Home/ </span> <span className='top-books'> Books({props.selectedBook.quantity})</span>
            </div>


            <div className='bookDetailContainer'>
                <div className="leftSection-BookDetail">
                    <div className="leftSection-BookDetailTop">
                        <div className="bookDetail-BookImage">
                            <img src={bookImg} alt="" className='BookImg' />
                        </div>
                    </div>

                    <div className='leftSection-BookDetailBottom'>

                        <input type="button" value="ADD TO BAG" className='addToBag' />
                        <input type="button" value="WISHLIST" className='wishlist' />
                    </div>
                </div>


                <div className="rightSection-BookDetail">
                    <div className='rightSection-BookDetail-child1'>
                        <div className="righrSection-name" >{props.selectedBook.name}</div>
                        <div className="righrSection-autor">by {props.selectedBook.author} </div>

                        <div className="righrSection-rating">
                            <div >4.5 </div>
                            <StarOutlineIcon className='child1-starIcon' />
                        </div>
                        <div className="righrSection-price">RS.{props.selectedBook.price}</div>
                    </div>

                    <div className="rightSection-BookDetail-child2">
                        <div className="bookDetail">
                            Book Detail
                        </div>

                        <div className="bookDesc">
                            {props.selectedBook.description}
                            {/* It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box.
                            Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components. */}
                        </div>

                    </div>

                    <div className="rightSection-BookDetail-child3">
                        <div className="customerFeedback">
                            Customer Feedback
                        </div>
                        <div className="feedback-bookDetail">
                            <div className="bookDetail-overallRatings">
                                Overall rating
                            </div>
                            <div className="star-icons">
                                <StarOutlineIcon className='starIcons-books' />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                                <StarOutlineIcon />
                            </div>
                            <div className="feedbackInput">
                                <input type="text" className='books-feedbackInput' />
                            </div>
                            <div className="submitFeedback">
                                <Button variant="contained" className='submitFeedback-btn'>submit</Button>
                            </div>
                        </div>
                        <div className="bookDetail-displayFeedback">
                            <div className="displayReview-box1">
                                <div className="username">
                                    <span className='round'>AC</span> Aniket Chile
                                </div>
                                <div className="staricon-display">
                                    <StarOutlineIcon className='starIcons-books' />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                </div>
                                <div className="userfeedbackuser">
                                    Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </div>
                            </div>
                            <div className="displayReview-box2">
                                <div className="username">
                                    <span className='round'>SB</span> Shweta Bodkar
                                </div>
                                <div className="staricon-display">
                                    <StarOutlineIcon className='starIcons-books' />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                    <StarOutlineIcon />
                                </div>
                                <div className="userfeedbackuser">
                                    Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}

export default GetBook;