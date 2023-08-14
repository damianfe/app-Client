import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Login } from "../pages/User/Login";
import { Profile } from "../pages/User/Profile";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/User/Register";
import { Productos } from "../pages/Products";
import { Whiskyes } from "../pages/Products/Whiskys";
import { Vinos } from "../pages/Products/Vinos";
import { Licores } from "../pages/Products/Licores";
import { ForgotPassword } from '../pages/User/Forgot'
import { ResetPassword } from "../pages/User/Reset";



export default function AppRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgotpass' element={<ForgotPassword />} />
            <Route path="/update-password/:token" element={<ResetPassword />} />
            <Route path="/user" element={<ProtectedRoutes />}>
                <Route path='profile' element={<Profile />} />
            </Route>
            <Route path="/productos" element={<Productos />} />
            <Route path="/whiskys" element={<Whiskyes />} />
            <Route path="/vinos" element={<Vinos />} />
            <Route path="/licores" element={<Licores />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    );
}
