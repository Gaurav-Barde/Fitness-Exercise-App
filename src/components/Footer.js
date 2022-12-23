import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" px="40px" pt="24px" alignItems="center">
        <img src={logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="10px">
          Made with ❤️ by{" "}
          <a
            href="https://www.youtube.com/@NeatDesigns/videos"
            target="_blank"
            rel="norefrer"
            style={{ textDecoration: "none" }}
          >
            Gaurav Barde
          </a>
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
