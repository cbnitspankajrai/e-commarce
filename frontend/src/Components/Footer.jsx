import React from "react";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        color: "white",
        height: 175,
        marginTop: "60px",
        backgroundColor: "primary.dark",
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Box>
          <ul style={{ listStyle: "none" }}>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>
        <Box>
          <ul style={{ listStyle: "none" }}>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>
        <Box>
          <ul style={{ listStyle: "none" }}>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </Box>
      </Box>

      <p style={{margin:'20px auto' }}>All right reserved @ Ecom.in demo</p>
      </Box>
    
  );
}

export default Footer;
