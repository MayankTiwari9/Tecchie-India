import React from 'react';
import '../Styles/preNavBar.css';
import { Link, Outlet } from 'react-router-dom';

const PreNavBar = () => {
    return (
        <div className='preNavBar'>
            <div>LOGO</div>
            <div><input type="text" placeholder='Search Products' /></div>
            <div><Link className='preNavLink' to="/sign-in">SignIn</Link></div>
            <div><Link className='preNavLink' to="/sign-up">SignUp</Link></div>
            <div><span class="material-symbols-outlined">shopping_cart</span></div>
            <Outlet />
        </div>
    )
}

export default PreNavBar;