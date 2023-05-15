import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div id="nav-body">
      <span id="title">
        <img id="logo" src="../logo.png" alt="logo" />
        <span id="name">Coz-Shopping</span>
      </span>
      <div id="menu">
        <Link to="/">메인페이지</Link><br></br>
        <Link to="/ProductListPage">상품리스트 페이지 이동하기</Link>
      </div>
    </div>
    );
};

export default Header;