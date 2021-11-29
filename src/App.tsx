import { Counter } from "./components/Counter";
import { TimeFather } from "./components/TimerFather";
import { User } from "./components/User";

const App = (): JSX.Element => {
  return (
    <div className="App">
      <h2>React + Typescript</h2>
      <Counter />
      <hr />
      <User />
      <hr />
      <TimeFather />
    </div>
  );
};

export default App;
