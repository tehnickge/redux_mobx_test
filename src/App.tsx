import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LinksProps } from "./components/header/components/TestComponent/TestComponent";
import PrivateRoute from "./utils/router/privateRoute";
import MobxComponent from "./components/MobX/MobxComponent";
import ReduxComponent from "./components/redux/RexuxComponent";

export const Links: LinksProps = {
  links: [
    {
      href: "/redux",
      title: "redux",
    },
    {
      href: "/mobx",
      title: "mobx",
    },
    {
      href: "/",
      title: "main",
    },
  ],
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/redux/*" element={<ReduxComponent />}></Route>
          <Route path="/mobx/*" element={<MobxComponent />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
