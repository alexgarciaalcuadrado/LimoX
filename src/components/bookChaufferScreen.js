import * as React from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BookChauffer = () => {
  return (
    <Box className="book-chauffer-container">
      <Box className="title-and-inputs-container">
        <Box className="title-container">
          <h2>BOOK EXCLUSIVE CHAUFFER SERVICES</h2>
        </Box>
        <Box className='request-service-container'>
          <p>Request an exclusive LimoX now</p>
          <Box className='icon-container'>
          <ArrowForwardIosIcon sx={{ fontSize: 40 }}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BookChauffer;
