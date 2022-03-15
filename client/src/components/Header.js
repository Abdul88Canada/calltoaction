import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Call To Action</Link>
            <Link to='/additem' className='item'>Add Item</Link>
            <br/>
            <Link to='/addtype' className='item'>Add Type</Link>
            <br/>
            <Link to='/typeslist' className='item'>List of Types</Link>
        </div>
    )
}

export default Header;