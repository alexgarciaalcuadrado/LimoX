import { Box } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const cards = [
    {
      title: "Luxury Van",
      description: "Up to 5 guests. Conference seating available upon request",
      image: "/images/van-png.png",
    },
    {
      title: "Business Van",
      description: "Up to 5 guests. Conference seating available upon request",
      image: "/images/van-png.png",
    },
    {
      title: "Professional car",
      description: "Up to 5 guests. Conference seating available upon request",
      image: "/images/car-png.png",
    },
  ];
  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const goToPrevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <Box className="carousel-container">
      <ArrowBackIosNewIcon
        className="prev-button button"
        onClick={goToPrevCard}
        sx={{ fontSize: 40, color:'#414141' }}
      />
      <Box className="cards-wrapper">
        {cards.map((card, index) => {
          return (
            <Box
              key={index}
              className={`card ${
                index === currentIndex
                  ? "current"
                  : index === currentIndex - 1 ||
                    (currentIndex === 0 && index === 2)
                  ? "prev"
                  : index === currentIndex + 1 ||
                    (currentIndex === 2 && index === 0)
                  ? "next"
                  : ""
              }`}
            >
              <Box className="title">
                <h2>
                  LIMO<span>X</span>
                </h2>
                <h6>{card.title}</h6>
              </Box>
              <Box className="description">
                <p>{card.description}</p>
              </Box>
              <img src={card.image} />
              <Box className="request-service-container" style={{
                    width: '70%',
                    marginTop: 'auto',
                    marginBottom: '20px'
              }}>
                <p style={{
                    fontSize: '10px',
                    padding: '5px',
                    paddingLeft: '10px'
                }}>Request an exclusive LimoX now</p>
                <Box className="icon-container">
                  <ArrowForwardIosIcon sx={{ fontSize: 30 }} />
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <ArrowForwardIosIcon
        className="next-button button"
        onClick={goToNextCard}
        sx={{ fontSize: 40, color:'#414141' }}
      />
    </Box>
  );
};

export default Carousel;
