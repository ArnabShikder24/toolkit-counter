import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState  {
    count: number
}

const initialState: CounterState = {
    count: 0
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, actions: PayloadAction<number>) => {
            state.count += actions.payload
        },
        decrementByAmount: (state, actions: PayloadAction<number>) => {
            state.count -= actions.payload
        }
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;