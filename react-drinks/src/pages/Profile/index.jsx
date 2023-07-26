import { useEffect, useState } from "react"

import { Link } from "react-router-dom"
import styles from './index.module.css'
import PropTypes from 'prop-types';
import { getRecipeService } from "../../services/drinks.service";
import { Card } from "react-bootstrap";
import useAuth from "../../hooks/authProvider";


export const Profile = () => {

  const { user, getProfile, favorites /* handleToggleFavorite */ } = useAuth()
  const [recipes, setRecipes] = useState([])

  //const { dispatch } = useCart()

  useEffect(() => {
    getProfile()
    const fetchRecipes = async () => {
      try {
        const recipePromises = favorites.map((id) => getRecipeService(id));
        const recipesData = await Promise.all(recipePromises);
        setRecipes(recipesData.flat());

      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);


  return (
    
    user ? (
      <div className={styles.profile}>
        <div style={{
          color: "white",
          textShadow: "2px 2px 4px black"
        }}>
          <h1>¡BIENVENIDO {user.name}!</h1>
          <hr />
          <h3>Tus Datos</h3>
          <h4>{user.email}</h4>
        </div>
        <hr />
        <h2 className="d-flex align-items-center" style={{
          color: "white",
          textShadow: "2px 2px 4px black"
        }}>Tus Favoritos</h2>
        {
          favorites.length ? (
            <div className={styles.contenedor_fav}>
              {recipes.map((recipeData, index) => (
                <Card key={index} className={styles.strDrink}>
                  <Card.Img variant="top" src={recipeData.strDrinkThumb}
                    alt={`Imagen`} className={styles.strImg} />
                  <Card.Body className="d-flex p-0">

                    <Card.Text>
                      {recipeData.strDrink}
                      <h5>{`$ ${(recipeData.idDrink / 10).toFixed(0)}`}</h5>
                    </Card.Text>

                  </Card.Body>
                </Card>
              ))}

            </div>)
            :
            (<h5 className={styles.h5}style={{
              color: "white",
              textShadow: "2px 2px 4px black"
            }}>¡Aún no tienes favoritos agregados!</h5>)
        }
        <hr />
        <div className={styles.button}>
          <Link to={'/'}>Descubre más...</Link>
        </div>
      </div>

    ) : (
      <div className={styles.button}>
        <Link to={'/login'}>Ingresá...</Link>
      </div>
    )
    
  )
}
Profile.propTypes = {
  drinks: PropTypes.object



}
