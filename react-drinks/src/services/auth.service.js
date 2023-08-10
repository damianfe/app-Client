import axios from 'axios'



const apiURL = import.meta.env.VITE_API_URL_AUTH;


export const registerAuthService = async (info) => {
    try {
        const url = `${apiURL}register`;
        const { data } = await axios.post(url,
            {
                ...info
            },
            {
                headers: {
                    "Content-Type": "application/json",

                },
                
            })
        return data

    } catch (error) {
        throw error.resposne.data
    }
}

export const loginAuthService = async (info) => {

    try {
        const url = `${apiURL}login`;
        const { data } = await axios.post(url,
            {
                ...info
            },
            {
                headers: {
                    "Content-Type": "application/json",

                }

            })

        return data

    } catch (error) {
        //console.log(error.response.data.message)
        throw error.response.data
    }
}
export const profileUserService = async (token) => {
    try {
        const url = `${apiURL}profile`;
        const { data } = await axios.get(url, {
            headers: {
                Authorization: token
            }
        })

        return data
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}
export const toggleFavoriteService = async (idDrink) => {
    try {

        const token = sessionStorage.getItem('DrinksToken')
            if (!token) {
                return null
            }
        const url = `${apiURL}favorite?drink=${idDrink}`;
        const { data } = await axios.get(url, {
            headers: {
                Authorization: token
            }
        })

        return data
    } catch (error) {
        console.log(error)
        throw error.response.data
    }
}
export const resetPassword = async (token, password) => {
    try {
      const response = await axios.post('/api/reset-password', { token, password });
      return response.data.message;
    } catch (error) {
      throw new Error('Error al restablecer la contraseña');
    }
  };