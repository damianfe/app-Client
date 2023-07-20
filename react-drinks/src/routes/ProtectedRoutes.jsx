import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/authProvider"

export const ProtectedRoutes = () => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to={"/login"} replace />
}
