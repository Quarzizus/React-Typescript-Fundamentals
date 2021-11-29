import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = (number: number = 1): void => {
    setCounter(counter + number);
  };

  return (
    <div>
      <h3>Counter</h3>
      <span>Counter: {counter}</span>
      <br />
      <button onClick={() => increaseCounter(1)}> +1</button>
      <button onClick={() => increaseCounter(2)}> +2</button>
      <button onClick={() => increaseCounter(0)}> Reset</button>
    </div>
  );
};

export { Counter };
