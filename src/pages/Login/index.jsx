import { useEffect } from "react"
import useUser from "../../hooks/useUser"


export const Login = () => {
 const{user,login }= useUser()
 useEffect(()=> {
   login()
 },[login]);

    return (
        <>
            <h1>login</h1>
            <br />
            <link to={'/'}>volver Al home</link>
            <br />
            <h2>Bienvenidos,{user}</h2>
        </>
    )
}
