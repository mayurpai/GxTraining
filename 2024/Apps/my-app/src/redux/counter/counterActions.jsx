import { DECREMENT, INCREMENT, RESET } from "./counterTypes";

export const increment = (countValue = 1) => ({ type: INCREMENT, payload: countValue })
export const decrement = (countValue = 1) => ({ type: DECREMENT, payload: countValue })
export const reset = () => ({ type: RESET, payload: 0 })
