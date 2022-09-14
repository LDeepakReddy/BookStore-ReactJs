import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bookview from '../../components/books/Bookview';
import Header from '../../components/header/Header';
import BookService from '../../services/BookService';
import './Dashboard.css'

const bookService = new BookService();
function Dashboard(props) {

    const [bookArray, setBookArray] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = () => {
        bookService.getAllBooks()
            .then((response) => {
                console.log(response);
                setBookArray(response.data.books)
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>

            < Header />


            <div className='Heading'>
                <span className='booksheading'>Books({bookArray.length})</span>

                <select className='drop'>
                    <option>Sort by relevance</option>
                    <option>Price:Low to High</option>
                    <option>Price:High to Low</option>
                    <option>Newest Arrivals</option>
                </select>
            </div>

            <div className='bookscontainer1' >
             
                <div className='getbooks' >

                    {bookArray.length > 0 && bookArray.map((book, index) => (
                        <Bookview key={index} arrayBook={book} getBooks={getBooks} />
                    ))}

                </div>
            </div>

        </>
    );
}

export default Dashboard;