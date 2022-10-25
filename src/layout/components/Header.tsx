import {
  AppRegistration,
  Login,
  MonetizationOn,
  Web,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import Head from "next/head";
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
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>Next.js PWA Example</title>

      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#317EFB" />
      {/* favicon */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
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
