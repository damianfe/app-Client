import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { loginAuthService, profileUserService } from '../services/auth.service'
import jwtDecode from 'jwt-decode'


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState(null);
    const [userProfile, setuserProfile] = useState(null);
    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const login = async (info) => {
        try {
            const { token } = await loginAuthService(info);
            sessionStorage.setItem('DrinksToken', token)

            const decodToken = token ? jwtDecode(token) : null
            setUser(decodToken.user)
            //console.log(response);
        } catch (error) {
            //console.log(error);
            handleAlert(error)

        }

    }
    const getProfile = async () => {
        try {
            const token = sessionStorage.getItem('DrinksToken')
            if (!token) {
                return null
            }

            const response = await profileUserService(token)
            console.log(response)

            setuserProfile(response.user)
        } catch (error) {
            handleAlert(error)
        }

    }
    const logout = () => {
        setUser(null)
    }

    const contexValue = {
        user,
        userProfile,
        login,
        logout,
        getProfile,
        alert,

    }

    return (
        <AuthContext.Provider value={contexValue}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    AuthContext,
    AuthProvider
}