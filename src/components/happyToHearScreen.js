import * as React from "react";
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HappyToHear = () => {
  return (
    <Box className="happy-to-hear-container">
      <Box className="title-and-inputs-container">
        <Box className="title-container">
          <h2>We are happy to hear from you.</h2>
          <h2>Limousine service, airport transfer, shuttle service</h2>
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

export default HappyToHear;
