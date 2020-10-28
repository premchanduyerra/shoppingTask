import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../login/userSlice';
import cartReducer from '../Cart/cartSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    cart: cartReducer
  },
});
