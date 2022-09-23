import React from 'react';

import imagebook1 from '../../images/Image7.png';
import './Bookview.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';

function Bookview(props) {


    const bookDetail = (data) => {
        // props.listenToBooks(true);
        props.listenToEachBook(data);
    }



    return (
        <>

            <div className='allign'>

                <div className='booksContainer' onClick={() => bookDetail(props.arrayBook)} >
                    {/* <div> */}
                    <div className="bookTopSection">
                        <div className="booksImage">
                            <img src={imagebook1} alt="" className='book-image' />
                        </div>
                    </div>
                    <div className="booksBottomSection">
                        <div className="booksTitle">{props.arrayBook.name}</div>
                        <div className="booksAuthor">{props.arrayBook.author}</div>
                        <div>
                            <span className="rating"> 4.5 <StarOutlineIcon
                                style={{ color: 'white', height: '10px', }} ></StarOutlineIcon>
                                <span className='quantity'>({props.arrayBook.quantity})</span>
                            </span>
                            {/* <div className="booksPrice">Rs.{props.arrayBook.price}
                            <b></b>
                            </div> */}
                            <div class="price-container">
                                <div className="dicounted-price">
                                    <b>Rs.{props.arrayBook.price - 70}</b>
                                    <span className="actual-price">Rs.{props.arrayBook.price}</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* </div> */}

                </div>



            </div>
        </>
    );
}

export default Bookview;