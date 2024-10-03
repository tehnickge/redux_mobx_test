import { Link, Route, Routes } from "react-router-dom";
import ReduxCounterComponent from "./ReduxCounterComponent/ReduxCounterComponent";

const ReduxComponent = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="counter">counter</Link>
        </li>
        <li>
          <Link to="todo">todo</Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<div>select pages</div>}></Route>
        <Route path="counter/*" element={<ReduxCounterComponent />}>
          counter
        </Route>
        <Route path="todo/*" element={<div>todo</div>}>
          todo
        </Route>
      </Routes>
    </div>
  );
};

export default ReduxComponent;
