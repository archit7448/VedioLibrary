import { Navigate, Outlet } from "react-router-dom";
import { useData } from "../../context/data";

const RestrictedRoute = () => {
  const { token } = useData();

  return token !== null ? <Navigate to="/explore" replace /> : <Outlet />;
};

export { RestrictedRoute };
