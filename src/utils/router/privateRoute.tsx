import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const flags = true;
  return <div>{flags ? <Outlet /> : <Navigate to="/idinah"></Navigate>}</div>;
};

export default PrivateRoute;
