import { Link, Route, Routes } from "react-router-dom";
import CounterMobxComponent from "./CounterMobxComponent/CounterMobxComponent";
import TodoMobXComponent from "./TodoMobXComponent/TodoMobXComponent";

const MobxComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"counter"} title="conter">
            counter
          </Link>
        </li>
        <li>
          <Link to={"todo"}> todo</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<div>no page</div>}></Route>
        <Route path="counter" element={<CounterMobxComponent />}></Route>
        <Route path="todo" element={<TodoMobXComponent />}></Route>
      </Routes>
    </div>
  );
};
export default MobxComponent;
