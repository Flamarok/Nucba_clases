import {INCREMENT, DECREMENT} from "../types";

export const initialState = {count: 0};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{...state, count: state.count + 1}; // Los tres puntos hacen referencia a que mantenga el estado anteriores y no se reinicie

        case DECREMENT:
            return{...state, count: state. count - 1};

        default:
            return state;
    }
}