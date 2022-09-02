import { INCREMENT, DECREMENT, INCREMENT_5, DECREMENT_5, DIVIDE, MULTIPLY, RESET } from "../types";


// aqui está el estado global que luego es redefinido en reducer-index

export const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case INCREMENT_5:
      return { ...state, count: state.count + 5 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case DECREMENT_5:
      return { ...state, count: state.count - 5 };
    case DIVIDE:
      return { ...state, count: state.count / 2 };
    case MULTIPLY:
      return { ...state, count: state.count * 2 };
    case RESET:
      return { ...state, count: initialState};
    
      default:
      return state;
  }
};
