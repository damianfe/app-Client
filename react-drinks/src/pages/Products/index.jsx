import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ImgWhisky from '../../../public/whisky2.jpg';
import Vinos from '../../../public/vino-tinto.png';
import Licores from '../../../public/licore.png';

export const Productos = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
      <Link to="/whiskys" className="no-underline">
        <Card className="w-72 h-96 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardMedia
            component="img"
            image={ImgWhisky}
            alt="Whiskys"
            className="object-cover h-56"
          />
          <CardContent className="bg-[#a94007] text-center">
            <Typography variant="h6" className="text-white font-bold">
              Whiskys
            </Typography>
          </CardContent>
        </Card>
      </Link>

      <Link to="/vinos" className="no-underline">
        <Card className="w-72 h-96 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardMedia
            component="img"
            image={Vinos}
            alt="Vinos"
            className="object-cover h-56"
          />
          <CardContent className="bg-[#7c3030] text-center">
            <Typography variant="h6" className="text-white font-bold">
              Vinos
            </Typography>
          </CardContent>
        </Card>
      </Link>

      <Link to="/licores" className="no-underline">
        <Card className="w-72 h-96 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <CardMedia
            component="img"
            image={Licores}
            alt="Licores"
            className="object-cover h-56"
          />
          <CardContent className="bg-[#e0c49d] text-center">
            <Typography variant="h6" className="text-black font-bold">
              Licores
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};
