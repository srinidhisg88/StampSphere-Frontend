import React from 'react'
import image from '../assets/images/offical_stamps/img1.jpg'

const TrackingCard = () => {
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
            {name}
          </Typography>
          <Typography>
            {about}
            <p className="font-bold">Price: {price}</p>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md transition-all duration-500 hover:scale-105">{state}</Button>
        </CardFooter>
      </MaterialCard>
  )
}

export default TrackingCard;
  