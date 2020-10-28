import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart, selectCart, DecreaseQuantity, IncreaseQuantity } from '../cartSlice';
import './CheckoutProduct.css'

function CheckoutProduct({ id, quantity, title, image, price, rating, hideButton }) {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart)
    const removeFromBasket = () => {

        dispatch(RemoveFromCart({ id }))

    }
    const decreaseQuantity = () => {
        dispatch(DecreaseQuantity({
            cart: {
                id,
                title: title,
                quantity: 1,
                image: image,
                price: price,
                rating: rating
            }
        }))
    }
    const increaseQuantity = () => {
        dispatch(IncreaseQuantity({
            cart: {
                id,
                title: title,
                quantity: 1,
                image: image,
                price: price,
                rating: rating
            }
        }))
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price * quantity}</strong>

                </p>
                <p className="checkoutProduct_title">
                    <button onClick={decreaseQuantity}>-</button> {quantity} <button onClick={increaseQuantity}>+</button>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))
                    }
                </div>
                {
                    !hideButton && (<button
                        onClick={removeFromBasket}
                    >remove from basket</button>)
                }

            </div>
        </div>
    )
}

export default CheckoutProduct
