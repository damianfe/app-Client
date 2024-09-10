import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;

export const Whiskyes = () => {
  const [whiskys, setWhiskys] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURL}whiskys`)
      .then((response) => {
        setWhiskys(response.data.whiskys);
      })
      .catch((error) => {
        console.error('Ocurrió un error:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-4xl font-bold mb-8" style={{ textShadow: '2px 2px 4px black' }}>
        Whisky
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.isArray(whiskys) ? (
          whiskys.map((product) => (
            <Card key={product._id} className="w-full hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <CardMedia
                component="img"
                image={product.urlImage}
                alt={product.name}
                className="object-cover h-48"
              />
              <CardContent className="text-center bg-gray-100">
                <Typography variant="h6" className="font-bold">
                  {product.name}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  {`$ ${product.price}`}
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" className="text-white">Cargando whiskys...</Typography>
        )}
      </div>
    </div>
  );
};
