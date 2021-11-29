import { useState } from "react";
import { Timer } from "../Timer";

const TimeFather = () => {
  const [miliseconds, setMiliseconds] = useState<number>(1000);
  return (
    <div>
      <h2>Timer Father</h2>
      <span>Milisegundos {miliseconds}</span>
      <button onClick={() => setMiliseconds(1000)}>1000</button>
      <button onClick={() => setMiliseconds(2000)}>2000</button>
      <Timer miliseconds={miliseconds} />
    </div>
  );
};

export { TimeFather };
