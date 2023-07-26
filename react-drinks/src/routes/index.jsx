import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register";
import { Productos } from "../pages/Products";
import { Whiskyes } from "../pages/Products/Whiskys";
import { Vinos } from "../pages/Products/Vinos";
import { Licores } from "../pages/Products/Licores";



export default function AppRoutes() {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
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
