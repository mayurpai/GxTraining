import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, myValue: 100 },
    reducers: {
        imv: (state) => { state.value += 1 },
        decrementValue: (state) => { state.value -= 1 },
        imv: (state) => { state.myValue += 1 },
        decrementMyValue: (state) => { state.myValue -= 1 },
        decrementByPayload: (state, action) => { state.value -= action.payload },
    }
})

export const { imv, decrementValue, decrementByPayload, imv, decrementMyValue } = counterSlice.actions;
export default counterSlice.reducer;
