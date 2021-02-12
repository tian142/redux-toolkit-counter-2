import { createStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

const store = createStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
