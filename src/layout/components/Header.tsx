import {
  AppRegistration,
  Login,
  MonetizationOn,
  Web,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { Fragment } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const linksLeft = [
  {
    label: "Plantillas",
    href: "/plantillas",
    icon: <Web />,
  },
  {
    label: "Precios",
    href: "/precios",
    icon: <MonetizationOn />,
  },
];

const linksRight = [
  {
    label: "Iniciar sesión",
    href: "/login",
    icon: <Login />,
  },
  {
    label: "Registrarse",
    href: "/register",
    icon: <AppRegistration />,
  },
];

const Header = () => (
  <Fragment>
    <Box>
      <Box
        display={{
          xs: "none",
          md: "block",
        }}
      >
        <NavDesktop linksLeft={linksLeft} linksRight={linksRight} />
      </Box>

      <Box
        display={{
          xs: "block",
          md: "none",
        }}
      >
        <NavMobile linksLeft={linksLeft} linksRight={linksRight} />
      </Box>
    </Box>
  </Fragment>
);

export default Header;
