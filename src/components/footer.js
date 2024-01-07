import * as React from "react";
import Box from "@mui/material/Box";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="info-container">
        <Box className="item">
          <h2>
            LIMO<span>X</span>
          </h2>
        </Box>
        <Box className="item">
          <p>P.O. Box 4621 Arlington,VA 2220</p>
        </Box>
        <Box className="item">
          <p>D.C. (202) 232-4440</p>
          <p>Dispatch: (202) 779-6054</p>
          <p>Virginia: (703) 979-6664</p>
        </Box>
        <Box className="item">
          <p>
            Join our list to receive free offerings, discounts, coupons & our
            useful newsletter.
          </p>
          <Box className="email-button">
            <input placeholder="Your email ID"/>
            <IoIosArrowRoundForward style={{fontSize: '30px'}}/>
          </Box>
        </Box>
        <Box className="item icon-container">
            <Box className='icon'>
                <FaFacebookF />
            </Box>
            <Box className='icon'>
                <FaXTwitter />
            </Box>
            <Box className='icon'>
                <FaLinkedinIn />
            </Box>
            <Box className='icon'>
                <FaWhatsapp />
            </Box>
            <Box className='icon'>
                <ImYoutube2 />
            </Box>
        </Box>
      </Box>
      <hr />
      <Box className='final-message-container'>
        <p>
          We would be happy to send you a detailed offer for our extensive
          driving service immediately. Let yourself be inspired – whether by the
          airport transfer, shuttle service, valet parking or our LimoX service.
          We look forward to your call.
        </p>
      </Box>
      <Box className='copyright-container'>
        <p>Imprint Data protection declaration</p>
        <p>Copyright © 2023 LimoX. All rights reserved.</p>
      </Box>
    </Box>
  );
};

export default Footer;
