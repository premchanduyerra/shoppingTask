import { AddShoppingCart } from '@material-ui/icons'
import React, { useEffect } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../login/userSlice';
import { Link } from 'react-router-dom';
import { selectCart } from '../../Cart/cartSlice';
import { removeUser } from '../../login/userSlice'
function Header() {
    const user = useSelector(selectUser)
    const cart = useSelector(selectCart)
    const dispatch = useDispatch();
    // console.log(user);
    const logout = () => {
        dispatch(removeUser())
    }
    return (
        <div className="header">
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }} >
                <div className="header_logo">
                    <img className="header_logoImage" src="logo.png" alt="" />
                    <h2>Shopping</h2>
                </div>
            </Link>

            <div className="header_userName">

                <h2>Welcome {user.user.name}</h2>
            </div>
            {
                !user.user.name ? (
                    <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }} className="header_auth">
                        <h3>login</h3>
                    </Link>
                ) : (<div className="header_auth" onClick={logout}>
                    <h3>logout</h3>
                </div>)
            }

            <div className="header_cart">
                <div className="header_cartIcon">
                    <Link to="/cart">
                        <AddShoppingCart />
                    </Link>

                </div>

                <div className="header_cartItemsNumber">
                    <h3>{cart?.map(item => item.quantity).reduce((prev, next) => prev + next, 0)}</h3>
                </div>
            </div>
        </div>
    )
}

export default Header
