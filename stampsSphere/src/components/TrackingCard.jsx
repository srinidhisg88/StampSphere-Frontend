import React from 'react'
import {
    Card as MaterialCard,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const TrackingCard = ({ image, name, orderedBy }) => {
  return (
    <MaterialCard className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt="card-image"
          className="w-full h-full object-contain"
        />
      </CardHeader>

      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>
          Ordered By: <span className="font-bold">{orderedBy}</span>
        </Typography>
        <div className="mt-4 p-2 w-full bg-gray-200 text-center rounded-md">
          Current Status: Out for Delivery
        </div>
      </CardBody>
      
      <CardFooter className="pt-0">
        {/* Optional Button or additional footer content can go here */}
      </CardFooter>
    </MaterialCard>
  )
}

export default TrackingCard;
