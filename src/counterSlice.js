import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state += 1
    },
    decrement: (state) => {
      state -= 1
    },
    incrementBy: (state, action) => {
      state += action.payload
    },
  },
})

export const { increment, decrement, incrementBy } = counterSlice.actions

export const selectCounter = (state) => state.value

export default createSlice.reducer
