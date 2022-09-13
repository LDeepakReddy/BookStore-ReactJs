
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Bookview from './components/books/Bookview';
import ForgotPassword from './components/Forgotpassword/ForgotPassword';
import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dashboard' element={<Bookview />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage />  */}
      {/* <Header /> */}
      {/* <Bookview />  */}
      {/* <ForgotPassword /> */}

    </div>


  );
}

export default App;
