import { Fragment, ReactNode } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box display={"flex"} flexDirection="column" minHeight={"100vh"}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};

export default Layout;
