import { useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'

export const Login = () => {

    const {user, login} = useUser()

    useEffect(() => {
        login()
    },[login]);

  return (
    <>
    <h1>Login</h1>
    <hr />
    <h2>Bienvenido! {user}</h2>
    <Link to='/'>Volver al Home</Link>
    </>
  )
}