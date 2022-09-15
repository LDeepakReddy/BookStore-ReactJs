import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookview from '../../components/books/Bookview';
import GetBook from '../../components/getBook/GetBook';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService';
import './Dashboard.css'

const bookService = new BookService();
function Dashboard(props) {

    const [bookArray, setBookArray] = useState([]);
    const [view, setView] = useState(true);
    const [selectedBook, setSelectedBook] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        setView(true)
        bookService.getAllBooks()
            .then((response) => {
                console.log(response);
                setBookArray(response.data.books)
            }).catch((err) => {
                console.log(err);
            })
    }

    const lowtohigh=()=>{
        // bookArray.sort()
        bookArray.sort((low, high) => low.price - high.price);
    }

    const listenToBooks = () => {
        setView(false)


    }

    const listenToEachBook = (data) => {
        setSelectedBook(data);
        console.log(data);
    }

    return (
        <>

            < Header />

            {view ? <div>


                <div className='Heading'>
                    <span className='booksheading'>Books({bookArray.length})</span>

                    <select className='drop'>
                        <option>Sort by relevance</option>
                        <option onClick={lowtohigh}>Price:Low to High</option>
                        <option>Price:High to Low</option>
                        <option>Newest Arrivals</option>
                    </select>
                </div>

                <div className='bookscontainer1' >

                    <div className='getbooks' >

                        {bookArray.length > 0 && bookArray.map((book, index) => (
                            <Bookview key={index} arrayBook={book} getBooks={getBooks} listenToBooks={listenToBooks} listenToEachBook={listenToEachBook}  />
                        ))}

                    </div>
                </div>
            </div> : <GetBook selectedBook={selectedBook} />}
            {/* </div> : navigate ('/book')} */}

        </>
    );
}

export default Dashboard;