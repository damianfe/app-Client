import { createContext, useState } from 'react'
import PropTypes from 'prop-types'
const UserContext = createContext(null)


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    const login = () => {
        setUser('damian')

    }
    const logout = () => {
        setUser(null)

    }
    const contextValue = {
user,
login,
logout

    }

    return (
        <UserContext.Provider value={contextValue}>
{children}
        </UserContext.Provider>
    )
}


UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export {
    UserContext,
    
}