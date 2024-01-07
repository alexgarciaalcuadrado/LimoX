import * as React from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BookRide = () => {
  return (
    <Box className="book-ride-container">
      <Box className="title-and-inputs-container">
        <Box className="title-container">
          <h2>BOOK YOUR PROFESSIONAL RIDE</h2>
        </Box>
        <Box className='request-service-container'>
          <p>Request an exclusive transport service now</p>
          <Box className='icon-container'>
          <ArrowForwardIosIcon className="icon"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookRide;
