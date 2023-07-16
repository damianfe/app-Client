import {createContext, useState} from 'react'
import PropTypes from 'prop-types'


const UserContext = createContext(null)

const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const login = () => {
        setUser('Damian')
    }

    const logout = () => {
        setUser(null)
    }

    const contexValue = {
        user,
        login,
        logout
    }

  return (
    <UserContext.Provider value={contexValue}>
        {children}
    </UserContext.Provider>
  )
}
UserProvider.propTypes  = {
    children : PropTypes.node.isRequired
}

export {
    UserContext,
    UserProvider
}