import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const counter = configureStore({
    reducer: {
        counter : counterReducer
    }
})

export default counter;