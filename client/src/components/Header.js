import React, {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();

    const logout = () => {
        dispatch({type: 'LOGOUT'});
        setUser(null);
    }

    const onSignInClick = () => {
        navigate('/auth');
    }

    useEffect(() => {
        const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    
    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Call To Action</Link>
            <Link to='/additem' className='item'>Add Item</Link>
            <br/>
            <Link to='/addtype' className='item'>Add Type</Link>
            <br/>
            <Link to='/typeslist' className='item'>List of Types</Link>
                {location.pathname !== '/auth' && (user ? (
                    <div className='right menu'>
                        <h4 className='item'>{user.result.name}</h4>
                        <button className='ui red basic button' onClick={(logout)}>Sign Out</button>
                    </div>
                ) : (<div className='right menu'><button className='ui red basic button' onClick={(onSignInClick)}>Sign In</button></div>))}
            </div>
    )
}

export default Header;