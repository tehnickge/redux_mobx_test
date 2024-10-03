import { observer } from "mobx-react-lite";
import counterMobx from "../../../store/mobx/counter";

const CounterMobxComponent = observer(() => {
  return (
    <div className="counter">
      <div className="btns">
        <label>{"Counter = " + counterMobx.count}</label>
        <button className="btn" onClick={() => counterMobx.increment()}>
          +
        </button>
        <button className="btn" onClick={() => counterMobx.decrement()}>
          -
        </button>
      </div>
    </div>
  );
});

export default CounterMobxComponent;
