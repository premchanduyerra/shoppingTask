import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Home/Header/Header'
import './Cart.css'
import { selectCart } from './cartSlice'
import CheckoutProduct from './CheckOutProduct/CheckoutProduct'
import SubTotal from './SubTotal/SubTotal'
function Cart() {
    const cart = useSelector(selectCart)
    return (
        <div className="cart">
            <Header />
            <div className="cart_body">
                <div className="cart_products">
                    {
                        cart?.map((product) => (
                            <div>
                                <CheckoutProduct
                                    id={product.id}
                                    quantity={product.quantity}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                    rating={product.rating}
                                />
                                <hr />
                            </div>


                        )

                        )
                    }
                </div>

                <div className="cart_order">
                    <SubTotal />
                </div>
            </div>


        </div>
    )
}

export default Cart
