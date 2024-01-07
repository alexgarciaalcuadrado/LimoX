import * as React from "react";
import Box from "@mui/material/Box";
import { IoIosArrowRoundForward } from "react-icons/io";

const OurValues = () => {
  const options = [
    {
      description: "Our vehicles – as demanded by our guests",
    },
    {
      description: "Our drivers – professionalism personified",
    },
    {
      description: "Our quality promise – of course reliable",
    },
    {
      description: "Our planning – relaxed for the event",
    },
    {
      description: "Our valet service – relaxed for the event",
    },
    {
      description: "Driving experience – control the adventure",
    },
  ];
  return (
    <Box className="our-values-container">
      <Box className="options-container">
        {options.map((item) => (
          <Box className="option-container">
            <h3>{item.description}</h3>
            <IoIosArrowRoundForward
              style={{ marginRight: "10px", fontSize: "50px" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurValues;
