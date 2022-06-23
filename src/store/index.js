import { createStore } from "redux";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const HANDLETOGGLESTATE = "HANDLETOGGLESTATE";

const initState = { counter: 0, factor: 3, showCounter: false };

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + state.factor };
    case DECREASE:
      return { ...state, counter: state.counter - state.factor };
    case HANDLETOGGLESTATE:
      return {
        ...state,
        showCounter: (state.showCounter = !state.showCounter),
      };
    default:
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
