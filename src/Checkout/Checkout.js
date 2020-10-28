import { TextareaAutosize, TextField } from '@material-ui/core'
import React from 'react'
import Header from '../Home/Header/Header'
import './Checkout.css'
import { getCartTotal, selectCart } from '../Cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../login/userSlice';
import { useHistory } from 'react-router'
import { EmptyCart } from '../Cart/cartSlice'
function Checkout() {
    const cart = useSelector(selectCart)
    const user = useSelector(selectUser)
    const history = useHistory()
    const dispatch = useDispatch()
    const placeOrder = () => {
        dispatch(EmptyCart({}))
        history.replace('/order');

    }
    return (
        <div className="checkout">
            <Header />
            <div className="checkout_address">
                <div className="checkout_addressOptions">
                    <h2 className="checkout_textfield" >Name:{user.user.name}</h2>
                    <h2 className="checkout_textfield">Email:{user.user.email}</h2>
                    <h2 className="checkout_textfield">Number:{user.user.phone}</h2>
                    <TextField className="checkout_textfield" id="outlined-basic" label="Country" variant="outlined" />
                    <TextField className="checkout_textfield" id="outlined-basic" label="State" variant="outlined" />
                    <TextField className="checkout_textfield" id="outlined-basic" label="City" variant="outlined" />
                    <TextField className="checkout_textfield" id="outlined-basic" label="Pincode" variant="outlined" />
                    <TextareaAutosize className="checkout_textfield" rowsMin={4} placeholder="Address" />
                </div>
                <div className="checkout_total">
                    <h3>Total:{getCartTotal(cart)}$</h3>
                </div>
                <button className="checkout_button" onClick={placeOrder} type="submit">Place Order</button>

            </div>
        </div>
    )
}

export default Checkout
