import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
export default function Home () {

     const {user,logout} = useUser();
    return (
        <div>
           {/*  <SearchForm/> */}
           <h1>Home</h1>
           <hr />
           {
      user ? (
        <>
        <h2>Hola! {user}</h2>
        <button onClick={() => logout()}>Salir</button>
        </>
      ) : (
        <Link to={'/login'}>Ingresa</Link>
      )
    }
           
        </div>
    )
}