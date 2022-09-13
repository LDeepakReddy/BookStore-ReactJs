import React from 'react';
import imagebook from '../../images/book1.png';
import imagebook1 from '../../images/book2.png';
import imagebook2 from '../../images/book3.png';
import './Bookview.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Header from '../header/Header';

function Bookview(props) {


    return (
        <>
        <Header />
        <div className='allign'>
            <div className='booksContainer' >
                <div>
                    <div className="bookTopSection">
                        <div className="booksImage">
                            <img src={imagebook} alt="" className='book-image' />
                        </div>
                    </div>
                    <div className="booksBottomSection">
                        <div className="booksTitle">Don't Make Me Think</div>
                        <div className="booksAuthor">by Stephen</div>
                        <div>
                            <span className="rating"> 4.5 <StarOutlineIcon
                                style={{ color: 'white', height: '10px', }} ></StarOutlineIcon>
                                <span className='number'>(20)</span>
                            </span>
                            <div className="booksPrice">Rs. 700</div>
                        </div>

                    </div>

                </div>


            </div>

            <div className='booksContainer' >
                <div>
                    <div className="bookTopSection">
                        <div className="booksImage">
                            <img src={imagebook1} alt="" className='book-image' />
                        </div>
                    </div>
                    <div className="booksBottomSection">
                        <div className="booksTitle">UX Dummies</div>
                        <div className="booksAuthor">by Stephen</div>
                        <div>
                            <span className="rating"> 4.5 <StarOutlineIcon
                                style={{ color: 'white', height: '10px', }} ></StarOutlineIcon>
                                <span className='number'>(20)</span>
                            </span>
                            <div className="booksPrice">Rs. 700</div>
                        </div>


                    </div>

                </div>

            </div>

            <div className='booksContainer' >
                <div>
                    <div className="bookTopSection">
                        <div className="booksImage">
                            <img src={imagebook2} alt="" className='book-image' />
                        </div>
                    </div>
                    <div className="booksBottomSection">
                        <div className="booksTitle">React UI</div>
                        <div className="booksAuthor">by Stephen</div>
                        <div>
                            <span className="rating"> 4.5 <StarOutlineIcon
                                style={{ color: 'white', height: '10px', }} ></StarOutlineIcon>
                                <span className='number'>(20)</span>
                            </span>
                            <div className="booksPrice">Rs. 700</div>
                        </div>

                    </div>

                </div>

            </div>

            <div className='booksContainer' >
                <div>
                    <div className="bookTopSection">
                        <div className="booksImage">
                            <img src={imagebook} alt="" className='book-image' />
                        </div>
                    </div>
                    <div className="booksBottomSection">
                        <div className="booksTitle">Don't Make Me Think</div>
                        <div className="booksAuthor">by Stephen</div>
                        <div>
                            <span className="rating"> 4.5 <StarOutlineIcon
                                style={{ color: 'white', height: '10px' }} ></StarOutlineIcon>
                                <span className='number'>(20)</span>
                            </span>
                            <div className="booksPrice">Rs. 700</div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
        </>
    );
}

export default Bookview;