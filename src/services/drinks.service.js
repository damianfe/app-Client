import axios from 'axios'

 const apiURL= import.meta.env.VITE_API_URL


 export const filterDrinksService = async (ingredient,category) => {
try{
    const url = `${apiURL}filter.php?i=${category}`
    const {data} = await axios.get(url)
return data.drinks || []
}catch (error){
    throw new Error("Hubo un error al obtener la bebida")
}

 }