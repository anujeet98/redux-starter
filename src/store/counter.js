import { createSlice } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementBy2(state, action){
            state.counter += action.payload;
        },
        decrementBy2(state, action){
            state.counter -= action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;