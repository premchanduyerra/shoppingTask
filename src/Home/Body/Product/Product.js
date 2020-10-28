import { Button, makeStyles, Popover, Typography } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, selectCart, IncreaseQuantity } from '../../../Cart/cartSlice';
import './Product.css'
// import { actionTypes } from './reducer'
// import { useStateValue } from './StateProvider'
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));
function Product({ id, title, image, price, rating }) {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart)

    console.log(cart);


    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id1 = open ? 'simple-popover' : undefined;
    const addToBasket = (event) => {
        let productIncludes = cart.some(item => item.title === title)
        console.log(productIncludes);
        if (productIncludes) {
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
        } else {
            dispatch(addItemToCart({
                cart: {
                    id: id,
                    title: title,
                    quantity: 1,
                    image: image,
                    price: price,
                    rating: rating
                }
            }))
        }

        setAnchorEl(event.currentTarget);
        setTimeout(() => {
            setAnchorEl(null);
        }, 1000)


    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))
                    }



                </div>
            </div>
            <img src={image} alt="" />
            <Button variant="outlined" aria-describedby={id1} color="" onClick={addToBasket}>Add to basket</Button>
            <Popover
                id={id1}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>Added To basket</Typography>
            </Popover>
            {/* <button

            >Add to basket</button> */}
        </div>
    )
}

export default Product
