import React from 'react';
import image from '../../images/book1.png'
import './OrderSummery.css'

function OrderSummery(props) {
    return (
        <div>
            <div className='orderSummery-container'>
                <div className="orderSummery-text">
                    Order Summery
                </div>
                <div className="orderSummery-orderData">
                    <div className='cartDetails'>
                        <img className='cartimage' src={image}></img>
                        <div className='bookdetails'>
                            <span className='bookname'>Dont Make me think</span>
                            <span className='author'>by stephen</span>
                            <span className='price'> Rs.1500</span>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    );
}

export default OrderSummery;