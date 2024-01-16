import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { PiCarProfileFill } from "react-icons/pi";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const WeMovePage = () => {
  return (
    <Box className="we-move-container">
      <Box className="title-and-inputs-container">
        <Box className="title-container">
          <h2>WE MOVE PROFESSIONALY</h2>
        </Box>
        <Box className="inputs-and-button-container">
          <Box className="input-container">
            <TextField
              InputProps={{
                disableUnderline: true,
                style: { textAlign: "center", padding: "5px" },
              }}
              color="grey"
              className="input"
              label="Destinations"
              variant="standard"
            />
          </Box>
          <Box className="input-container">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className="input"
                label="Date"
                sx={{ width: "97%", marginTop: "10px" }}
                slotProps={{ textField: { variant: "standard" } }}
              />
            </LocalizationProvider>
          </Box>
          <Box className="input-container">
            <TextField
              InputProps={{
                disableUnderline: true,
                style: { textAlign: "center", padding: "5px" },
              }}
              color="grey"
              className="input"
              label="Select vehicle type"
              variant="standard"
              select
            >
              <MenuItem value={10}>Car</MenuItem>
              <MenuItem value={20}>4x4</MenuItem>
              <MenuItem value={30}>Limousine</MenuItem>
            </TextField>
          </Box>
          <Box className="car-button">
            <PiCarProfileFill size={50} color="#474343" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WeMovePage;
