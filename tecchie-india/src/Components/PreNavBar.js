import React from 'react';
import '../Styles/preNavBar.css'

const PreNavBar = () => {
  return (
    <div className='preNavBar'>
        <div>LOGO</div>
        <div>
            <input type='text' name="search" placeholder='Search Products'/>
        </div>
        <div>
            <button>LOGIN</button>
        </div>
        <div>
            Cart
        </div>
    </div>
  )
}

export default PreNavBar;