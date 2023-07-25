import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { loginAuthService, profileUserService, toggleFavoriteService } from '../services/auth.service'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [alert, setAlert] = useState(null);
    const [userProfile, setuserProfile] = useState(null);
    const [favorites, setFavorites] = useState([]);


    const Navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('DrinksToken')
        if(token){
            const decodToken = jwtDecode(token)
            setUser(decodToken.user)
        
        }
    }, []);

    const handleToggleFavorite = (idDrink) => {
        if (!favorites.includes(idDrink)) {
            setFavorites([
                ...favorites,
                idDrink
            ])
        } else {
            setFavorites(favorites.filter(favorite => favorite !== idDrink))
        }
        toggleFavoriteService(idDrink)
    }

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
           
            setFavorites(decodToken.user.favorites)
            Navigate("/")
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
        setuserProfile({})
        setFavorites([])
        sessionStorage.removeItem('DrinksToken')
    }

    const contexValue = {
        user,
        userProfile,
        login,
        logout,
        getProfile,
        alert,
        handleToggleFavorite,
        favorites

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