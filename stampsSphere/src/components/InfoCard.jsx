import {
  Card as MaterialCard, // Renaming the imported Card component
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import img1 from '../assets/images/difinitive_stamps/img1.jpg'

const InfoCard = ({ image }) => {
  return (
    <MaterialCard className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-contain" // Adjusted to fit the entire image without cropping
        />
      </CardHeader>

      {/* <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader> */}
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Syed Ahmed Khan Stamp
        </Typography>
        <Typography>
          Histroy about the stamp
          <p className="font-bold">Price: Rs.599</p>
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105">Buy Now</Button>
      </CardFooter>
    </MaterialCard>
  );
};

export default InfoCard; // Exporting the renamed component
