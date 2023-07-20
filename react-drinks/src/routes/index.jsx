import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { ProtectedRoutes } from "./ProtectedRoutes";


export default function AppRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path="/user" element={<ProtectedRoutes/>}>
                <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>

    )
}