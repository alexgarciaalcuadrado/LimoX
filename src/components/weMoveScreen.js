import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { PiCarProfileFill } from "react-icons/pi";

const WeMovePage = () => {
  return (
    <Box className="we-move-container">
      <Box className="title-and-inputs-container">
        <Box className="title-container">
          <h2>WE MOVE PROFESSIONALY</h2>
        </Box>
        <Box className='inputs-and-button-container'>
          <Box className="input-container">
            <TextField
              InputProps={{
                disableUnderline: true,
                style: { textAlign: 'center', padding:'5px' },
              }}
              color="grey"
              className="input"
              label="Destinations"
              variant="standard"
            />
          </Box>
          <Box className="input-container">
            <TextField
              InputProps={{
                disableUnderline: true,
                style: { textAlign: 'center', padding:'5px' },
              }}
              color="grey"
              className="input"
              label="Date"
              variant="standard"
              select
            />
          </Box>
          <Box className="input-container">
            <TextField
              InputProps={{
                disableUnderline: true,
                style: { textAlign: 'center', padding:'5px' },
              }}
              color="grey"
              className="input"
              label="Select vehicle type"
              variant="standard"
              select
            />
          </Box>
          <Box className="car-button">
            <PiCarProfileFill size={50} color="#474343"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeMovePage;
