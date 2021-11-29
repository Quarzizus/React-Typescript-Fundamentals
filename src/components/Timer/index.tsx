import { useState, useEffect, useRef } from "react";

type TimerArgs = {
  miliseconds: number;
  seconds?: number;
};

const Timer = ({ miliseconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState(0);

  const ref = useRef<number>();
  useEffect(() => {
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, miliseconds);
  }, [miliseconds]);

  return (
    <div>
      <h2>Timer: {seconds}</h2>
    </div>
  );
};

export { Timer };
