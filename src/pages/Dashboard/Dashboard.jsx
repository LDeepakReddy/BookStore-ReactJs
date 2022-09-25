import { Card, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookview from '../../components/books/Bookview';
import GetBook from '../../components/getBook/GetBook';
import Header from '../../components/header/Header';
import usePagination from '../../components/pagination/Pagination';
import BookService from '../../services/BookService';
import './Dashboard.css'

const bookService = new BookService();
function Dashboard(props) {

    const [bookArray, setBookArray] = useState([]);
    const [view, setView] = useState(true);
    const [selectedBook, setSelectedBook] = useState("");
    const [page, setpage] = useState(1);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getBooks();
    }, [search])


    const getBooks = () => {
        setView(true)
        bookService.getAllBooks()
            .then((response) => {
                console.log(response.data);
                if (search) {

                    let filterBook = response.data.books.filter(books => books.name.toLowerCase().includes(search.toLowerCase()))
                    setBookArray(filterBook)
                } else {
                    setBookArray(response.data.books)
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    const PER_PAGE = 8;

    var bookArrayLength = bookArray ? bookArray.length : 0;
    const pageCount = Math.ceil(bookArrayLength / PER_PAGE)
    const paginate = usePagination(bookArray, PER_PAGE)

    const changePage = (event, page) => {
        setpage(page);
        paginate.jump(page)
    };

    const searchBook = (value) => {
        setSearch(value)
    }

    const lowtohigh = () => {
        // bookArray.sort()
        bookArray.sort((low, high) => low.price - high.price);
    }

    // const listenToBooks = () => {
    //     setView(false)


    // }

    const listenToEachBook = (data) => {
        setView(false)
        setSelectedBook(data);
        console.log(data);
    }

    return (
        <>

            < Header search={searchBook} />

            {view ? <div className='total'>


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

                        {paginate.currentData() ? paginate.currentData().map((book, index) => (
                            <Bookview key={index} arrayBook={book} getBooks={getBooks} listenToEachBook={listenToEachBook} />
                        ))
                            : "No Books Available"}

                        {/* {bookArray.length > 0 && bookArray.map((book, index) => (
                            <Bookview books={bookArray} key={index} arrayBook={book} getBooks={getBooks} listenToEachBook={listenToEachBook} />
                        ))} */}

                    </div>
                </div>
            </div> : <GetBook selectedBook={selectedBook} />}

            <div className='pagination'>
                <Pagination count={pageCount} page={page} onChange={changePage} variant="outlined" shape="rounded" />
            </div>


        </>
    );
}

export default Dashboard;