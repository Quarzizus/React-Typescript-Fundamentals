import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { Form } from "./components/Form";
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
      <hr />
      <CounterReducer />
      <hr />
      <Form />
    </div>
  );
};

export default App;
