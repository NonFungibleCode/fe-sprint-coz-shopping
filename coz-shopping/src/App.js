
import React from 'react';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import BookMarkPage from './pages/BookmarkPage';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productlistpage" element={<ProductListPage />} />
          <Route path="/bookmarkpage" element={<BookMarkPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
