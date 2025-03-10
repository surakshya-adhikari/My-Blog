import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const { status } = useSelector((state) => state.auth); // Get auth status from Redux store

    return status ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
