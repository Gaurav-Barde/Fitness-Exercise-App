import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          style={{ width: "48px", height: "48px", marginTop: "0 20px" }}
        />
      </Link>
      <Stack fontSize="24px" direction="row" gap="40px" alignItems="flex-end">
        <Link
          to="/"
          style={{ ...linkStyle, borderBottom: "3px solid #FF2625" }}
        >
          Home
        </Link>
        <a href="#exercises" style={linkStyle}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

const linkStyle = { textDecoration: "none", color: "#3A1212" };

export default Navbar;
