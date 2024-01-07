import * as React from "react";
import Box from "@mui/material/Box";

const FleeOptions = () => {
  return (
    <Box className="flee-options-container">
      <Box className="title-and-options-container">
        <Box className="title-container">
          <h2>AT LimoX WE HAVE</h2>
          <h2>THE BEST FLEET OPTIONS</h2>
        </Box>
        <Box className='description-container'>
          <p>Not only customers from Europe but from all over the world trust LimoX service</p>
        </Box>
        <Box className='logos-container'>
            <img className="logo" src="/images/volkswagen-logo.jpg"/>
            <img className="logo" src="/images/bmw-logo.jpg"/>
            <img className="logo" src="/images/audi-logo.jpg"/>
            <img className="logo" src="/images/mercedes-logo.jpg"/>
        </Box>
      </Box>
    </Box>
  );
};

export default FleeOptions;
