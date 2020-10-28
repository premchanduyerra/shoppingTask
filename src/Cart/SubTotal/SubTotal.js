import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCartTotal, selectCart } from '../cartSlice'
import './SubTotal.css'
function SubTotal() {
    const cart = useSelector(selectCart)
    const history = useHistory();
    return (
        <div className="subTotal">
            <p>
                Subtotal ({cart?.map(item => item.quantity).reduce((prev, next) => prev + next, 0)} items):<strong>{getCartTotal(cart)}</strong>
            </p>
            <small className="subtotal_gift">
                <input type="checkbox" />this order contains gift
                            </small>
            <button
                onClick={e => history.push('/checkout')}
            >Proceed to checkout</button>
        </div>
    )
}

export default SubTotal
