import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;

export const Licores = () => {
  const [licores, setLicores] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiURL}licores`)
      .then((response) => {
        setLicores(response.data.licors);
      })
      .catch((error) => {
        console.error('Ocurrió un error:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-white text-4xl font-bold mb-8" style={{ textShadow: '2px 2px 4px black' }}>
        Licores
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {licores.map((product) => (
          <Card key={product._id} className="w-full mb-4" style={{ backgroundColor: 'rgba(192, 56, 56, 0.801)' }}>
            <CardMedia
              component="img"
              image={product.urlImage}
              alt={product.name}
              className="object-contain"
              style={{ height: '250px', padding: '10px' }}
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
        ))}
      </div>
    </div>
  );
};
