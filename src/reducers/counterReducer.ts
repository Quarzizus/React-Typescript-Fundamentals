type ActionType = { type: "INCREMENT" } | { type: "CUSTOM"; payload: number };

const initialState = {
  counter: 0,
};

const ReducerC = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "CUSTOM":
      return {
        state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};

export { ReducerC, initialState };
