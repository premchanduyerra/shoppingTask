import { createSlice } from '@reduxjs/toolkit';
export const getCartTotal = (cart) => (
    cart?.reduce((amount, item) => amount + item.price * item.quantity, 0)
)
export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []

    },
    reducers: {
        addItemToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.cart]
        },
        IncreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => (
                item.title === action.payload.cart.title ? (
                    {
                        ...item,
                        quantity: item.quantity + action.payload.cart.quantity,

                    }
                ) : item


            ))

        }
        ,
        DecreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => (
                item.title === action.payload.cart.title ? (
                    {
                        ...item,
                        quantity: item.quantity > 1 ? (item.quantity - action.payload.cart.quantity) : 1,

                    }
                ) : item


            ))

        },
        RemoveFromCart: (state, action) => {
            const index = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            state.cart = state.cart.filter((_, i) => i !== index);
        },
        EmptyCart: (state, action) => {
            state.cart = []
        }


    },
});

export const { EmptyCart, addItemToCart, IncreaseQuantity, DecreaseQuantity, RemoveFromCart } = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = state => state.cart.cart;

export default cartSlice.reducer;
