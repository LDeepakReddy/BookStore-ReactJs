

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bookview from './components/books/Bookview';
import Mycart from './components/cart/Mycart';
import ForgotPassword from './components/Forgotpassword/ForgotPassword';
import GetBook from './components/getBook/GetBook';
import Header from './components/header/Header';
import OrderSummery from './components/Order/OrderSummery';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/Dashboard/Dashboard';

import HomePage from './pages/homepage/HomePage';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          {/* <Route path='/book/:bookId' element={<GetBook />} /> */}
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/order' element={<OrderSummery />} ></Route>
          <Route path='/ordersuccess' element={<OrderSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    
      {/* <ForgotPassword /> */}
=
    </div>


  );
}

export default App;
