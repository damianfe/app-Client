import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getRecipeService } from "../../../services/drinks.service";
import { Card, CardContent, CardMedia, Typography, Button, TextField, Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"; // Material UI components
import useAuth from "../../../hooks/authProvider";

export const Profile = () => {
  const { user, getProfile, favorites } = useAuth();
  const [recipes, setRecipes] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Estado para abrir/cerrar modal
  const [formData, setFormData] = useState({ name: "", email: "" }); // Estado para datos del formulario

  useEffect(() => {
    getProfile();
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
  }, [favorites]);

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = async () => {
    // Aquí puedes hacer una llamada a la API para actualizar el perfil
    // Ejemplo: await updateProfileService(formData);
    console.log("Datos guardados:", formData);
    setIsEditing(false);
  };

  return user ? (
    <div className="flex flex-col items-center justify-center text-center space-y-6 text-white p-6 bg-gray-900 shadow-lg rounded-lg">
      <div>
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          ¡BIENVENIDO {user.name}!
        </h1>
        <hr className="my-4 border-t-2 border-white" />
        <h3 className="text-2xl">Tus Datos</h3>
        <h4 className="text-xl">{user.email}</h4>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleEditClick}
          className="mt-4"
        >
          Editar Perfil
        </Button>
      </div>

      {/* Modal para edición de perfil */}
      <Dialog open={isEditing} onClose={handleClose}>
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <Box className="flex flex-col items-center space-y-4">
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              className="mb-4"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              className="mb-4"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveClick} color="primary" variant="contained">
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>

      <hr className="my-4 border-t-2 border-white" />
      <h2 className="text-3xl font-semibold text-white drop-shadow-lg">Tus Favoritos</h2>
      <hr className="my-4 border-t-2 border-white" />

      {favorites.length ? (
        <div className="flex flex-wrap justify-center gap-6">
          {recipes.map((recipeData, index) => (
            <Card key={index} className="w-72 bg-orange-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <CardMedia
                component="img"
                image={recipeData.strDrinkThumb}
                alt={`Imagen`}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <Typography className="text-xl font-semibold mb-2">{recipeData.strDrink}</Typography>
                <Typography className="text-lg">{`$${(recipeData.idDrink / 10).toFixed(0)}`}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <h5 className="text-xl text-white drop-shadow-lg">¡Aún no tienes favoritos agregados!</h5>
      )}
      <hr className="my-4 border-t-2 border-white" />
      <div>
        <Link to="/" className="text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">Descubre más...</Link>
      </div>
    </div>
  ) : (
    <div>
      <Link to="/login" className="text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">Ingresá...</Link>
    </div>
  );
};

Profile.propTypes = {
  drinks: PropTypes.object
};
