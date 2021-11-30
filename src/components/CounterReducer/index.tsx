import { useReducer } from "react";
import { initialState, ReducerC } from "../../reducers/counterReducer";

const CounterReducer = (): JSX.Element => {
  const [{ counter }, dispatch] = useReducer(ReducerC, initialState);
  return (
    <>
      <p>CounterReducer: {counter}</p>
      <button
        onClick={() => {
          dispatch({
            type: "INCREMENT",
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "CUSTOM",
            payload: 100,
          });
        }}
      >
        +100
      </button>
    </>
  );
};

export { CounterReducer };
