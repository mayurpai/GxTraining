import { counterInitialState } from "./counterInitialState";
import { DECREMENT, INCREMENT, RESET } from "./counterTypes";

export const counterReducer = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + Number(action.payload),
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - Number(action.payload),
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
}
